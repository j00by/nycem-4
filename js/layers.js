// SCRIPTS PART 2/2
// MAPBOX SCROLLYTELLING LAYERS
let initLoad = true;
const layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity'],
    'heatmap': ['heatmap-opacity']
};

const alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty',
    'full': 'fully'
};

const getLayerPaintType = (layer) => {
    const layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
};

const setLayerOpacity = (layer) => {
    const paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach((prop) => {
        let options = {};
        if (layer.duration) {
            const transitionProp = `${prop}-transition`;
            options = { "duration": layer.duration };
            map.setPaintProperty(layer.layer, transitionProp, options);
        }
        map.setPaintProperty(layer.layer, prop, layer.opacity, options);
    });
};



// STORIES CONFIURATION LIKE TITLE, SUBTITLE, FOOTER, CUSTOM STYLE AVAILABLE

const story = document.getElementById('story');
const features = document.createElement('div');
features.setAttribute('id', 'features');

// HEADER DIV SETTINGS 
const header = document.createElement('div');

if (config.title) {
    const titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}

if (config.subtitle) {
    const subtitleText = document.createElement('h3');
    subtitleText.innerText = config.subtitle;
    header.appendChild(subtitleText);
}

if (config.byline) {
    const bylineText = document.createElement('p');
    bylineText.innerText = config.byline;
    bylineText.style.fontSize = '13px';
    bylineText.style.width = '75%';
    bylineText.style.margin = '0 auto';
    header.appendChild(bylineText);
}

if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

// SCROLLY CHAPTERS DIV SETTINGS

config.chapters.forEach((record, idx) => {
    const container = document.createElement('div');
    const chapter = document.createElement('div');

    // Add chapter title
    if (record.title) {
        const title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }

    // Add image if it exists
    if (record.image) {
        const image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }

    // Add YouTube video if a video URL is provided
    if (record.videoUrl) {
        const videoFrame = document.createElement('iframe');
        videoFrame.setAttribute('src', record.videoUrl);
        videoFrame.setAttribute('width', '100%');  // Adjust width as needed
        videoFrame.setAttribute('height', '315');  // Adjust height as needed
        videoFrame.setAttribute('frameborder', '0');
        videoFrame.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        videoFrame.setAttribute('allowfullscreen', true);
        chapter.appendChild(videoFrame);
    }

    // Add chapter description
    if (record.description) {
        const storyText = document.createElement('p');
        storyText.innerHTML = record.description;
        chapter.appendChild(storyText);
    }

    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }

    chapter.classList.add(config.theme);
    container.appendChild(chapter);
    container.classList.add(alignments[record.alignment] || 'centered');
    if (record.hidden) {
        container.classList.add('hidden');
    }
    features.appendChild(container);
});

story.appendChild(features);

// FOOTER DIV SETTINGS

const footer = document.createElement('div');

if (config.footer) {
    const footerText = document.createElement('p');
    footerText.innerHTML = config.footer;
    footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}


// TOGGLE ON AND OFF CHAPTERS
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-chapters');
    const storyElement = document.getElementById('story');

    if (toggleButton && storyElement) {
        toggleButton.addEventListener('click', function () {
            storyElement.classList.toggle('hidden-chapters');
            // Optionally force the map to resize if it's still not behaving correctly
            if (window.map) map.resize();
        });
    } else {
        console.error('Toggle button or story element not found');
    }
});


// BOOTSTRAP MODAL TOOLTIP FOR DEFINITIONS
document.addEventListener("DOMContentLoaded", function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl, {
            container: 'body' // This helps avoid rendering problems in complex components
        });
    });
});




// MAPBOX SETTINGS

mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";
    return {
        url: url + suffix
    };
};

const map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    interactive: false,
    transformRequest: transformRequest,
    projection: config.projection
});

// SHOW MARKER

if (config.showMarkers) {
    const marker = new mapboxgl.Marker({ color: config.markerColor });
    marker.setLngLat(config.chapters[0].location.center).addTo(map);
}





// Instantiate the scrollama
const scroller = scrollama();


// Ensure global or properly scoped declaration of markersArray
let markersArray = [];


// INITIAL MAP LOAD, ADD SOURCES AND LAYERS HERE
map.on("load", function () {
    // Add navigation controls
    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-right');

    // scroller settings
    scroller
        .setup({
            step: '.step',
            offset: 0.5,
            progress: true
        })
        // ENTERING SPECIFIC CHAPTERS CONFIG
        .onStepEnter(response => {
            const chapterId = response.element.id;
            const chapter = config.chapters.find(chap => chap.id === chapterId);

            response.element.classList.add('active');
            map[chapter.mapAnimation || 'flyTo'](chapter.location);

            // Apply chapter-specific configurations
            if (config.showMarkers) {
                marker.setLngLat(chapter.location.center);
            }
            if (chapter.onChapterEnter.length > 0) {
                chapter.onChapterEnter.forEach(setLayerOpacity);
            }
            if (chapter.callback) {
                window[chapter.callback]();
            }
            if (chapter.rotateAnimation) {
                map.once('moveend', () => {
                    const rotateNumber = map.getBearing();
                    map.rotateTo(rotateNumber - 180, {
                        duration: 150000, easing: (t) => t
                    });
                });
            }

            // ACTIVATE BOROUGH BOUNDARIES PURPLE OUTLINE CLIMATE-GENT-INTRO CHAPTER
            if (chapterId === 'climate-gent-intro') {
                map.setLayoutProperty('borough-boundaries-layer', 'visibility', 'visible');
            }
            // ACTIVATE RHCR PROJECT ON CLIMATE-GENT-RHCR CHAPTER
            if (chapterId === 'climate-gent-rhcr') {
                map.setLayoutProperty('redhook-coastal-project', 'visibility', 'visible');
            }
            // ACTIVATE BOROUGH BOUNDARIES PURPLE OUTLINE CLIMATE-GENT-REDHOOK CHAPTER 
            if (chapterId === 'climate-gent-redhook') {
                map.setLayoutProperty('redhook-zoning-layer', 'visibility', 'visible');
            }
            // ACTIVATE BOROUGH BOUNDARIES POPUP ON CLIMATE-GENT-RISK CHAPTER
            if (chapterId === 'climate-gent-risk') {
                activateBoroughBoundaries();
            }
            // Activate Red Hook developments layer when entering 'climate-gent-redhook-dev' chapter
            if (chapterId === 'climate-gent-redhook-dev') {
                map.setLayoutProperty('redhook-developments-layer', 'visibility', 'visible');
            }
            // Activate the markers for the chapter climate-gent-cascade
            if (chapterId === 'climate-gent-cascade') {
                markersArray.forEach(marker => marker.remove()); // Clear previous markers if any
                markersArray = []; // Reset the array

                markerDetails.forEach(detail => {
                    const el = document.createElement('div');
                    el.className = 'custom-marker';
                    el.style.backgroundImage = `url('${detail.icon}')`; // Set custom icon
                    el.style.width = '120px';  // Set the size of the marker
                    el.style.height = '120px';
                    el.style.backgroundSize = 'cover';

                    const marker = new mapboxgl.Marker(el)
                        .setLngLat(detail.coordinates)
                        .addTo(map);

                    const popup = new mapboxgl.Popup({ offset: 25 })
                        .setHTML(`<h3>${detail.title}</h3><p>${detail.description}</p>`);

                    marker.setPopup(popup);
                    markersArray.push(marker);
                });
            }
            // Activate visibility of the NYCHA Rockaways layer
            if (chapterId === 'climate-gent-nycha') {
                map.setLayoutProperty('nycha-rockaways-layer', 'visibility', 'visible');
            }
            // Activate visibility of the STATEN ISLAND 2023 SALES
            if (chapterId === 'climate-gent-staten') {
                map.setLayoutProperty('staten-sales-layer', 'visibility', 'visible');
            }
            // Activate visibility of the BRONX COMMERCIAL BUSINESSES
            if (chapterId === 'climate-gent-bronx') {
                map.setLayoutProperty('bronx-commercial-layer', 'visibility', 'visible');
            }
        })

        // EXITING SPECIFIC CHAPTERS CONFIG
        .onStepExit(response => {
            const chapterId = response.element.id;
            response.element.classList.remove('active');

            // Deactivate settings specific to exiting chapters
            const chapter = config.chapters.find(chap => chap.id === chapterId);
            if (chapter.onChapterExit.length > 0) {
                chapter.onChapterExit.forEach(setLayerOpacity);
            }
            // Deactivate purple borough boundaries when exiting 'climate-gent-intro'
            if (chapterId === 'climate-gent-intro') {
                map.setLayoutProperty('borough-boundaries-layer', 'visibility', 'none');
            }
            // Deactivate RHCR PROJECT ON CLIMATE-GENT-RHCR CHAPTER
            if (chapterId === 'climate-gent-rhcr') {
                map.setLayoutProperty('redhook-coastal-project', 'visibility', 'none');
            }
            // Deactivate purple borough boundaries when exiting 'climate-gent-redhook' 
            if (chapterId === 'climate-gent-redhook') {
                map.setLayoutProperty('redhook-zoning-layer', 'visibility', 'none');
            }
            // Deactivate borough boundaries when exiting 'climate-gent-risk'
            if (chapterId === 'climate-gent-risk') {
                deactivateBoroughBoundaries();
            }
            // Deactivate Red Hook developments layer when exiting 'climate-gent-redhook-dev' chapter
            if (chapterId === 'climate-gent-redhook-dev') {
                map.setLayoutProperty('redhook-developments-layer', 'visibility', 'none');
            }
            // Deactivate the markers for the chapter climate-gent-cascade
            if (chapterId === 'climate-gent-cascade') {
                markersArray.forEach(marker => marker.remove());
                markersArray = [];
            }
            // Deactivate visibility of the NYCHA Rockaways layer
            if (chapterId === 'climate-gent-nycha') {
                map.setLayoutProperty('nycha-rockaways-layer', 'visibility', 'none');
            }
            // Deactivate visibility of the STATEN ISLAND 2023 SALES
            if (chapterId === 'climate-gent-staten') {
                map.setLayoutProperty('staten-sales-layer', 'visibility', 'none');
            }
            // Deactivate visibility of the BRONX COMMERCIAL BUSINESSES
            if (chapterId === 'climate-gent-bronx') {
                map.setLayoutProperty('bronx-commercial-layer', 'visibility', 'none');
            }

        });



    // ADDING LAYERS AND FUN INTERACTIVE THINGS ON MAPBOX BELOW


    // CHAPTER CLIMATE-GENT-INTRO Add the GeoJSON source for borough boundaries
    map.addSource('borough-boundaries', {
        type: 'geojson',
        data: 'data/borough-boundaries-simplified.geojson'
    });

    // Add a layer to display the borough boundaries
    map.addLayer({
        id: 'borough-boundaries-layer',
        type: 'fill',
        source: 'borough-boundaries',
        layout: {
            'visibility': 'none' // Layer is initially hidden
        },
        paint: {
            'fill-color': '#4a0096',  // Purple color
            'fill-opacity': 0.3  // 30% opacity for the fill
        }
    });





    // CHAPTER CLIMATE-GENT-RHCR -- Add the GeoJSON for FLOOD BARRIERS
    map.addSource('redhook-coastal-project', {
        type: 'geojson',
        data: 'data/rhcr-project.geojson'
    });

    // Add a layer to display the borough boundaries
    map.addLayer({
        id: 'redhook-coastal-project',
        type: 'line',
        source: 'redhook-coastal-project',
        layout: {
            'visibility': 'none' // Layer is initially hidden
        },
        paint: {
            'line-color': '#9935ff', // Sets the line color to purple
            'line-width': 8          // Sets the line width to be thick
        }
    });




    // CHAPTER CLIMATE-GENT-REDHOOK WITH ZONING INFORMATION 
    map.addSource('redhook-zoning', {
        type: 'geojson',
        data: 'data/pluto-redhook-crs84.geojson'
    })
    // add a fill layer using the PLUTO data
    map.addLayer({
        id: 'redhook-zoning-layer',
        type: 'fill',
        layout: {
            'visibility': 'none'  // Layer is initially hidden
        },
        source: 'redhook-zoning',
        paint: {
            'fill-color': [
                'match',
                ['get', 'ZoneDist1'],
                'R6', '#c7b941', // Lightest purple for residential zones
                'R5', '#c78d41',
                'PARK', '#70ca85', // Different color for parks
                'M1-1/R5', '#BA55D3', // Mixed zone, closer to manufacturing
                'M1-2', '#9932CC', // Starting of manufacturing zones
                'M2-1', '#800080',
                'M3-1', '#6A0DAD',
                'M1-1', '#4B0082', // Darkest purple for heavy manufacturing
                '#FFD700' // Fallback color for any other or undefined zones
            ],
            'fill-opacity': 0.6
        }
    });
    // ******* NEED HELP HERE ABOVE **************





    // CHAPTER CLIMATE-GENT-RISK Define Borough Info globally or in a scope accessible by handleClick
    const boroughInfo = {
        "Manhattan": "<h3>Manhattan</h3><p><b>Population:</b> 1.6 million</p><p><b>Coastal Population:</b> Known for its dense population and significant economic infrastructure, Manhattan has 110,353 residents living in the 1% annual chance floodplain and 86,729 in the 0.2% annual chance floodplain. The financial district and other low-lying areas are particularly at risk.</p>",
        "Brooklyn": "<h3>Brooklyn</h3><p><b>Population:</b> 2.6 million</p><p><b>Coastal Population:</b> Brooklyn has the highest number of residents living in the 1% annual chance floodplain, with 168,281 individuals. It also has a substantial population in the 0.2% annual chance floodplain, totaling 153,764 residents. Brooklyn's extensive waterfront and low-lying areas contribute to its high vulnerability to flooding.</p>",
        "Queens": "<h3>Queens</h3><p><b>Population:</b> 2.3 million</p><p><b>Coastal Population:</b> Queens has 106,746 residents in the 1% annual chance floodplain and 48,662 in the 0.2% annual chance floodplain. Areas such as the Rockaways and parts of the northern shorelines are prone to flooding, affecting a large number of residents.</p>",
        "Bronx": "<h3>Bronx</h3><b>Population:</b> 1.4 million</p><p><b>Coastal Population:</b> Interestingly, the Bronx has fewer residents in the 1% annual chance floodplain (17,731) compared to the 0.2% annual chance floodplain (41,632). This discrepancy may be due to the geographical and topographical features of the borough, which include several low-lying areas near the coast.</p>",
        "Staten Island": "<h3>Staten Island</h3><b>Population:</b> 0.5 million</p><p><b>Coastal Population:</b> With its extensive shoreline, Staten Island has 31,439 residents in the 1% annual chance floodplain and 17,527 in the 0.2% annual chance floodplain. The borough's eastern and southern coasts are particularly vulnerable to storm surges and sea-level rise.</p>"
    };

    map.on('click', 'borough-boundaries-fill', handleClick);

    // Functions to activate and deactivate boundaries
    function activateBoroughBoundaries() {
        if (!map.getSource('borough-boundaries')) {
            map.addSource('borough-boundaries', {
                type: 'geojson',
                data: 'data/borough-boundaries-simplified.geojson',
                generateId: true
            });
        }

        if (!map.getLayer('borough-boundaries-fill')) {
            map.addLayer({
                id: 'borough-boundaries-fill',
                type: 'fill',
                source: 'borough-boundaries',
                paint: {
                    'fill-color': [
                        'match',
                        ['get', 'boro_code'],
                        '1', '#BD5DFC',
                        '2', '#1F29FF',
                        '3', '#0FB1FC',
                        '4', '#5D21FC',
                        '5', '#8D93FC',
                        '#ccc'
                    ],
                    'fill-opacity': [
                        'case',
                        ['boolean', ['feature-state', 'hover'], false],
                        0.9,
                        0.4
                    ]
                }
            });

            map.addLayer({
                id: 'borough-boundaries-line',
                type: 'line',
                source: 'borough-boundaries',
                paint: {
                    'line-color': '#000',
                    'line-width': 1.5
                }
            });
        }


        map.on('mousemove', 'borough-boundaries-fill', handleMouseMove);
        map.on('mouseleave', 'borough-boundaries-fill', handleMouseLeave);
    }

    function deactivateBoroughBoundaries() {
        map.off('mousemove', 'borough-boundaries-fill', handleMouseMove);
        map.off('mouseleave', 'borough-boundaries-fill', handleMouseLeave);

        if (map.getLayer('borough-boundaries-fill')) {
            map.removeLayer('borough-boundaries-fill');
            map.removeLayer('borough-boundaries-line');
        }
        if (map.getSource('borough-boundaries')) {
            map.removeSource('borough-boundaries');
        }
    }

    function handleMouseMove(e) {
        if (e.features.length > 0) {
            const hoveredId = e.features[0].id;
            if (hoveredPolygonId !== hoveredId) {
                if (hoveredPolygonId !== null) {
                    map.setFeatureState(
                        { source: 'borough-boundaries', id: hoveredPolygonId },
                        { hover: false }
                    );
                }
                hoveredPolygonId = hoveredId;
                map.setFeatureState(
                    { source: 'borough-boundaries', id: hoveredPolygonId },
                    { hover: true }
                );
            }
            map.getCanvas().style.cursor = 'pointer';
        }
    }

    function handleMouseLeave() {
        if (hoveredPolygonId !== null) {
            map.setFeatureState(
                { source: 'borough-boundaries', id: hoveredPolygonId },
                { hover: false }
            );
            hoveredPolygonId = null;
        }
        map.getCanvas().style.cursor = '';
    }

    function handleClick(e) {
        const boro_name = e.features[0].properties.boro_name;
        const content = boroughInfo[boro_name] || `<h3>${boro_name}</h3><p>No additional information available.</p>`;
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(content)
            .addTo(map);
    }

    let hoveredPolygonId = null;  // This should be accessible by all event handlers


    // CHAPTER CLIMATE-GENT-REDHOOK-DEV POST SANDY DEVELOPMENTS 2012-2023
    map.addSource('redhook-developments', {
        type: 'geojson',
        data: 'data/redhook-post-sandy-pluto.geojson'
    });

    // LAYER FEATURE PAINT FOR REDHOOK DEVELOPMENTS
    addDevelopmentLayer();

    function addDevelopmentLayer() {
        map.addLayer({
            id: 'redhook-developments-layer',
            type: 'circle',
            source: 'redhook-developments',
            paint: {
                'circle-radius': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    15, 5,
                    20, 15
                ],
                'circle-color': [
                    'interpolate',
                    ['linear'],
                    ['to-number', ['get', 'YearBuilt']],
                    2012, '#f1e3ff',  // Light purple for the oldest
                    2013, '#e3c8ff',
                    2014, '#d4aaff',
                    2015, '#c58cfe',
                    2016, '#b872ff',
                    2017, '#aa57ff',
                    2018, '#9935ff',
                    2019, '#8c1cff',
                    2020, '#7e00ff',
                    2021, '#7100e6',
                    2022, '#6500cd',
                    2023, '#5100a4'   // Dark purple for the newest
                ],
                'circle-opacity': 0.9
            }
        });


        // Initially set this layer to be invisible
        map.setLayoutProperty('redhook-developments-layer', 'visibility', 'none');

        // ANIMATING THE POINTS! COOL!
        let radius = 5;
        function pulse() {
            radius = radius === 5 ? 8 : 5; // Toggle radius between 5 and 10
            map.setPaintProperty('redhook-developments-layer', 'circle-radius', radius);
            setTimeout(pulse, 1000); // Adjust pulse speed here
        }
        pulse(); // Start pulsing
    }


    // HOVER OVER THE POINTS FOR THE YEAR OF DEVELOPMENT VIA POPBOX

    let popup = null; // This will hold the active popup

    map.on('mouseenter', 'redhook-developments-layer', function (e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

        var coordinates = e.features[0].geometry.coordinates.slice();
        var properties = e.features[0].properties;
        var address = properties.Address;
        var zoneDist = properties.ZoneDist1;
        var unitsTotal = properties.UnitsTotal;
        var yearBuilt = properties.YearBuilt;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Create a popup content string with HTML markup
        var popupContent = `<h3>Property Details</h3>` +
            `<p><strong>Address:</strong> ${address}</p>` +
            `<p><strong>Zoning:</strong> ${zoneDist}</p>` +
            `<p><strong>Total Units:</strong> ${unitsTotal}</p>` +
            `<p><strong>Year Built:</strong> ${yearBuilt}</p>`;

        // Create a popup and add it to the map
        popup = new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(popupContent)
            .addTo(map);
    });

    map.on('mouseleave', 'redhook-developments-layer', function () {
        // Reset the cursor style
        map.getCanvas().style.cursor = '';

        // Remove the popup if it exists
        if (popup) {
            popup.remove();
            popup = null; // Clear the reference
        }
    });



    // FOR CHAPTER CLIMATE-GENT-CASCADE EFFECTS


    const markerDetails = [
        {
            coordinates: [-73.956555, 40.731390], // Greenpoint, Brooklyn
            title: "Climate Gentrification",
            location: "Greenpoint, Brooklyn, New York",
            description: "Greenpoint, Brooklyn has seen rezoning and revitalization efforts aimed at reducing flood risk, which have led to increased property values and the displacement of lower-income residents.",
            icon: "https://girlintheyellowtaxinyc.com/wp-content/uploads/2020/03/greenpointmain.jpg"
        },
        {
            coordinates: [-74.01549, 40.70267], // Lower Manhattan
            title: "Resilience Investment",
            location: "Lower Manhattan, New York",
            description: "The BIG U project in Lower Manhattan encompasses a series of resilience initiatives designed to protect the area from flooding while enhancing public spaces. However, these investments have also inadvertently increased the area's desirability and living costs, contributing to the displacement of long-standing, vulnerable communities.",
            icon: "https://assets.the-atlas.com/UserContent/ProjectImages/714fa39b-9837-4f0b-b154-54646b466cb4.jpeg"
        },
        {
            coordinates: [-73.755405, 40.603995], // Far Rockaway, Queens
            title: "Impact on Vulnerable Populations",
            location: "Far Rockaway, Queens, New York",
            description: "Rockaway, Queens houses many NYCHA public housing units where residents face significant pressures from both environmental risks and economic constraints.",
            icon: "https://images.globest.com/contrib/content/uploads/sites/409/2019/06/Ocean-Bay-housing-development.jpg"
        },
        {
            coordinates: [-73.891380, 40.816195], // South Bronx
            title: "Housing Crisis",
            location: "South Bronx, Bronx, New York",
            description: "The South Bronx has historically struggled with housing affordability and quality. As gentrification pressures increase, driven by climate change and the search for higher ground, the already scarce affordable housing stock is further threatened, exacerbating the housing crisis for its predominantly low-income residents.",
            icon: "https://s3-prod.crainsnewyork.com/Bankside%201%20-%20Aerial.jpg"
        },
        {
            coordinates: [-74.100153, 40.645245], // Staten Island
            title: "Need for Policy Interventions",
            location: "Staten Island, New York",
            description: "Staten Island, particularly its North Shore, has seen increasing development pressures and is vulnerable to both coastal flooding and gentrification. This area requires urgent policy interventions to protect its diverse communities from displacement and to ensure sustainable development that includes robust flood defenses and affordable housing initiatives.",
            icon: "https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2024/03/13103034/shutterstock_744909841-1024x684.jpg"
        },
    ];


    // CHAPTER CLIMATE-GENT-NYCHA FOR ROCKAWAY VULNERABILITY
    map.addSource('nycha-rockaways', {
        type: 'geojson',
        data: 'data/rockaway-nycha.geojson'
    });

    // Add a layer to display the NYCHA data
    map.addLayer({
        id: 'nycha-rockaways-layer',
        type: 'fill',
        source: 'nycha-rockaways',
        layout: {
            'visibility': 'none'  // Layer is initially hidden
        },
        paint: {
            'fill-color': '#4a0096',  // Purple color
            'fill-opacity': 0.5
        }
    });
    // Click event for NYCHA layer to show popup
    map.on('click', 'nycha-rockaways-layer', function (e) {
        const properties = e.features[0].properties;
        const popupContent = `
            <strong>Development:</strong> ${properties.DEVELOPMENT}<br>
            <strong>Total Number of Apartments:</strong> ${properties.TOTAL_NUMBER_OF_APARTMENTS}<br>
            <strong>Total Population:</strong> ${properties.TOTAL_POPULATION}<br>
            <strong>Avg Monthly Gross Rent:</strong> $${properties.AVG_MONTHLY_GROSS_RENT}
        `;

        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(popupContent)
            .addTo(map);
    });




    // CHAPTER CLIMATE-GENT-STATEN ISLAND 2023 SALES ON STORM SURGE
    // Load an image from an external URL.
    map.loadImage('img/dollar-home.png', function (error, image) {
        if (error) throw error;

        // Add the image to the map style.
        map.addImage('dollar-home', image);

        // Add the source for Staten Island 2023 sales data
        map.addSource('staten-2023-sales', {
            type: 'geojson',
            data: 'data/staten-2023-sales.geojson'
        });

        // Add a layer to display the sales data using the custom icon
        map.addLayer({
            id: 'staten-sales-layer',
            type: 'symbol',
            source: 'staten-2023-sales',
            layout: {
                'icon-image': 'dollar-home', // Use the custom image as an icon.
                'icon-size': 0.2, // Adjust the size as needed.
                'visibility': 'none' // Initially set the layer to be hidden.
            }
        });

        // Click event to show popup with property details
        map.on('click', 'staten-sales-layer', function (e) {
            const properties = e.features[0].properties;
            const description = `<strong>Address:</strong> ${properties.ADDRESS}<br>
                <strong>Sale Price:</strong> $${properties.SALE_PRICE}<br>
                <strong>Sale Date:</strong> ${properties.SALE_DATE}`;

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(description)
                .addTo(map);
        });

    });



    // CHAPTER CLIMATE-GENT-BRONX COMMERCIAL BUSINESS OWNERS STORY
    map.addSource('bronx-commercial', {
        type: 'geojson',
        data: 'data/bronx-commercial.geojson'
    });

    // Add a polygon layer to display the commercial areas
    map.addLayer({
        id: 'bronx-commercial-layer',
        type: 'fill',
        source: 'bronx-commercial',
        layout: {
            'visibility': 'none' // Initially set the layer to be hidden
        },
        paint: {
            'fill-color': '#4a0096', // Purple color
            'fill-opacity': 0.7
        }
    });





    // NUDGE USER TO SCROLL AND INTERACT, IF IDLE FOR MORE THAN 2 MIN, NUDGE AGAIN
    function hideScrollPrompt() {
        document.querySelector('.scroll-prompt').style.display = 'none';
    }

    // Attach event listener to hide scroll prompt on scroll
    window.addEventListener('scroll', hideScrollPrompt);

    // Setup an idle timer variable
    let idleTimer;
    function resetIdleTimer() {
        // Clear existing timer
        clearTimeout(idleTimer);

        // Set a new timer
        idleTimer = setTimeout(function () {
            // Check if the user has scrolled to the bottom of the page already
            if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) {
                document.querySelector('.scroll-prompt').style.display = 'block'; // Show scroll prompt
            }
        }, 120000); // 120000 milliseconds = 2 minutes
    }

    // Listen for various user actions to reset the idle timer
    window.addEventListener('mousemove', resetIdleTimer);
    window.addEventListener('keypress', resetIdleTimer);
    window.addEventListener('scroll', resetIdleTimer);

    // Initialize the idle timer when the page loads
    resetIdleTimer();


    
});





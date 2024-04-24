// Configuration for the scrollytelling map
const config = {
    style: 'mapbox://styles/j00by/cluvgg2l400il01pa2we18jys',
    accessToken: 'pk.eyJ1IjoiajAwYnkiLCJhIjoiY2x1bHUzbXZnMGhuczJxcG83YXY4czJ3ayJ9.S5PZpU9VDwLMjoX_0x5FDQ',
    showMarkers: false,
    markerColor: 'red',
    theme: 'light',
    title: 'CLIMATE GENTRIFICATION AND ITS IMPACT ON NEW YORK CITY',
    subtitle: 'John D Solomon Fellowship x New York City Emergency Management',
    byline: 'By: Judy Huynh',
    footer: 'New York University | Spring 2024<br>Advanced GIS Interactive Web Mapping with Chris Whong<br>Source: <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling Template</a>',
    // CHAPTERS FOR EACH SCROLL  
    chapters: [
        {
            id: 'climate-gent-intro',
            alignment: 'fully',
            hidden: false,
            title: 'UNDERSTANDING CLIMATE CHANGE IN NYC',
            image: '',
            description: 'Climate change is no longer a distant threat; it is a present reality that New York City is actively confronting. The New York City Panel on Climate Change (NPCC) provides critical projections that paint a vivid picture of what the future holds. According to the latest findings, New York City is expected to experience significant increases in temperature, with projections indicating a rise of up to 4.7 degrees by the 2030s.<br><br>Additionally, sea levels around the city could rise by as much as two feet in the same period, exacerbating the risk of flooding and storm surges. Precipitation is also predicted to increase, leading to more frequent and intense rainstorms. These changes underscore the urgency for comprehensive planning and action to protect the city and its residents from the escalating impacts of climate change, setting the stage for a deeper discussion on how these environmental shifts drive climate gentrification.<a href="https://climate.cityofnewyork.us/initiatives/nyc-panel-on-climate-change-npcc/" target="_blank">[1]</a>',
            location: {
                center: [-73.97992, 40.95472],
                zoom: 9.19,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'climate-gent-hazard',
            alignment: 'left',
            hidden: false,
            title: 'WHAT IS THE HAZARD?',
            image: '',
            description: 'Climate gentrification in New York City is a phenomenon where neighborhoods that are perceived as safer from the impacts of climate change become increasingly desirable. This desirability leads to higher property values and living costs, which can displace long-term, lower-income residents. The primary hazard associated with climate gentrification is the socio-economic displacement of vulnerable communities, who are often forced out of their neighborhoods due to rising costs. This displacement not only disrupts community networks and local economies but also increases the risk of social inequality. As climate change intensifies, areas less prone to flooding, extreme heat, and other climate-related risks become more attractive, exacerbating this trend.<a href="https://www.mdpi.com/2071-1050/16/1/42" target="_blank">[2]</a>',
            location: {
                center: [-74.01842, 40.68208],
                zoom: 11.16,
                pitch: 50,
                bearing: 21.60
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'climate-gent-redhook',
            alignment: 'left',
            hidden: false,
            title: 'RED HOOK, BROOKLYN POST-HURRICANE SANDY',
            image: 'https://user-images.githubusercontent.com/93134160/268441326-b2f37054-00e3-474e-9aec-da025f49e0e9.png',
            description: 'Red Hook, a neighborhood in Brooklyn, New York, serves as a poignant example of climate gentrification. Historically an affordable area, Red Hook has undergone significant changes following Hurricane Sandy in 2012. The hurricane initially led many to believe that property values would plummet due to the extensive damage. However, the opposite occurred; as the neighborhood began to recover, it attracted new investments and an influx of wealthier residents drawn by the waterfronts allure and the potential for redevelopment. <br><br>This new wave of interest drove up property values and rent, making it increasingly difficult for long-standing, lower-income residents to afford their homes. Stories from the local community describe encounters with real estate developers and private equity firms offering large sums for properties, a situation perceived by many as predatory. These developments highlight the complex interplay between climate change, urban redevelopment, and social dynamics, where the benefits of revitalization often precipitate unintended consequences for the original residents of transitioning neighborhoods.<a href="https://www.theguardian.com/environment/2018/sep/25/red-hook-climate-change-floodplain-hurricane-sandy-gentrification" target="_blank">[3]</a>',
            location: {
                center: [-74.01834, 40.67668],
                zoom: 15,
                pitch: 50,
                bearing: 39.20,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'climate-gent-risk',
            alignment: 'right',
            hidden: false,
            title: 'WHAT IS THE RISK?',
            image: 'https://user-images.githubusercontent.com/93134160/268436057-3de6e612-5e61-45b5-8678-ddb573921e53.png',
            description: 'Climate gentrification poses a significant risk: the displacement of lower-income residents and communities of color who are priced out by the rising cost of living. As wealthier individuals seek refuge from climate threats in these safer areas, property values escalate, and the character and culture of neighborhoods shift, often to the detriment of long-standing residents.<br><br>This displacement threatens the rich cultural and social fabric that defines many of New York Citys diverse neighborhoods. The loss of these community networks and the local knowledge they hold not only diminishes the citys vibrant diversity but also undermines the social stability and resilience of affected areas.<a href="https://macblog.mcmaster.ca/literature-culture-anthropocene/blog/gentrification-and-global-warming-and-housing-oh-my-the-fate-of-nyc-in-a-rapidly-changing-climate/" target="_blank">[4]</a><a href="https://rebuildbydesign.org/uncategorized/climate-displacement-in-nyc/" target=_blank">[5]</a>',
            location: {
                center: [-73.85000, 40.69254],
                zoom: 10,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'climate-gent-humanstory',
            alignment: 'right',
            hidden: false,
            title: 'ALEXIS FOOTES STRUGGLE IN THE ROCKAWAYS',
            image: 'https://images.newrepublic.com/2c271a227d2692ce9cf22170c9c16b99b7382dd4.jpeg?auto=format&fit=crop&crop=faces&ar=3%3A2&ixlib=react-9.0.2&w=1000&q=65&dpr=2',
            description: 'Alexis Footes story is a stark illustration of the human cost of climate gentrification in New York City. After Hurricane Sandy ravaged the Rockaways, Alexis watched her once tight-knit community become a target for real estate developers and wealthier individuals seeking properties less prone to future flooding. Despite her efforts to stay, the rising cost of living and redevelopment in the wake of the storm made it increasingly difficult for her and her neighbors to afford their homes. The neighborhoods transformation, driven by the climate crisis and market forces, not only displaced long-standing residents like Alexis but also threatened the cultural identity and social fabric of the community she called home.<a href="https://newrepublic.com/article/154044/new-york-superstorm-sandy-economic-climate-migrants" target=_blank">[6]</a>',
            location: {
                center: [-73.75909, 40.59793],
                zoom: 15,
                pitch: 72,
                bearing: -72,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'climate-gent-les',
            alignment: 'right',
            hidden: false,
            title: 'LOWER EAST SIDE, MANHATTAN',
            image: 'https://user-images.githubusercontent.com/93134160/268437145-e41f5341-563f-4abd-a049-01fc97efe729.png',
            description: 'The Lower East Side (LES) is one of Manhattans most culturally diverse areas, with a significant portion of its waterfront vulnerable to flooding. The East Side Coastal Resiliency Project aims to protect the LES from rising sea levels and storm surges. However, these enhancements are driving up property values, making the LES increasingly unaffordable for its traditional residents.',
            location: {
                center: [-73.97534, 40.71532],
                zoom: 15.5,
                pitch: 59,
                bearing: 19.20,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'climate-gent-manage',
            alignment: 'left',
            hidden: false,
            title: 'HOW TO MANAGE THE RISK',
            image: 'https://user-images.githubusercontent.com/93134160/268436530-aaec0341-db34-403b-8b3f-3d2c976f9062.png',
            description: 'Managing the risk of climate gentrification involves proactive and inclusive urban planning that prioritizes the needs of vulnerable populations.To effectively manage the risk of climate gentrification in New York City, the following actionable strategies can be implemented:<br><br><b>1) Enforce Affordable Housing Mandates:</b> Ensure that neighborhoods less vulnerable to climate impacts have enforced affordable housing quotas to keep these areas accessible for all income levels.<br><br><b>2) Enhance Community Engagement:</b> Develop robust community engagement programs that involve local residents in planning and decision-making processes, ensuring that their needs and voices are heard and addressed.<br><br><b>3) Provide Financial Assistance:</b> Offer financial support programs for homeowners and renters in high-risk areas to help them afford necessary property upgrades and insurance against climate risks.<br><br><b>4) Integrate Strategies into Broader Planning:</b> Incorporate these strategies into the citys overall climate adaptation and resilience planning to ensure a holistic approach that promotes equitable and sustainable urban growth.',
            location: {
                center: [-73.97534, 40.71532],
                zoom: 15.5,
                pitch: 59,
                bearing: 19.20,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'climate-gent-canarsie',
            alignment: 'left',
            hidden: false,
            title: 'CANARSIE, BROOKLYN',
            image: '',
            description: 'Canarsie lies in the floodplains of Jamaica Bay and was among the neighborhoods hit hard by Hurricane Sandy. Post-Sandy, flood insurance reforms and rising premiums have disproportionately affected Canarsies long-term residents, many of whom are from minority backgrounds. This financial strain is compounded by speculative real estate investments focusing on its "flood-safe" status.',
            location: {
                center: [-73.90554, 40.63167],
                zoom: 14,
                pitch: 47,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'climate-gent-staten',
            alignment: 'left',
            hidden: false,
            title: 'STATEN ISLANDS EAST SHORE',
            image: 'https://user-images.githubusercontent.com/93134160/269315565-115bf384-f930-40f2-8874-c7fa0394c286.png',
            description: 'The East Shore of Staten Island experienced severe devastation during Hurricane Sandy, leading to a significant rethink in terms of urban planning and community safety. Managed retreat initiatives and resilience building measures post-Sandy have made parts of the East Shore particularly attractive for new developments. These projects, while necessary, have altered the community fabric, introducing higher-income households and new demographics.',
            location: {
                center: [-74.09198, 40.58925],
                zoom: 14,
                pitch: 48.50,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-identifier',
            alignment: 'right',
            hidden: false,
            title: 'CASE STUDY: LIBERTY CITY, MIAMI',
            image: 'https://www.pbs.org/independentlens/wp-content/uploads/2024/01/LIBERTY-SQUARE.png',
            description: 'Liberty City, a vibrant neighborhood in Miami with a rich history, is facing a new challenge known as climate gentrification. As Miami confronts rising sea levels, people are starting to move away from the vulnerable waterfront and into higher areas like Liberty City. This movement is changing the neighborhood. Homes and rents are becoming more expensive, making it hard for long-time residents, often with lower incomes, to stay. This isnt just a guess; researchers have shown with real numbers that this is happening.<br><br>A study from Columbia University confirmed that higher areas are becoming more popular, and as a result, the people who built their lives in Liberty City are at risk of being pushed out. Its a clear sign that as we deal with climate change, we also need to make sure we are taking care of the people who could be affected by these big shifts in where we live.<a href="https://www.climate-refugees.org/reports/2023/12/8/miami-climate-justice" target="_blank">[8]</a>',
            location: {
                center: [-80.21637, 25.83045],
                zoom: 13.5,
                pitch: 44.50,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'climate-gent-cta',
            alignment: 'fully',
            hidden: false,
            title: 'SECURING AN EQUITABLE FUTURE',
            image: '',
            description: 'As New York City continues to adapt to the realities of climate change, it is essential to carefully consider the implications of climate gentrification. This study highlights the need for thoughtful urban planning and policy-making that ensures equitable access to safe and affordable housing, particularly in areas less affected by climate threats. Engaging with this issue is crucial for maintaining the cultural diversity and community integrity of our city. We encourage stakeholders at all levels—community members, policymakers, and researchers—to engage with the findings of this study. By working collaboratively, we can develop strategies that not only address the environmental challenges but also safeguard the social fabric of New York City.',
            location: {
                center: [-73.97992, 40.95472],
                zoom: 9.19,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

// Mapbox adding layers

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

// Stories configuration

const story = document.getElementById('story');
const features = document.createElement('div');
features.setAttribute('id', 'features');

const header = document.createElement('div');

if (config.title) {
    const titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}

if (config.subtitle) {
    const subtitleText = document.createElement('h2');
    subtitleText.innerText = config.subtitle;
    header.appendChild(subtitleText);
}

if (config.byline) {
    const bylineText = document.createElement('p');
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}

if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
    const container = document.createElement('div');
    const chapter = document.createElement('div');

    if (record.title) {
        const title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }

    if (record.image) {
        const image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }

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


// Define the GeoJSON data for the line feature for BIG U
const lineFeature = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        -74.0111438732487,
                        40.73111099703439
                    ],
                    [
                        -74.01186143221192,
                        40.723770706620144
                    ],
                    [
                        -74.01329691796323,
                        40.71826493905559
                    ],
                    [
                        -74.01544958099569,
                        40.71085505437668
                    ],
                    [
                        -74.01778109970223,
                        40.70419239471153
                    ],
                    [
                        -74.01518042286476,
                        40.70106463119839
                    ],
                    [
                        -74.01177228997051,
                        40.70086064991153
                    ],
                    [
                        -74.00621193372992,
                        40.70426012013846
                    ],
                    [
                        -73.99894698326831,
                        40.70786368891345
                    ],
                    [
                        -73.99482140124506,
                        40.70929136766725
                    ],
                    [
                        -73.98576283983483,
                        40.71058324078132
                    ],
                    [
                        -73.97849844889049,
                        40.71146730641783
                    ],
                    [
                        -73.97598692904818,
                        40.71466208264144
                    ],
                    [
                        -73.97437265830489,
                        40.71976038486821
                    ],
                    [
                        -73.9727581534814,
                        40.72506226779177
                    ],
                    [
                        -73.97168175294526,
                        40.728053003511235
                    ],
                    [
                        -73.97392411376342,
                        40.73131516768018
                    ],
                    [
                        -73.97509033559776,
                        40.73675133748068
                    ]
                ]
            }
        }
    ]
};

// Add BIG U GeoJSON line feature to the map as a layer
map.on('load', function () {
    map.addSource('line-source', {
        'type': 'geojson',
        'data': lineFeature
    });

    map.addLayer({
        'id': 'line-layer',
        'type': 'line',
        'source': 'line-source',
        'layout': {
            'visibility': 'none' // The line is not visible by default
        },
        'paint': {
            'line-color': '#ff69b4', // Use any color you like
            'line-width': 10
        }
    });

});


// Define the ESCR popup 
const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});



// instantiate the scrollama
const scroller = scrollama();


// Listener for when the Mapbox map has fully loaded.
map.on("load", function () {
    scroller
        .setup({
            step: '.step',
            offset: 0.5,
            progress: true
        })

        // Find the current chapter based on the ID of the step that was triggered.
        .onStepEnter(async (response) => {
            const current_chapter = config.chapters.findIndex(chap => chap.id === response.element.id);
            const chapter = config.chapters[current_chapter];

            response.element.classList.add('active');
            map[chapter.mapAnimation || 'flyTo'](chapter.location);

            // If markers are to be shown, update the marker position to the new chapter's center.

            if (config.showMarkers) {
                marker.setLngLat(chapter.location.center);
            }

            // If there are specific layer opacity settings for chapter entry, apply them.
            if (chapter.onChapterEnter.length > 0) {
                chapter.onChapterEnter.forEach(setLayerOpacity);
            }
            if (chapter.callback) {
                window[chapter.callback]();
            }
            if (chapter.rotateAnimation) {
                map.once('moveend', () => {
                    const rotateNumber = map.getBearing();
                    map.rotateTo(rotateNumber + 180, {
                        duration: 30000, easing: (t) => t
                    });
                });
            }
            // Check if the current chapter is 'climate-gent-les'
            if (response.element.id === 'climate-gent-les') {
                // Show the BIG U line when active chapter
                map.setLayoutProperty('line-layer', 'visibility', 'visible');
                // Show popup and set location
                const popupCoordinates = [-73.97344, 40.72263];
                popup.setLngLat(popupCoordinates)
                    .setHTML('<h3>Climate Gentrification in LES</h3><p>This is a placeholder text for the popup box when viewing the Lower East Side chapter.</p>')
                    .addTo(map);
            }
        })



        // Find the chapter corresponding to the step that was exited.
        .onStepExit((response) => {
            const chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.remove('active');
            if (chapter.onChapterExit.length > 0) {
                chapter.onChapterExit.forEach(setLayerOpacity);
            }
            if (response.element.id === 'climate-gent-les') {
                map.setLayoutProperty('line-layer', 'visibility', 'none');
                popup.remove();
            }
        });
});

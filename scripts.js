// Configuration for the scrollytelling map
const config = {
    style: 'mapbox://styles/j00by/clvfgca9l02b001pe1e4eg0k8',
    accessToken: 'pk.eyJ1IjoiajAwYnkiLCJhIjoiY2x1bHUzbXZnMGhuczJxcG83YXY4czJ3ayJ9.S5PZpU9VDwLMjoX_0x5FDQ',
    showMarkers: false,
    markerColor: 'red',
    theme: 'light',
    title: 'CLIMATE GENTRIFICATION AND ITS IMPACT ON NEW YORK CITY',
    subtitle: 'John D Solomon Fellowship x New York City Emergency Management',
    byline: 'By: Judy Huynh',
    footer: 'New York University | Spring 2024<br>Advanced GIS Interactive Web Mapping with Chris Whong<br>Special thanks to Ahmad Shaibani, Melissa Umberger, Jacob Ahola, & Rachel Meltzer!<br>Source: <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling Template</a>',
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
                center: [-73.63626, 41.28645],
                zoom: 8,
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
            description: 'Climate gentrification in New York City presents a significant challenge as neighborhoods outside the 100-year floodplain become increasingly attractive due to perceived lower risks from climate change. This trend leads to rising property values and living costs, potentially displacing long-term, low-income residents. The primary concern here is the socio-economic displacement of these vulnerable communities, which can disrupt local community networks and economies, thereby increasing social inequality.<a href="https://www.mdpi.com/2071-1050/16/1/42" target="_blank">[2]</a><br><br>The inclusion of the <a href="https://data.cityofnewyork.us/Environment/Sea-Level-Rise-Maps-2020s-100-year-Floodplain-/ezfn-5dsb" target="_blank">2020 sea level rise (100 year floodplain)</a> data on the map highlights how areas less susceptible to flooding and other climate-related risks are becoming focal points for real estate investment, intensifying the effects of climate gentrification. This development poses a threat to the preservation of the cultural and social fabric of New York City’s diverse neighborhoods.',
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
            title: 'AN EXAMPLE SHOWN BY HURRICANE SANDY',
            image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*GDKaeC3G2o6hxnUu31EbIQ.jpeg',
            description: 'Red Hook, Brooklyn, is at risk of climate gentrification as Hurricane Sandy transforms the neighborhood. Red Hook, once low-income, has seen property values and rents rise, especially after the 2012 storm. Red Hook became Brooklyn’s priciest neighborhood for new home sales as its median sales price rose year over year.<a href="https://insideclimatenews.org/news/26102017/hurricane-sandy-anniversary-brooklyn-red-hook-vulnerable-waterfront-neighborhood-adapting/" target="_blank">[3]</a><br><br>According to NYC Department of Finance, the property at <a href="https://propertyinformationportal.nyc.gov/parcels/parcel/3005560121" target="_blank"><b>109 King Street in Red Hook</b></a>, which received construction approval in 2016 following Hurricane Sandy, has experienced a significant escalation in its market value. Initially assessed at $623,000 in 2018, the property’s value has continued to climb, reaching $2,686,000 by the year 2024. This trend underscores the broader economic shifts occurring in the area post-disaster.<br><br>Image Source: <a href="https://www.nydailynews.com/2017/10/26/five-years-after-hurricane-sandy-battered-new-york-city-signs-of-the-storm-remain/" target="_blank">Justin Lane, Metropoliss</a>',
            location: {
                center: [-74.01563, 40.67780],
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
            id: 'climate-gent-redhook-dev',
            alignment: 'left',
            hidden: false,
            title: 'WATERFRONT DEVELOPMENT IN RED HOOK',
            image: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*NF5NvhTVHgUb1pHSmI6vrA.png',
            description: 'The neighborhood’s race has changed in Red Hook, Brooklyn. Once predominantly Black, Hispanic, and Latino, the area has changed demographically. The population was 43% Black and nearly half Hispanic or Latino in 2000. The latest 2023 data shows that 93.70% of the population is White, 0.94% Black or African American, 1.98% Asian, 0.52% other race, and 2.86% multiracial.<br><br>Red Hook has developed, especially along its waterfront, since Hurricane Sandy. Developers have added 81 new buildings between 2012 and 2023, using resilience projects to capitalize on scenic views and water proximity. This is much higher than the 55 developments from 2000 to 2012. These changes show how climate resilience and real estate dynamics are transforming Red Hook, emphasizing the need for equitable development strategies that consider the area’s long-standing and diverse communities.<a href="https://insideclimatenews.org/news/26102017/hurricane-sandy-anniversary-brooklyn-red-hook-vulnerable-waterfront-neighborhood-adapting/" target="_blank">[3]</a><br><br>Image Source: <a href="https://www.nydailynews.com/2017/10/26/five-years-after-hurricane-sandy-battered-new-york-city-signs-of-the-storm-remain/" target="_blank">Justin Lane, Metropoliss</a>',
            location: {
                center: [-74.01563, 40.67780],
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
            alignment: 'left',
            hidden: false,
            title: 'WHAT IS THE RISK?',
            image: 'https://rebuildbydesign.org/wp-content/uploads/elementor/thumbs/Screen-Shot-2024-02-14-at-2.19.44-PM-qjt7i0rh84szwhgj7dqzhynb9lurpmxg6e8lq5j0pk.png',
            description: 'According to Rebuild by Designs’ report, <a href="https://rebuildbydesign.org/uncategorized/climate-displacement-in-nyc/" target=_blank">Making Space for our Neighbors</a>, over 40% of New York City’s population lives in areas facing a high risk of climate displacement. Climate gentrification threatens to displace low-income and minority communities due to rising costs. These safer areas attract wealthier individuals seeking refuge from climate threats, consequently raising property values and altering the character and culture of neighborhoods, often to the detriment of longtime residents. The diverse cultural and social fabric of many New York City neighborhoods is at risk due to this displacement. Losing these community networks and their local knowledge diminishes the citys diversity, social stability, and resilience.<a href="https://macblog.mcmaster.ca/literature-culture-anthropocene/blog/gentrification-and-global-warming-and-housing-oh-my-the-fate-of-nyc-in-a-rapidly-changing-climate/" target="_blank">[4]</a><br><br><font color="red">[Update map to add animated coastal shore line for NYC in stark reality way]</font>',
            location: {
                center: [-74.17696, 40.70856],
                zoom: 9.7,
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
            alignment: 'left',
            hidden: false,
            title: 'THE SHORTCOMINGS OF BUYOUT PROGRAMS',
            image: 'https://images.newrepublic.com/2c271a227d2692ce9cf22170c9c16b99b7382dd4.jpeg?auto=format&fit=crop&crop=faces&ar=3%3A2&ixlib=react-9.0.2&w=1000&q=65&dpr=2',
            description: 'The story of Alexis Footes poignantly illustrates the profound human impact of climate gentrification, exacerbated by Hurricane Sandy in the Rockaways. This once tight-knit community, known for its close resident ties, quickly became a prime target for real estate developers and affluent buyers seeking properties less prone to future flooding.<br><br>As redevelopment accelerated, fueled by both the climate crisis and market dynamics, the cost of living soared. This made it increasingly difficult for long-standing residents like Alexis and her neighbors to afford their homes. Moreover, not everyone has the mobility to relocate to another area. Many residents, especially those with homes damaged by the storm, find themselves in need of a buyout program.<br><br>However, existing buyout programs often fall short. They are criticized for their slow approval processes and delayed funding payouts, which can leave vulnerable residents in limbo. Additionally, the options for retreat locations are frequently limited, failing to consider the social and economic ties that bind communities together.<a href="https://newrepublic.com/article/154044/new-york-superstorm-sandy-economic-climate-migrants" target=_blank">[6]</a><a href="https://www.rachelmeltzer.com/uploads/1/4/5/3/14532900/sandy_and_price_effects_082522_ellen_and_meltzer.pdf" target="_blank">[7]</a></font>',
            location: {
                center: [-73.75909, 40.59793],
                zoom: 17,
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
            id: 'rockaway-video',
            alignment: 'fully',
            hidden: false,
            title: 'Drone Tour of Red Hook Post-Hurricane Sandy',
            image: '',
            description: 'This video provides a drone tour of Red Hook, capturing the significant transformations in the landscape following the devastating impact of Hurricane Sandy in October 2012. The footage highlights both the resilience and the challenges faced by the community as it continues to recover and adapt to climate-related changes.',
            videoUrl: 'https://www.youtube.com/embed/07xJe529--U',  // rockaway video url
            location: {
                center: [-73.75909, 40.59793],
                zoom: 17,
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
            id: 'climate-gent-les',
            alignment: 'left',
            hidden: false,
            title: 'LOWER MANHATTAN & BIG U PROJECT',
            image: 'https://images.adsttc.com/media/images/533e/ba68/c07a/8091/a000/0096/large_jpg/BIG-U1_The-Harbor-Berm.jpg?1396619875',
            description: 'Lower Manhattan, one of the city’s most culturally diverse areas, faces significant flooding risks along its waterfront. The BIG U project, a part of the broader East Side Coastal Resiliency efforts, aims to shield this area from rising sea levels and storm surges. However, these protective enhancements are contributing to rising property values, making Lower Manhattan increasingly unaffordable for its traditional residents<br><br><font color="red">[Update map to add BIG U geojson or more greenery to highlight the nature based solutions and RBD design competition. Or more markers with pop up box]</font>',
            location: {
                center: [-74.00595, 40.71672],
                zoom: 13.87,
                pitch: 59,
                bearing: 0,
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
                center: [-73.88179, 40.64321],
                zoom: 16,
                pitch: 78,
                bearing: -120.80,
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
                center: [-74.06492, 40.59227],
                zoom: 16.5,
                pitch: 66,
                bearing: 31.20,
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

// HEADER DIV SETTINGS
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


// INITIAL MAP LOAD, ADD SOURCES AND LAYERS HERE
map.on("load", function () {
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
                    map.rotateTo(rotateNumber + 180, {
                        duration: 100000, easing: (t) => t
                    });
                });
            }

            // ACTIVATE BOROUGH BOUNDARIES POPUP ON CLIMATE-GENT-RISK CHAPTER
            if (chapterId === 'climate-gent-risk') {
                activateBoroughBoundaries();
            }
            // Activate Red Hook developments layer when entering 'climate-gent-redhook-dev' chapter
            if (chapterId === 'climate-gent-redhook-dev') {
                map.setLayoutProperty('redhook-developments-layer', 'visibility', 'visible');
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

            // Deactivate borough boundaries when exiting 'climate-gent-risk'
            if (chapterId === 'climate-gent-risk') {
                deactivateBoroughBoundaries();
            }
            // Hide Red Hook developments layer when exiting 'climate-gent-redhook-dev' chapter
            if (chapterId === 'climate-gent-redhook-dev') {
                map.setLayoutProperty('redhook-developments-layer', 'visibility', 'none');
            }

            // Handle specific logic for 'climate-gent-les'
            if (chapterId === 'climate-gent-les') {
                map.setLayoutProperty('line-layer', 'visibility', 'none');
                if (popup) popup.remove();
            }
        });

    // Define Borough Info globally or in a scope accessible by handleClick
    const boroughInfo = {
        "Manhattan": "<h3>Manhattan</h3><p>Population: 1.6 million</p><p>Key Fact: Known for Wall Street and Times Square.</p>",
        "Brooklyn": "<h3>Brooklyn</h3><p>Population: 2.6 million</p><p>Key Fact: Known for Brooklyn Bridge and arts scene.</p>",
        "Queens": "<h3>Queens</h3><p>Population: 2.3 million</p><p>Key Fact: Known for its ethnic diversity.</p>",
        "Bronx": "<h3>Bronx</h3><p>Population: 1.4 million</p><p>Key Fact: Home of the New York Yankees.</p>",
        "Staten Island": "<h3>Staten Island</h3><p>Population: 0.5 million</p><p>Key Fact: Known for its green spaces.</p>"
    };

    map.on('click', 'borough-boundaries-fill', handleClick);

    // Functions to activate and deactivate boundaries
    function activateBoroughBoundaries() {
        if (!map.getSource('borough-boundaries')) {
            map.addSource('borough-boundaries', {
                type: 'geojson',
                data: 'https://chriswhong.github.io/class-5-demo-2024/data/borough-boundaries-simplified.geojson',
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



    // Adding GeoJSON source for Red Hook developments
    map.addSource('redhook-developments', {
        type: 'geojson',
        data: 'https://j00by.github.io/nycem-4/geojson/redhook-post-sandy-pluto.geojson'
    });

    // Adding a layer to represent the developments as red circles
    map.addLayer({
        id: 'redhook-developments-layer',
        type: 'circle',
        source: 'redhook-developments',
        paint: {
            'circle-radius': 5,
            'circle-color': '#FF0000' // Red color for the circles
        }
    });

    // Initially set this layer to be invisible
    map.setLayoutProperty('redhook-developments-layer', 'visibility', 'none');





    // Hide scroll prompt on scroll
    window.addEventListener('scroll', function () {
        document.querySelector('.scroll-prompt').style.display = 'none';
    });


});


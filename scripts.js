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
            title: 'UNDERSTANDING CLIMATE CHANGE AND SEA LEVEL RISE IN NYC',
            image: '',
            description: 'Climate change is no longer a distant threat; it is a present reality that New York City is actively confronting. The New York City Panel on Climate Change (NPCC) provides critical projections that paint a vivid picture of what the future holds. According to the latest findings, New York City is expected to experience significant increases in temperature, with projections indicating a rise of up to 4.7 degrees by the 2030s.<br><br>Additionally, sea levels around the city could rise by as much as two feet in the same period, exacerbating the risk of flooding and storm surges. Precipitation is also predicted to increase, leading to more frequent and intense rainstorms. These changes underscore the urgency for comprehensive planning and action to protect the city and its residents from the escalating impacts of climate change, setting the stage for a deeper discussion on how these environmental shifts drive climate gentrification.<a href="https://climate.cityofnewyork.us/initiatives/nyc-panel-on-climate-change-npcc/" target="_blank">[1]</a>',
            location: {
                center: [-73.63626, 41.28645],
                zoom: 8,
                pitch: 0.00,
                bearing: 0.00,
                speed: 1, // slower than the default speed
                curve: 1.5, // smooths the entry and exit of the animation
                easing: (t) => t * (2 - t) // easing function for a more gentle animation
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
            description: 'Climate gentrification in New York City presents a significant challenge as neighborhoods outside the 100-year floodplain become increasingly attractive due to perceived lower risks from climate change. This trend leads to rising property values and living costs, potentially displacing long-term, low-income residents. The primary concern here is the socio-economic displacement of these vulnerable communities, which can disrupt local community networks and economies, thereby increasing social inequality.<a href="https://www.mdpi.com/2071-1050/16/1/42" target="_blank">[2]</a><br><br>The inclusion of the <a href="https://data.cityofnewyork.us/Environment/Sea-Level-Rise-Maps-2020s-100-year-Floodplain-/ezfn-5dsb" target="_blank">2020 sea level rise (100 year floodplain)</a> data on the map reveals areas currently susceptible to flooding, yet despite this, the city continues to develop coastal waterfronts. This development is sparking a form of green gentrification, driven by resiliency projects that attract wealthier residents, subsequently displacing local communities with deep cultural and social ties to New York City’s diverse neighborhoods. Moreover, this map represents only current conditions and fails to project future sea level rise scenarios for 2050 or 2100. It also does not address the critical limitations of outdated FEMA flood maps, potentially underestimating the long-term risks and impacts of climate change on these areas.<a href="https://www.esri.com/about/newsroom/blog/new-york-city-flood-mapping/" target="_blank">[3]</a><br><br><font color="#4424ba">The term "100-year flood" is a technical designation used in floodplain management and insurance to describe a flood event that has a 1% chance of occurring in any given year.</font>',
            location: {
                center: [-74.01842, 40.68208],
                zoom: 11.16,
                pitch: 50,
                bearing: 21.60,
                speed: 1, // slower than the default speed
                curve: 1.5, // smooths the entry and exit of the animation
                easing: (t) => t * (2 - t) // easing function for a more gentle animation
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
            title: 'HOW HURRICANE SANDY RESHAPED RED HOOK',
            videoUrl: 'https://www.youtube.com/embed/07xJe529--U',  // Red Hook video url
            description: 'Red Hook, Brooklyn, is experiencing a profound transformation due to climate gentrification, particularly after Hurricane Sandy hit the area in 2012. Once a low-income neighborhood, Red Hook has seen a significant increase in property values and rents, becoming Brooklyn’s most expensive area for new home sales as its median sales price continues to rise annually.<a href="https://thebridgebk.com/extra_label/special-report/" target="_blank">[4]</a><br><br>The demographic landscape of Red Hook has also shifted dramatically. Historically, the neighborhood was predominantly Black, Hispanic, and Latino, with the population in 2000 comprising 43% Black and nearly half Hispanic or Latino. However, the latest data from 2023 paints a different picture, showing that 93.70% of the population is now White, with only 0.94% Black or African American, 1.98% Asian, 0.52% of other races, and 2.86% multiracial. This demographic shift is a clear indicator of the changing face of Red Hook, as the original community fabric unravels in the wake of new developments and rising costs, spotlighting the complex challenges of climate gentrification.<a href="https://insideclimatenews.org/news/26102017/hurricane-sandy-anniversary-brooklyn-red-hook-vulnerable-waterfront-neighborhood-adapting/" target="_blank">[5]</a><br><br>Video Source: <a href="https://www.youtube.com/watch?v=07xJe529--U&ab_channel=TheBridgeBK" target="_blank">TheBridgeBK</a>',
            location: {
                center: [-74.01111, 40.68243],
                zoom: 14,
                pitch: 70,
                bearing: 41.60,
                speed: 1, // slower than the default speed
                curve: 1.5, // smooths the entry and exit of the animation
                easing: (t) => t * (2 - t) // easing function for a more gentle animation
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
            title: 'WATERFRONT DEVELOPMENT POST-SANDY',
            image: '',
            description: 'Red Hook has developed, especially along its waterfront, since Hurricane Sandy. Developers have added 81 new buildings between 2012 and 2023, using resilience projects to capitalize on scenic views and water proximity. This is much higher than the 55 developments from 2000 to 2012. These changes show how climate resilience and real estate dynamics are transforming Red Hook, emphasizing the need for equitable development strategies that consider the area’s long-standing and diverse communities.<a href="https://insideclimatenews.org/news/26102017/hurricane-sandy-anniversary-brooklyn-red-hook-vulnerable-waterfront-neighborhood-adapting/" target="_blank">[6]</a><br><br>According to NYC Department of Finance, the property at <a href="https://propertyinformationportal.nyc.gov/parcels/parcel/3005560121" target="_blank">109 King Street in Red Hook</a>, which received construction approval in 2016 following Hurricane Sandy, has experienced a significant escalation in its market value. Initially assessed at $623,000 in 2018, the property’s value has continued to climb, reaching $2,686,000 by the year 2024. This trend underscores the broader economic shifts occurring in the area post-disaster.<br><br><b>Red Hook, Brooklyn Population (2000-2022)</b><iframe aria-label="Interactive line chart" id="datawrapper-chart-rsqu6" src="https://datawrapper.dwcdn.net/rsqu6/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="398" data-external="1"></iframe>',
            location: {
                center: [-74.01195, 40.67309],
                zoom: 16.50,
                pitch: 62.45,
                bearing: -37.56,
                speed: 1, // slower than the default speed
                curve: 1.5, // smooths the entry and exit of the animation
                easing: (t) => t * (2 - t) // easing function for a more gentle animation
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
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
            description: 'According to NYC Department of City Planning, in 2020, over 400,000 people live within the 1% annual chance floodplain, a number that nearly doubles to over 780,000 when including those in the 0.2% annual chance floodplain.<a href="https://www.nyc.gov/assets/planning/download/pdf/plans-studies/resilient-neighborhoods/floodplain-by-numbers.pdf" target="_blank">[7]</a><br><br>However, Rebuild by Design’s report, <a href="https://rebuildbydesign.org/uncategorized/climate-displacement-in-nyc/" target=_blank">"Making Space for Our Neighbors"</a>, reveals a more alarming scenario, indicating that over 40% of New York City’s population resides in areas facing a high risk of climate displacement. This report underscores the urgent need for strategic planning and community-centric approaches to address the widening disparities and infrastructure challenges, advocating for proactive relocation strategies and innovative policies to ensure equitable treatment and resilience for all affected populations.',
            location: {
                center: [-74.17696, 40.70856],
                zoom: 9.7,
                pitch: 0,
                bearing: 0,
                speed: 1.5, // slower than the default speed
                curve: 1.5, // smooths the entry and exit of the animation
                easing: (t) => t * (2 - t) // easing function for a more gentle animation
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'climate-gent-cascade',
            alignment: 'left',
            hidden: false,
            title: 'CASCADING EFFECTS OF CLIMATE GENTRIFICATION',
            image: '',
            description: '<iframe aria-label="Table" id="datawrapper-chart-wtMGY" src="https://datawrapper.dwcdn.net/wtMGY/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="713" data-external="1"></iframe>',
            location: {
                center: [-73.86484, 40.61400],
                zoom: 11,
                pitch: 62.40,
                bearing: -77.49,
                speed: 0.5, // slower than the default speed
                curve: 1.5, // smooths the entry and exit of the animation
                easing: (t) => t * (2 - t) // easing function for a more gentle animation
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'climate-gent-nycha',
            alignment: 'left',
            hidden: false,
            title: 'NYCHA HOUSING VULNERABILITY IN ROCKAWAY',
            image: 'https://i0.wp.com/www.thecity.nyc/wp-content/uploads/2022/03/032522_edgemere_2-scaled.jpg?resize=2048%2C1365&ssl=1',
            description: 'Climate gentrification, coastal flooding, and socioeconomic constraints make NYCHA residents in Rockaway, Queens, more vulnerable. Flood-prevention measures have failed to address the area’s environmental dangers, heaping financial strain on NYCHA neighborhoods. Flood insurance and mortgage costs are growing, limiting these individuals’ ability to adjust or relocate and worsening their poor living situations despite climate concerns.<br><br>As Rockaway upzones and builds high-density housing, property values and rents may rise, driving out long-term, low-income residents. This development method may increase local appeal without strengthening infrastructure to sustain denser populations. Local desire for more inclusive planning and homeownership highlights the need for laws that protect vulnerable communities from climate change and urban expansion.<a href="https://www.thecity.nyc/2022/03/28/queens-coastal-fights-climate-change-plan-high-rise-rentals/" target=_blank">[8]</a>',
            location: {
                center: [-73.75909, 40.59793],
                zoom: 17,
                pitch: 72,
                bearing: -72,
                speed: 1, // slower than the default speed
                curve: 1.5, // smooths the entry and exit of the animation
                easing: (t) => t * (2 - t) // easing function for a more gentle animation
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
                speed: 1, // slower than the default speed
                curve: 1.5, // smooths the entry and exit of the animation
                easing: (t) => t * (2 - t) // easing function for a more gentle animation
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
            title: 'BUSINESS OWNER IN HUMAN STORY CANARSIE, BROOKLYN',
            image: '',
            description: 'Canarsie lies in the floodplains of Jamaica Bay and was among the neighborhoods hit hard by Hurricane Sandy. Post-Sandy, flood insurance reforms and rising premiums have disproportionately affected Canarsies long-term residents, many of whom are from minority backgrounds. This financial strain is compounded by speculative real estate investments focusing on its "flood-safe" status.',
            location: {
                center: [-73.88179, 40.64321],
                zoom: 16,
                pitch: 78,
                bearing: -120.80,
                speed: 1, // slower than the default speed
                curve: 1.5, // smooths the entry and exit of the animation
                easing: (t) => t * (2 - t) // easing function for a more gentle animation
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
            title: 'PROTECTING DISPLACEMENT CAUSED BY RESILIENT INFRASTRUCTURE',
            image: 'https://images.adsttc.com/media/images/533e/ba68/c07a/8091/a000/0096/large_jpg/BIG-U1_The-Harbor-Berm.jpg?1396619875',
            description: 'Lower Manhattan, one of the city’s most culturally diverse areas, faces significant flooding risks along its waterfront. The BIG U project, a part of the broader East Side Coastal Resiliency efforts, aims to shield this area from rising sea levels and storm surges. However, these protective enhancements are contributing to rising property values, making Lower Manhattan increasingly unaffordable for its traditional residents<br><br><font color="red">[Update map to add BIG U geojson or more greenery to highlight the nature based solutions and RBD design competition. Or more markers with pop up box]</font>',
            location: {
                center: [-74.00595, 40.71672],
                zoom: 13.87,
                pitch: 59,
                bearing: 0,
                speed: 1, // slower than the default speed
                curve: 1.5, // smooths the entry and exit of the animation
                easing: (t) => t * (2 - t) // easing function for a more gentle animation
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
            title: 'STATEN ISLAND MITIGATION STRATEGY SPONGE ISLAND',
            image: 'https://user-images.githubusercontent.com/93134160/269315565-115bf384-f930-40f2-8874-c7fa0394c286.png',
            description: 'The East Shore of Staten Island experienced severe devastation during Hurricane Sandy, leading to a significant rethink in terms of urban planning and community safety. Managed retreat initiatives and resilience building measures post-Sandy have made parts of the East Shore particularly attractive for new developments. These projects, while necessary, have altered the community fabric, introducing higher-income households and new demographics.',
            location: {
                center: [-74.06492, 40.59227],
                zoom: 16.5,
                pitch: 66,
                bearing: 31.20,
                speed: 1, // slower than the default speed
                curve: 1.5, // smooths the entry and exit of the animation
                easing: (t) => t * (2 - t) // easing function for a more gentle animation
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'climate-gent-manage',
            alignment: 'fully',
            hidden: false,
            title: 'HOW TO MANAGE THE RISK',
            image: 'https://cdn.vox-cdn.com/thumbor/UcD9DLL9IYtfQqHwuAR_hzVnjo8=/0x0:1243x647/1200x800/filters:focal(523x225:721x423)/cdn.vox-cdn.com/uploads/chorus_image/image/58147995/Screen_Shot_2017_12_29_at_1.58.48_PM.0.png',
            description: 'Managing the risk of climate gentrification involves proactive and inclusive urban planning that prioritizes the needs of vulnerable populations.To effectively manage the risk of climate gentrification in New York City, the following actionable strategies can be implemented:<br><br><b>1) Enforce Affordable Housing Mandates:</b> Ensure that neighborhoods less vulnerable to climate impacts have enforced affordable housing quotas to keep these areas accessible for all income levels.<br><br><b>2) Enhance Community Engagement:</b> Develop robust community engagement programs that involve local residents in planning and decision-making processes, ensuring that their needs and voices are heard and addressed.<br><br><b>3) Provide Financial Assistance:</b> Offer financial support programs for homeowners and renters in high-risk areas to help them afford necessary property upgrades and insurance against climate risks.<br><br><b>4) Integrate Strategies into Broader Planning:</b> Incorporate these strategies into the citys overall climate adaptation and resilience planning to ensure a holistic approach that promotes equitable and sustainable urban growth.',
            location: {
                center: [-73.97534, 40.71532],
                zoom: 15.5,
                pitch: 59,
                bearing: 19.20,
                speed: 1, // slower than the default speed
                curve: 1.5, // smooths the entry and exit of the animation
                easing: (t) => t * (2 - t) // easing function for a more gentle animation
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
                    el.style.width = '40px';  // Set the size of the marker
                    el.style.height = '40px';
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
            // Deactivate Red Hook developments layer when exiting 'climate-gent-redhook-dev' chapter
            if (chapterId === 'climate-gent-redhook-dev') {
                map.setLayoutProperty('redhook-developments-layer', 'visibility', 'none');
            }

            // Deactivate the markers for the chapter climate-gent-cascade
            if (chapterId === 'climate-gent-cascade') {
                markersArray.forEach(marker => marker.remove());
                markersArray = [];
            }

        });

    // Define Borough Info globally or in a scope accessible by handleClick
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



    // GEOJSON FOR REDHOOK POST SANDY DEVELOPMENTS 2012-2023
    map.addSource('redhook-developments', {
        type: 'geojson',
        data: 'https://j00by.github.io/nycem-4/geojson/redhook-post-sandy-pluto.geojson'
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
        }
    ];



    // Hide scroll prompt on scroll
    window.addEventListener('scroll', function () {
        document.querySelector('.scroll-prompt').style.display = 'none';
    });


});


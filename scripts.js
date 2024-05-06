// Configuration for the scrollytelling map, header titles and footer credits
const config = {
    style: 'mapbox://styles/j00by/clvfgca9l02b001pe1e4eg0k8',
    accessToken: 'pk.eyJ1IjoiajAwYnkiLCJhIjoiY2x1bHUzbXZnMGhuczJxcG83YXY4czJ3ayJ9.S5PZpU9VDwLMjoX_0x5FDQ',
    showMarkers: false,
    markerColor: '',
    theme: 'light',
    title: 'CLIMATE GENTRIFICATION AND ITS IMPACT ON NEW YORK CITY',
    subtitle: '',
    byline: 'This project, developed by Judy Huynh as part of the John D. Solomon Fellowship for Public Service and in collaboration with New York City Emergency Management, aims to explore and visualize the effects of climate gentrification across New York City neighborhoods. It incorporates educational insights and methodologies from NYU’s Advanced GIS class, led by Chris Whong, enhancing its analytical and visual capabilities through interactive web mapping techniques.',
    footer: 'New York University | Spring 2024<br>Advanced GIS Interactive Web Mapping with Chris Whong<br>Special thanks to Ahmad Shaibani, Melissa Umberger, Jacob Ahola, & Rachel Meltzer!<br>Source: <a href="https://github.com/j00by/nycem-4" target="_blank">Project Repo</a>, <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling Template</a>',
    // CHAPTERS FOR EACH SCROLL  
    chapters: [
        {
            id: 'climate-gent-intro',
            alignment: 'fully',
            hidden: false,
            title: 'UNDERSTANDING CLIMATE CHANGE AND SEA LEVEL RISE IN NYC',
            image: '',
            description: 'Climate change is no longer a distant threat; it is a present reality that New York City is actively confronting. The New York City Panel on Climate Change (NPCC) provides critical projections that paint a vivid picture of what the future holds. According to the latest findings, New York City is expected to experience significant increases in temperature, with projections indicating a rise of up to 4.7 degrees by the 2030s.<br><br>Additionally, sea levels around the city could rise by as much as two feet in the same period, exacerbating the risk of flooding and storm surges. Precipitation is also predicted to increase, leading to more frequent and intense rainstorms. These changes underscore the urgency for comprehensive planning and action to protect the city and its residents from the escalating impacts of climate change, setting the stage for a deeper discussion on how these environmental shifts drive climate gentrification.<a href="https://climate.cityofnewyork.us/initiatives/nyc-panel-on-climate-change-npcc/" target="_blank"><sup>1</sup></a>',
            location: {
                center: [-73.87883, 41.13358],
                zoom: 8.2,
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
            description: 'Climate gentrification in New York City presents a significant challenge as neighborhoods outside the 100-year floodplain become increasingly attractive due to perceived lower risks from climate change. This trend leads to rising property values and living costs, potentially displacing long-term, low-income residents. The primary concern here is the socio-economic displacement of these vulnerable communities, which can disrupt local community networks and economies, thereby increasing social inequality.<a href="https://www.mdpi.com/2071-1050/16/1/42" target="_blank"><sup>2</sup></a><br><br>The inclusion of the <a href="https://data.cityofnewyork.us/Environment/Sea-Level-Rise-Maps-2020s-100-year-Floodplain-/ezfn-5dsb" target="_blank"><font color="#7aacd5"><b>2020 sea level rise (100 year floodplain)</b></font></a> data on the map reveals areas currently susceptible to flooding, yet despite this, the city continues to develop coastal waterfronts. This development is sparking a form of green gentrification, driven by resiliency projects that attract wealthier residents, subsequently displacing local communities with deep cultural and social ties to New York City’s diverse neighborhoods. Moreover, this map represents only current conditions and fails to project future sea level rise scenarios for 2050 or 2100. It also does not address the critical limitations of outdated FEMA flood maps, potentially underestimating the long-term risks and impacts of climate change on these areas.<a href="https://www.esri.com/about/newsroom/blog/new-york-city-flood-mapping/" target="_blank"><sup>3</sup></a><br><br><font color="#4a0096">The term "100-year flood" is a technical designation used in floodplain management and insurance to describe a flood event that has a 1% chance of occurring in any given year.</font>',
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
            id: 'climate-gent-redhook',  // *****NEED HELP, NOT IN THIS CHAPTER SECTION BUT IN MAPBOX CODING BELOW
            alignment: 'left',
            hidden: false,
            title: 'HOW HURRICANE SANDY RESHAPED RED HOOK',
            videoUrl: 'https://www.youtube.com/embed/07xJe529--U',
            description: 'Red Hook, Brooklyn, is experiencing a profound transformation due to climate gentrification, particularly after Hurricane Sandy hit the area in 2012. Once a low-income neighborhood, Red Hook has seen a significant increase in property values and rents, becoming Brooklyn’s most expensive area for new home sales as its median sales price continues to rise annually. Despite its shift towards residential and upscale developments, Red Hook remains primarily zoned for manufacturing.<a href="https://thebridgebk.com/extra_label/special-report/" target="_blank"><sup>4</sup></a><br><br><b>📍</b> <b><font color="#c78d41">R5</font>, <font color="#c7b941">R6</font>, <font color="#70ca85">PARK</font>, <font color="#4B0082">M1-1</font>, <font color="#BA55D3">M1-1/R5</font>, <font color="#9932CC">M1-2</font>, <font color="#800080">M2-1</font>, <font color="#6A0DAD">M3-1</font></b><br><br>The demographic landscape of Red Hook has also shifted dramatically. Historically, the neighborhood was predominantly Black, Hispanic, and Latino, with the population in 2000 comprising 43% Black and nearly half Hispanic or Latino. However, the latest data from 2023 paints a different picture, showing that 93.70% of the population is now White, with only 0.94% Black or African American, 1.98% Asian, 0.52% of other races, and 2.86% multiracial. This demographic shift is a clear indicator of the changing face of Red Hook, as the original community fabric unravels in the wake of new developments and rising costs, spotlighting the complex challenges of climate gentrification.<a href="https://insideclimatenews.org/news/26102017/hurricane-sandy-anniversary-brooklyn-red-hook-vulnerable-waterfront-neighborhood-adapting/" target="_blank"><sup>5</sup></a><br><br>Video Source: <a href="https://www.youtube.com/watch?v=07xJe529--U&ab_channel=TheBridgeBK" target="_blank">TheBridgeBK</a>',
            location: {
                center: [-74.01202, 40.67931],
                zoom: 15,
                pitch: 52.41,
                bearing: 91.26,
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
            description: 'Red Hook has developed, especially along its waterfront, since Hurricane Sandy. Developers have added 81 new buildings between 2012 and 2023, using resilience projects to capitalize on scenic views and water proximity. This is much higher than the 55 developments from 2000 to 2012. These changes show how climate resilience and real estate dynamics are transforming Red Hook, emphasizing the need for equitable development strategies that consider the area’s long-standing and diverse communities.<a href="https://insideclimatenews.org/news/26102017/hurricane-sandy-anniversary-brooklyn-red-hook-vulnerable-waterfront-neighborhood-adapting/" target="_blank"><sup>6</sup></a><br><br><b>📍</b> <b><font color="#f1e3ff">2012</font>, <font color="#e3c8ff">2013</font>, <font color="#d4aaff">2014</font>, <font color="#c58cfe">2015</font>, <font color="#b872ff">2016</font>, <font color="#aa57ff">2017</font>, <font color="#9935ff">2018</font>, <font color="#8c1cff">2019</font>, <font color="#7e00ff">2020</font>, <font color="#7100e6">2021</font>, <font color="#6500cd">2022</font>, <font color="#5100a4">2023</font></b><br><br>According to NYC Department of Finance, the property at <a href="https://propertyinformationportal.nyc.gov/parcels/parcel/3005560121" target="_blank">109 King Street in Red Hook</a>, which received construction approval in 2016 following Hurricane Sandy, has experienced a significant escalation in its market value. Initially assessed at $623,000 in 2018, the property’s value has continued to climb, reaching $2,686,000 by the year 2024. This trend underscores the broader economic shifts occurring in the area post-disaster.<br><br><b>Red Hook, Brooklyn Population (2000-2022)</b><iframe aria-label="Interactive line chart" id="datawrapper-chart-rsqu6" src="https://datawrapper.dwcdn.net/rsqu6/1/" scrolling="yes" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="398" data-external="1"></iframe>',
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
            description: 'According to NYC Department of City Planning, in 2020, over 400,000 people live within the 1% annual chance floodplain, a number that nearly doubles to over 780,000 when including those in the 0.2% annual chance floodplain.<a href="https://www.nyc.gov/assets/planning/download/pdf/plans-studies/resilient-neighborhoods/floodplain-by-numbers.pdf" target="_blank"><sup>7</sup></a><br><br>💡 Click on each borough to learn more!<br><br><b>Racial Distribution in Floodplain (2020)</b><br><iframe aria-label="Grouped Bars" id="datawrapper-chart-8ZC9M" src="https://datawrapper.dwcdn.net/8ZC9M/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="250" data-external="1"></iframe>However, Rebuild by Design’s report, <a href="https://rebuildbydesign.org/uncategorized/climate-displacement-in-nyc/" target=_blank">"Making Space for Our Neighbors"</a>, reveals a more alarming scenario, indicating that over 40% of New York City’s population resides in areas facing a high risk of climate displacement. This report underscores the urgent need for strategic planning and community-centric approaches to address the widening disparities and infrastructure challenges, advocating for proactive relocation strategies and innovative policies to ensure equitable treatment and resilience for all affected populations.',
            location: {
                center: [-74.15874, 40.70703],
                zoom: 10,
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
                center: [-73.86484, 40.6200],
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
            description: 'In Rockaway, Queens, a confluence of climate gentrification, coastal flooding, and socioeconomic constraints has heightened the vulnerability of <b><font color="#4a0096">NYCHA residents</font></b>. Despite the looming threat of rising waters, flood-prevention measures have proven inadequate, placing an additional financial burden on these already economically strained neighborhoods. As the costs of flood insurance and mortgages continue to rise, residents find themselves increasingly unable to adapt or relocate, exacerbating their precarious living conditions amid escalating climate threats.<a href="https://www.thecity.nyc/2022/03/28/queens-coastal-fights-climate-change-plan-high-rise-rentals/" target=_blank"><sup>8</sup></a><br><br>Rockaway NYCHA tenants’ harsh economic conditions are highlighted by housing costs that deviate from market trends. Queens’ median rent rose to $3,950 in January 2024, while NYCHA complexes’ average monthly gross rent is $453 to $548. This large gap highlights the economic struggles of Rockaway’s 6,179 NYCHA residents, a large portion of the poor. These residents, trapped in flood-prone neighborhoods with minimal financial resources, represent climate gentrification as they seek to find cheap alternatives in Queens’ quickly rising rental market.<a href="https://inhabit.corcoran.com/nyc-residential-rental-market-report-jan-2024/" target="_blank"><sup>9</sup></a><a href="https://nycha.maps.arcgis.com/apps/webappviewer/index.html?id=41c6ff5e73ec459092e982060b7cf1a1" target="_blank"><sup>,10</sup></a>',
            location: {
                center: [-73.79759, 40.58788],
                zoom: 13,
                pitch: 5.81,
                bearing: -28.35,
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
            title: 'STATEN ISLAND’S FLOOD RISK AND REAL ESTATE',
            image: 'https://cdn.vox-cdn.com/thumbor/HCObmpC7h7ly9AQsTvU-ib7CxOI=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9547425/builditback_AP.jpg',
            description: 'In 2023, 1,657 properties (<img src=\"https://j00by.github.io/nycem-4/images/dollar-home.png\" style=\"width: 15px; height: 15px;\"> 1-3 family home) were sold on or within 100 feet of Staten Island’s sea level rise zones, totaling $703.5 million in sales and averaging $425,000 per property. A 100-foot radius from flood zones accounts for surrounding homes’ danger, not just those on the water. This market activity in flood-prone areas raises severe worries about new residents’ long-term safety and financial security. Many of these people may have 30-year mortgages on flood-prone properties, a danger compounded by climate change’s increasing sea levels and more severe weather.<a href="https://www.nyc.gov/site/finance/property/property-annualized-sales-update.page" target="_blank"><sup>11</sup></a><br><br>Additionally, the history of repetitive losses in Staten Island, as recognized by NYCEM and FEMA’s National Flood Insurance Program (NFIP), further emphasizes the urgent need for comprehensive risk mitigation strategies to protect these communities and their investments.<a href="https://nychazardmitigation.com/documentation/hazard-profiles/flooding/" target="_blank"><sup>12</sup></a></font><br><br>Image Source: <a href="https://ny.curbed.com/2017/10/27/16554180/hurricane-sandy-relief-build-it-back-housing" target="_blank">Emily Nonko, Curbed</a>',
            location: {
                center: [-74.10144, 40.58507],
                zoom: 13.3,
                pitch: 58.40,
                bearing: -44.22,
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
            id: 'climate-gent-bronx',
            alignment: 'left',
            hidden: false,
            title: 'SAFEGUARDING NYC BUSINESSES IN FLOODPLAINS',
            image: 'https://j00by.github.io/nycem-4/images/dcp-business-zoning.jpg',
            description: 'Climate change poses a significant threat to businesses in flood-prone neighborhoods such as Bronx and Manhattan. This situation endangers not only physical assets and daily operations but also the financial stability of many enterprises, especially smaller ones. Unprepared for such economic shocks, these businesses face potential closure or relocation. The provided map highlights these areas with a <font color="#4a0096"><b>commercial overlay</b></font>, underscoring the regions at risk. As financial burdens escalate and flood risks intensify, only wealthier or newer firms might afford to remain or relocate to these high-risk zones, potentially displacing established local businesses and leading to business climate gentrification.<a href="https://www.nyc.gov/site/planning/zoning/districts-tools/commercial-districts-c1-c8.page" target="_blank"><sup>13</sup></a><br><br>The NYC Department of City Planning adopted Zoning for Coastal Flood Resiliency (ZCFR) to encourage businesses to develop flood-resistant buildings, which may lower flood insurance rates and speed catastrophe recovery. These strategies, coupled with <a href-"https://floodhelpny.org" target="_blank">FloodHelp NY’s</a> outreach and education, aim to raise awareness and enhance flood insurance uptake, helping New York businesses’ physical and financial resilience.<a href="https://www.nyc.gov/site/planning/plans/flood-resilience-zoning-text-update/flood-resilience-zoning-text-update.page" target="_blank"><sup>14</sup></a>',
            location: {
                center: [-73.92116, 40.83073],
                zoom: 12.64,
                pitch: 61.92,
                bearing: 50.39,
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
            image: 'https://ars.els-cdn.com/content/image/3-s2.0-B9780123847034004196-f00419-10-9780123847034.jpg',
            description: '<b>1) Policy and Zoning Adjustments:</b> Revise zoning laws to mandate affordable housing quotas and enforce anti-displacement policies such as rent control and lease protections to protect vulnerable residents from displacement.<br><br><b>2) Community Control and Support:</b> Implement community land trusts to secure long-term housing affordability and actively plan retreat communities that are tailored to meet the social, economic, and cultural needs of relocated populations.<br><br><b>3) Resilience Building and Infrastructure:</b> Expand access to financial assistance programs that support property retrofitting and elevation, and require all neighborhood developments to include comprehensive climate resilience plans.<br><br><b>4) Financial and Insurance Innovations:</b> Work with governmental bodies to reformulate flood insurance policies to ensure they are affordable and accessible, and promote financial products designed to help low-income residents adapt to climate impacts without needing to relocate.<br><br><b>5) Learning from Experience and Enhancing Programs:</b> Utilize insights from the Build It Back program to refine future urban planning and resilience initiatives, and develop equitable, community-focused government-sponsored buyout programs that offer fair market value and facilitate voluntary relocation.<br><br>Image Source: <a href="https://www.sciencedirect.com/topics/earth-and-planetary-sciences/managed-realignment" target="_blank">Wolanski & Elliot, 2016</a>',
            location: {
                center: [-74.01211, 40.71152],
                zoom: 11,
                pitch: 59.50,
                bearing: 65.60,
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
 document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-chapters');
    const storyElement = document.getElementById('story');

    if (toggleButton && storyElement) {
        toggleButton.addEventListener('click', function() {
            storyElement.classList.toggle('hidden-chapters');
            // Optionally force the map to resize if it's still not behaving correctly
            if (window.map) map.resize();
        });
    } else {
        console.error('Toggle button or story element not found');
    }
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
        data: 'https://j00by.github.io/nycem-4/geojson/borough-boundaries-simplified.geojson'
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




    // CHAPTER CLIMATE-GENT-REDHOOK WITH ZONING INFORMATION 
    map.addSource('redhook-zoning', {
        type: 'geojson',
        data: 'https://j00by.github.io/nycem-4/geojson/pluto-redhook-crs84.geojson'
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
                data: 'https://j00by.github.io/nycem-4/geojson/borough-boundaries-simplified.geojson',
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
        }
    ];


    // CHAPTER CLIMATE-GENT-NYCHA FOR ROCKAWAY VULNERABILITY
    map.addSource('nycha-rockaways', {
        type: 'geojson',
        data: 'https://j00by.github.io/nycem-4/geojson/rockaway-nycha.geojson'
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
    map.loadImage('https://j00by.github.io/nycem-4/images/dollar-home.png', function (error, image) {
        if (error) throw error;

        // Add the image to the map style.
        map.addImage('dollar-home', image);

        // Add the source for Staten Island 2023 sales data
        map.addSource('staten-2023-sales', {
            type: 'geojson',
            data: 'https://j00by.github.io/nycem-4/geojson/staten-2023-sales.geojson'
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
        data: 'https://j00by.github.io/nycem-4/geojson/bronx-commercial.geojson'
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

    // Hide scroll prompt on scroll
    window.addEventListener('scroll', function () {
        document.querySelector('.scroll-prompt').style.display = 'none';
    });
    
});


// SCRIPTS PART 1/2
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
            alignment: 'left',
            hidden: false,
            title: 'UNDERSTANDING CLIMATE CHANGE AND SEA LEVEL RISE IN NYC',
            image: '',
            description: 'Climate change is no longer a distant threat; it is a present reality that New York City is actively confronting. The New York City Panel on Climate Change (NPCC) provides critical projections that paint a vivid picture of what the future holds. According to the latest findings, New York City is expected to experience significant increases in temperature, with projections indicating a rise of up to 4.7 degrees by the 2030s.<br><br>Additionally, sea levels around the city could rise by as much as two feet in the same period, exacerbating the risk of flooding and storm surges. Precipitation is also predicted to increase, leading to more frequent and intense rainstorms. These changes underscore the urgency for comprehensive planning and action to protect the city and its residents from the escalating impacts of climate change, setting the stage for a deeper discussion on how these environmental shifts drive climate gentrification.<a href="https://climate.cityofnewyork.us/initiatives/nyc-panel-on-climate-change-npcc/" target="_blank"><sup>1</sup></a>',
            location: {
                center: [-74.16417, 40.79148],
                zoom: 9.2,
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
            description: 'Climate gentrification presents a complex challenge in New York City, manifesting in various forms across its diverse neighborhoods. It primarily refers to socio-economic shifts triggered by urban landscape changes due to climate change impacts and responses. Understanding this phenomenon involves analyzing the dynamics of displacement and neighborhood transformation influenced by climate adaptation strategies. This report covers two pathways to climate gentrification:<br><br><strong>1) Superior Investment:</strong> This pathway involves households moving from high-risk areas—those prone to flooding or other climate hazards—to safer, low-risk neighborhoods. Driven by a desire to avoid increasing climate change risks, this trend often displaces moderate- to low-income households in newly coveted areas as property values rise, making these neighborhoods unaffordable for original residents. This pattern is evident in New York City and is comparable to trends observed in cities like Miami.<a href="https://iopscience.iop.org/article/10.1088/1748-9326/aabb32" target="_blank"><sup>2</sup></a><br><br><strong>2) Resilience Investment:</strong> Take Gowanus Canal, the "Venice of Brooklyn." The canal redevelopment, including waterfront parks that act as flood barriers and recreational spaces, has greatly increased the neighborhood’s aesthetic and recreational appeal. Gowanus’ rising property values and living costs have displaced low-income areas.<a href="https://journals.sagepub.com/doi/10.1111/cico.12283" target="_blank"><sup>3</sup></a><br><br>The inclusion of the <a href="https://data.cityofnewyork.us/Environment/Sea-Level-Rise-Maps-2020s-100-year-Floodplain-/ezfn-5dsb" target="_blank"><font color="#7aacd5"><b>2020 sea level rise (100 year floodplain)</b></font></a> data on the map is essential to identify areas currently at risk of flooding. This visualization supports the understanding of ongoing development patterns in these zones and highlights the dual interests of the real estate market in leveraging the appeal of waterfront properties and the city’s efforts to preserve the ecological and recreational value of these areas.',
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
            videoUrl: '',
            description: 'Hurricane Sandy, which struck in 2012, marked a turning point for Red Hook, Brooklyn. Historically a low-income neighborhood, Red Hook has undergone profound changes, with a significant increase in property values and rents, positioning it as Brooklyn’s most expensive area for new home sales. Despite these developments, Red Hook remains primarily zoned for manufacturing, as shown on the interactive map.<a href="https://thebridgebk.com/extra_label/special-report/" target="_blank"><sup>5</sup></a><br><br><b>Red Hook, Brooklyn Population (2000-2022)</b><iframe aria-label="Interactive line chart" id="datawrapper-chart-rsqu6" src="https://datawrapper.dwcdn.net/rsqu6/1/" scrolling="yes" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="398" data-external="1"></iframe>The demographic composition of Red Hook has dramatically transformed. In 2000, the neighborhood was predominantly Black and Hispanic, with 43% identifying as Black and nearly half as Hispanic or Latino. By 2023, the data shows a significant shift, with 94% of residents identifying as White and only 6% from other races. This change underscores the impact of new developments and rising costs, altering the community’s original makeup. Notably, the overall population has remained stable, indicating that these demographic shifts result from changes in the community’s composition rather than population growth.<a href="https://insideclimatenews.org/news/26102017/hurricane-sandy-anniversary-brooklyn-red-hook-vulnerable-waterfront-neighborhood-adapting/" target="_blank"><sup>6</sup></a><br><br><b>💡</b> <b><font color="#4B0082">M1-1</font>, <font color="#BA55D3">M1-1/R5</font>, <font color="#9932CC">M1-2</font>, <font color="#800080">M2-1</font>, <font color="#6A0DAD">M3-1</font>, <font color="#c78d41">R5</font>, <font color="#c7b941">R6</font>, <font color="#70ca85">PARK</font></b>',
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
            id: 'climate-gent-rhcr',  // *****NEED HELP, NOT IN THIS CHAPTER SECTION BUT IN MAPBOX CODING BELOW
            alignment: 'left',
            hidden: false,
            title: 'RED HOOK COASTAL RESILIENCE PROJECT',
            videoUrl: '',
            description: 'Following Hurricane Sandy, Red Hook has seen substantial development and transformation, particularly evident through the resilience investment pathway to climate gentrification. This pathway includes major infrastructure projects designed to reduce climate-related risks. While these projects are crucial for protecting the area against future disasters, they also increase property values, making Red Hook more attractive to new residents and investors but less affordable for long-standing community members.<br><br>The <a href="https://www.nyc.gov/assets/designcommission/downloads/pdf/08-08-2022-pres-DDC-p-RedHookResiliency.pdf" target="_blank">Red Hook Coastal Resilience (RHCR) Project</a>, part of Mayor de Blasio’s $20 billion five-borough resiliency plan, plays an important role in this area’s adaptation strategy. This multilayered strategy attempts to prepare neighborhoods, the economy, and public services to endure and recover from climate change. The project builds elevated landscapes and flood barriers to protect the community from storms and flooding, improving safety and appeal. These improvements, while beneficial, also contribute to rising property values and the influx of wealthier residents.',
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
            description: 'However, there’s a caveat to resilience investment. The pace of development has accelerated in Red Hook since Hurricane Sandy, with 81 new buildings constructed between 2012 and 2023, compared to 55 from 2000 to 2012. These buildings often take advantage of the area’s scenic waterfront views and are influenced by the neighborhood’s improved resilience infrastructure.<br><br>For example, the property at 109 King Street <a href="https://propertyinformationportal.nyc.gov/parcels/parcel/3005560121" target="_blank">109 King Street</a>, which was approved for construction in 2016, saw its value jump from $623,000 in 2018 to $2,686,000 by 2024, marking a 331% increase. This sharp rise in value reflects the broader economic shifts in Red Hook, where improved resilience features make properties more desirable but also less affordable for many existing residents.<br><br>Detailed information about these developments, including the year built, zoning regulations, and total units, is available on an interactive map, offering insights of how Red Hook is changing.<a href="https://insideclimatenews.org/news/26102017/hurricane-sandy-anniversary-brooklyn-red-hook-vulnerable-waterfront-neighborhood-adapting/" target="_blank"><sup>7</sup></a><br><br><b>💡</b> <b><font color="#f1e3ff">2012</font>, <font color="#e3c8ff">2013</font>, <font color="#d4aaff">2014</font>, <font color="#c58cfe">2015</font>, <font color="#b872ff">2016</font>, <font color="#aa57ff">2017</font>, <font color="#9935ff">2018</font>, <font color="#8c1cff">2019</font>, <font color="#7e00ff">2020</font>, <font color="#7100e6">2021</font>, <font color="#6500cd">2022</font>, <font color="#5100a4">2023</font></b>',
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
            description: 'According to the NYC Department of City Planning, over 400,000 people resided within the 1% annual chance floodplain in 2020. This number increases to more than 780,000 when including those within the 0.2% annual chance floodplain. These statistics highlight the significant exposure of New Yorkers to potential flooding each year.<a href="https://www.nyc.gov/assets/planning/download/pdf/plans-studies/resilient-neighborhoods/floodplain-by-numbers.pdf" target="_blank"><sup>8</sup></a><br><br><b>Racial Distribution in Floodplain (2020)</b><br><iframe aria-label="Grouped Bars" id="datawrapper-chart-8ZC9M" src="https://datawrapper.dwcdn.net/8ZC9M/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="250" data-external="1"></iframe>Rebuild by Design, in collaboration with Milliman, conducted a detailed study titled <a href="https://rebuildbydesign.org/uncategorized/climate-displacement-in-nyc/" target=_blank">"Making Space for Our Neighbors"</a> to understand how future coastal flooding using 2050 coastal floodplain could lead to the displacement of NYC residents. The study revealed that nearly 1.7 million people—20% of the city’s population—currently live within or adjacent to these future flood zones. Among these, nearly 440,000 reside in low-income neighborhoods with a median household income around $31,000. As flooding becomes more frequent and severe, these residents are likely to rely on the City, FEMA, or charitable organizations for relocation assistance, as the rising waters increasingly threaten their safety and living conditions.<br><br>💡 Click on each borough to learn who lives in the floodplains!',
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
            title: 'MAPPING EFFECTS OF CLIMATE GENTRIFICATION',
            image: '',
            description: '<iframe aria-label="Table" id="datawrapper-chart-wtMGY" src="https://datawrapper.dwcdn.net/wtMGY/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="713" data-external="1"></iframe>💡 Click on each photo to learn more about different effects of climate gentrification across NYC.',
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
            description: 'In Rockaway, Queens, NYCHA residents face heightened vulnerability due to climate gentrification, coastal flooding, and socioeconomic constraints.8 Flood-prevention measures have proven inadequate, particularly highlighted by the post-Hurricane Sandy scenario where significant delays in repair work plagued NYCHA buildings. Even FEMA-funded repairs failed to address longstanding issues such as leaks and mold, critical factors for ensuring overall resilience and safety of the housing structures.<a href="https://www.thecity.nyc/2022/03/28/queens-coastal-fights-climate-change-plan-high-rise-rentals/" target=_blank"><sup>9</sup></a><br><br>The economic burden on residents is starkly highlighted by the disparity between local and NYCHA rents: while the median rent in Queens soared to $3,950 in January 2024, NYCHA’s average monthly rent in Rockaway was only $453 to $548. This vast gap underscores the financial struggles faced by the 6,179 predominantly low-income residents, who find themselves increasingly unable to cope with rising living costs, including flood insurance and home repairs. Consequently, many are forced to seek more affordable accommodations, often outside their communities, exacerbating their precarious situations amid escalating climate threats.<a href="https://inhabit.corcoran.com/nyc-residential-rental-market-report-jan-2024/" target="_blank"><sup>10</sup></a><a href="https://nycha.maps.arcgis.com/apps/webappviewer/index.html?id=41c6ff5e73ec459092e982060b7cf1a1" target="_blank"><sup>,11</sup></a><br><br>💡 Click on each <b><font color="#4a0096">NYCHA asset</font></b> to learn more.',
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
            description: 'Staten Island presents a stark contrast in its response to escalating flood risks, embodying a tale of two islands. On one side, the real estate market remains active and seemingly robust, with 1,657 properties, ranging from one to three-family homes, sold in 2023 within 100 feet of designated sea level rise zones. These transactions, totaling $703.5 million and averaging $425,000 per property, highlight a vibrant market where buyers continue to invest in areas increasingly threatened by climate change’s rising sea levels and severe weather conditions.<a href="https://www.nyc.gov/site/finance/property/property-annualized-sales-update.page" target="_blank"><sup>12</sup></a><br><br>Conversely, the island also tells a story of recovery and mitigation flaws following Hurricane Sandy. The state-initiated buyout program in areas like Oakwood Beach aimed to relocate residents from high-risk flood zones, investing $200 million to purchase over 500 homes. However, this well-intended program resulted in numerous vacant, overgrown lots, transforming bustling neighborhoods into silent, unused spaces. The program’s limitations were marked by incomplete participation—some residents were hindered by foreclosure or emotional ties, while others simply chose to stay. These gaps led to a patchwork of empty plots alongside occupied homes, reducing the effectiveness of creating contiguous green spaces for flood protection. Moreover, the high costs and ongoing financial constraints have halted further buyouts, raising sustainability concerns about such large-scale retreat strategies.<a href="https://gothamist.com/news/new-yorkers-of-color-less-likely-to-benefit-from-pedestrian-plazas-report-says" target="_blank"><sup>13</sup></a><br><br><img src=\"img/dollar-home.png\" style=\"width: 15px; height: 15px;\">1-3 family home sold in 2023 (NYC Department of Finance)<br><br>Image Source: <a href="https://ny.curbed.com/2017/10/27/16554180/hurricane-sandy-relief-build-it-back-housing" target="_blank">Emily Nonko, Curbed</a>',
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
            videoUrl: 'https://www.youtube.com/embed/4-bz0ZHtsgI',
            description: 'Climate change significantly threatens businesses in flood-prone neighborhoods of New York City, including the Bronx and Manhattan. These areas, highlighted on maps with a commercial overlay, expose physical assets, disrupt daily operations, and threaten the financial stability of many enterprises, particularly smaller ones. As flood risks increase and financial burdens grow, only wealthier or more recently established firms may have the resources to stay or move, potentially leading to the displacement of long-standing local businesses and contributing to business climate gentrification.<a href="https://www.nyc.gov/site/planning/zoning/districts-tools/commercial-districts-c1-c8.page" target="_blank"><sup>14</sup></a><br><br>To address these challenges, the NYC Department of City Planning has implemented the Zoning for Coastal Flood Resiliency (ZCFR). Businesses are encouraged to create flood-resistant structures to cut flood insurance costs and speed disaster recovery.<a href="https://www.nyc.gov/site/planning/plans/flood-resilience-zoning-text-update/flood-resilience-zoning-text-update.page" target="_blank"><sup>15</sup></a> Small businesses can also prepare for calamities and improve operational resiliency using the SBS Business Preparedness and Resiliency Program. Risk assessments, funding, and education from Business PREP help owners identify weaknesses and strengthen their resilience to disruptive events.<a href="https://nyc-business.nyc.gov/nycbusiness/bprep" target="_blank"><sup>16</sup></a> These tactics, combined with <a href="https://www.floodhelpny.org/" target="_blank">FloodHelp NY\'s</a> outreach and education, aim to boost flood insurance awareness and adoption, strengthening New York businesses\' physical and financial resilience.',
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
            alignment: 'left',
            hidden: false,
            title: 'HOW TO MANAGE THE RISK',
            image: '',
            description: '<b>1) Policy and Zoning Adjustments:</b> Revise zoning laws to include mandates for affordable housing, as seen in the <a href="https://www.nyc.gov/site/planning/plans/city-of-yes/city-of-yes-housing-opportunity.page" target="_blank">"City of Yes for Housing Opportunity"</a> initiative by the NYC Department of City Planning. This initiative aims to increase housing affordability through zoning text amendments. Additionally, enforce anti-displacement policies such as rent control and lease protections to protect vulnerable residents from displacement.<br><br><b>2) Community Control and Support:</b> Implement community land trusts to secure long-term housing affordability. The <a href="https://climate.cityofnewyork.us/initiatives/planyc-getting-sustainability-done/" target="_blank">“PlaNYC Blue Sky Housing Mobility Program”</a>, part of the city’s comprehensive waterfront plan, seeks to facilitate future land acquisition with federal and state funds, enhancing the city’s resilience to climate change and protecting vulnerable communities.<br><br><b>3) Resilience Building and Infrastructure:</b> Expand access to financial assistance programs that support property retrofitting and elevation. Ensure that all neighborhood developments include comprehensive climate resilience plans, drawing on the principles established by the DCP’s <a href="https://www.nyc.gov/site/planning/zoning/districts-tools/special-purpose-districts-citywide.page" target="_blank">Special Flood Zoning Districts</a> created in 2017 to restrict development in high-risk flood areas.<br><br><b>4) Financial and Insurance Innovations:</b> Work with governmental bodies to integrate innovative insurance solutions such as <a href="https://www.swissre.com/our-business/public-sector-solutions/parametric-insurance-solutions.html" target="_blank">Swiss Re’s parametric insurance</a> into flood insurance policies. This type of insurance provides quick payouts based on predefined triggers like specific weather conditions, without the need for traditional claims processing. By offering immediate financial support post-disaster, parametric insurance can enhance community resilience, facilitating quicker recovery and potentially lowering costs compared to traditional insurance models.<br><br><b>5) Learning from Experience and Enhancing Programs:</b> Utilize insights from the <a href="https://www.nyc.gov/site/housingrecovery/resources/build-it-back.page" target="_blank">“Build It Back Program”</a> to refine future urban planning and resilience initiatives. Develop equitable, community-focused government-sponsored buyout programs that offer fair market value and facilitate voluntary relocation, ensuring that lessons learned from past efforts guide future actions.',
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


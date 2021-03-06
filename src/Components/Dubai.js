import React, { Component } from 'react';
import Header from './Header/index';
import TopPicks from './Picks';
import Collections from './Collections';
import Download from './Download';
import Media from './Media';
import Footer from './footer';
import ExperienceCard from './ExperienceCard';
import './Styles/new-york.css';
import { RiVirusFill } from 'react-icons/ri'
import { GiWorld } from 'react-icons/gi'
import DubaiWeather from './DubaiWeather';






class Dubai extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);


    }
    render() {
        return (
            <div className="new-york-wrapper">
                <Header
                    backgroundImagesData={backgroundImagesData}
                    history={this.props.history}
                    selectedCity={'Dubai'}
                    navigationData={NewYorkNavigationData}
                />
                <div className='news'>
                    <div className='newsWrapper ukmsg'>
                        <h3 className='headline text-center'>Travel News</h3>
                        <div className='covid 19'>
                            <span className='virus'><RiVirusFill className='fill' /> Covid-19</span>
                        </div>
                        <div className='covidMsg'>
                            <h3 className='travel'>Travel advisory for this destination</h3>
                            <p className='writeTravel'>
                               Proof of COVID-19 vaccination, recovery or negative test required before departure
                            </p>
                            <button className='btn'><span><GiWorld className='filler' /></span>
                                <span className='shift'>u.ea</span>
                            </button>
                        </div>
                    </div>
                    <div className='weather'>
                        <DubaiWeather />
                    </div>
                </div>

                <TopPicks className="tops" id="top"
                    headline={'Top Experiences in Dubai'}
                    pickedData={NewYorkData}
                />

                {AllNewYorkCityData &&
                    AllNewYorkCityData.map(
                        ({ id, headline, description, sectionData }) => (
                            <CitySection
                                key={id}
                                headline={headline}
                                description={description}
                                cardsData={sectionData}
                            />
                        )
                    )}
                <Download />
                <Media />
                <Footer />
            </div>
        );
    }
}

const CitySection = ({ headline, description, cardsData }) => (
    <div className="city-section-wrapper">
        <h2
            style={{
                textAlign: 'left'
            }}
        >
            {headline}
        </h2>
        <hr
            style={{
                backgroundColor: '#ffbb58',
                width: '75px',
                height: '2px',
                border: 'none',
                marginTop: '0px',
                marginLeft: '0px',
                marginBottom: '10px'
            }}
        />
        <p
            style={{
                color: '#545454',
                fontSize: '15.3px',
                marginTop: '0px',
                textAlign: 'left',
                lineHeight: '20px'
            }}
        >
            {description}
        </p>
        <div className="travel-card-wrapper">
            {cardsData &&
                cardsData.map(
                    ({
                        id,
                        city,
                        url,
                        description,
                        currency,
                        currentPrice,
                        ratings,
                        stars,
                        discount,
                        cashback,
                        lastPrice,
                        about,
                        showMore,
                        highlight
                    }) => (
                        <ExperienceCard
                            key={id}
                            city={city}
                            about={about}
                            url={url}
                            description={description}
                            currency={currency}
                            price={currentPrice}
                            ratings={ratings}
                            stars={stars}
                            discount={discount}
                            cashback={cashback}
                            lastPrice={lastPrice}
                            showMore={showMore}
                            highlight={highlight}
                        />
                    )
                )}
        </div>
    </div>
);

// New York Caraousel Images

const backgroundImagesData = [
    {
        id: 1,
        url:
            'https://cdn-imgix-open.headout.com/flaps/city-specific/new-york/desktop/Broadway-week-desktop-4.png?auto=compress&fm=webp&h=501&crop=faces&fit=min'
    },
    {
        id: 2,
        url:
            'https://www.planetware.com/wpimages/2020/08/italy-rome-top-attractions-castel-sant-angelo-national-museum.jpg'
    },
    {
        id: 3,
        url:
            'https://www.propertyfinder.ae/blog/wp-content/uploads/2019/03/shutterstock_700723099-800x534.jpg'
    },
    {
        id: 4,
        url:
            'https://cdn-imgix-open.headout.com/desktop-flaps/ny-508-01.jpg?auto=compress&fm=webp&h=501&crop=faces&fit=min'
    },
    {
        id: 5,
        url:
            'https://i1.wp.com/www.agoda.com/wp-content/uploads/2019/04/Paris-attractions-travel-France-Seine-River-Cruise.jpg'
    },
    {
        id: 6,
        url:
            'https://cdn-imgix-open.headout.com/flaps/non-city-specific/desktop/experience-desktop.png?auto=compress&fm=webp&h=501&crop=faces&fit=min'
    }
];

// New York Navigation Data

const NewYorkNavigationData = [
    {
        id: 1,
        name: 'Categories'
    },
    {
        id: 2,
        name: 'Best Sellers'
    },
    {
        id: 3,
        name: 'Broadway Show Tickets'
    },
    {
        id: 4,
        name: 'City Walks'
    },
    {
        id: 5,
        name: 'Food and Drinks'
    }
];

// All New York City Sections Data ~ nested ( Dynamically Rendering )

const AllNewYorkCityData = [
    {
        id: 1,
        headline: 'Broadway Show Tickets',
        description:
            'Stay up to date on the season???s hottest shows and score amazing discounts and offers for the most popular entertainment attraction in the world.',
        sectionData: [
            {
                id: 1,
                currentPrice: 62.5,
                currency: 'AED',
                stars: 4.6,
                ratings: 564,
                cashback: 10,
                about: 'BROADWAY MUSICALS',
                description: 'The King and I',
                url:
                    'https://getboulder.com/wp-content/uploads/2018/01/TheKingAndI.jpg'
            },
            {
                id: 2,
                currentPrice: 29,
                lastPrice: null,
                currency: 'AED',
                stars: 4.6,
                ratings: 681,
                cashback: 10,
                about: 'BROADWAY MUSICALS',
                description: `The Waitress`,
                url:
                    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F03%2Fwaitress0729rsm-2000.jpg'
            },
            {
                id: 3,
                currentPrice: 40.5,
                lastPrice: 79,
                currency: 'AED',
                stars: null,
                ratings: null,
                cashback: null,
                discount: 49,
                about: 'BROADWAY SHOW TICKETS',
                description: `King Kong - Broadway Week Discount`,
                url:
                    'https://cdn-imgix.headout.com/tour/18201/TOUR-IMAGE/a24bde23-2e32-49d4-bf14-b933fe60fe52-c817b2f3-194d-4fde-9ad8-fccbaf50ed31-9339-new-york-king-kong-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
            },
            {
                id: 4,
                currentPrice: 99,
                lastPrice: null,
                currency: 'AED',
                stars: 4.7,
                ratings: 347,
                cashback: 10,
                about: 'BROADWAY MUSICALS',
                description: `The Lion King`,
                url:
                    'https://cdn-imgix.headout.com/tour/637/TOUR-IMAGE/0442ebf8-8ad3-4e1b-bb49-3b7dde81eb35-507-new-york-the-lion-king-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
            },
            {
                id: 5,
                currentPrice: 89,
                lastPrice: null,
                currency: 'AED',
                stars: 4.6,
                ratings: 561,
                cashback: 10,
                about: 'BROADWAY MUSICALS',
                description: `Wicked`,
                url:
                    'https://cdn-imgix.headout.com/tour/647/TOUR-IMAGE/35c36ce6-af74-4fdb-a14f-a2f947f6c713-5.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
            },
            {
                id: 6,
                currentPrice: 49,
                lastPrice: 79,
                currency: 'AED',
                stars: 4.6,
                ratings: 322,
                cashback: 15,
                discount: 50,
                about: 'BROADWAY MUSICALS',
                description: `Mary Poppins`,
                url:
                    'https://cloudimages.broadwayworld.com/columnpic8/04E66B5B-96B5-20E9-E9939A708598A273.jpg'
            },
            {
                id: 7,
                currentPrice: 69,
                lastPrice: 79,
                currency: 'AED',
                stars: 4.6,
                ratings: 274,
                cashback: 10,
                discount: 46,
                about: 'BROADWAY MUSICALS',
                description: `Anastasia`,
                url:
                    'https://cdn-imgix.headout.com/tour/7573/TOUR-IMAGE/fa5af28b-c617-446d-a475-ced33c58c98d-4653-new-york-anastasia-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
            },
            {
                id: 8,
                showMore: true,
                currentPrice: null,
                lastPrice: null,
                currency: null,
                stars: null,
                ratings: null,
                cashback: null,
                discount: null,
                about: null,
                description: null,
                url: null
            }
        ]
    },

    {
        id: 3,
        headline: 'Food and Drinks',
        description:
            'Get a taste of Dubai???s truly global culture with these delicious food tours of Dubai. Whether you???re looking for the best Dubai local cuisine or fancy the best craft beer from the east coast, we have got the perfect tours for you.',
        sectionData: [
            {
                id: 1,
                currentPrice: 61,
                lastPrice: 70,
                currency: 'AED',
                stars: null,
                ratings: null,
                cashback: null,
                discount: 15,
                about: 'FOOD AND DRINKS',
                description: 'El Gardina',
                url:
                    'https://s7d2.scene7.com/is/image/ritzcarlton/50581374-RC%20Naples%20Gumbo%20Limbo%20v1-1?$XlargeViewport100pct$'
            },
            {
                id: 2,
                currentPrice: 60,
                lastPrice: null,
                currency: 'AED',
                stars: null,
                ratings: null,
                cashback: null,
                about: 'FOOD AND DRINKS',
                description: `Al Mahara Restaurant`,
                url:
                    'https://www.bocadolobo.com/blog/wp-content/uploads/2021/03/Al_Mahara_8x5-1-1.jpg'
            },
            {
                id: 3,
                currentPrice: 56,
                lastPrice: 64,
                currency: 'AED',
                stars: null,
                ratings: null,
                cashback: null,
                discount: 25,
                about: 'FOOD AND DRINKS',
                description: `Al Marriott Restaurant`,
                url:
                    'https://traveler.marriott.com/wp-content/uploads/2020/09/DXBTP_SoBe.jpg'
            },
            {
                id: 4,
                currentPrice: 82,
                lastPrice: null,
                currency: 'AED',
                stars: null,
                ratings: null,
                cashback: 40,
                about: 'FOOD AND DRINKS',
                description: `Romeo Pizza`,
                url:
                    'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/15/97.jpg'
            },
            {
                id: 5,
                currentPrice: 50,
                lastPrice: null,
                currency: 'AED',
                stars: null,
                ratings: null,
                cashback: null,
                about: 'FOOD AND DRINKS',
                description: `Villa Borghes`,
                url:
                    'https://img.theculturetrip.com/450x/smart/images/56-3644837-14302231229a28458ce54246bda343b9c83243ffe9.jpg'
            },
            {
                id: 6,
                currentPrice: 72,
                lastPrice: 82,
                currency: 'AED',
                stars: null,
                ratings: null,
                cashback: null,
                discount: 12,
                about: 'FOOD AND DRINKS',
                description: `Abdu Rabbu`,
                url:
                    'https://www.timeoutdoha.com/public/styles/full_img_sml/public/images/2021/03/25/Ninive.jpg?rDOcJIjS'
            },
            {
                id: 7,
                currentPrice: 57,
                lastPrice: null,
                currency: 'AED',
                stars: 5.0,
                ratings: 88500,
                cashback: null,
                about: 'FOOD AND DRINKS',
                description: 'Al Rubia',
                url:
                    'https://blog.eatapp.co/content/images/2018/11/IMG_7340.jpg'
            },
            {
                id: 8,
                showMore: true,
                currentPrice: null,
                lastPrice: null,
                currency: null,
                stars: null,
                ratings: null,
                cashback: null,
                discount: null,
                about: null,
                description: null,
                url: null
            }
        ]
    },
    {
        id: 4,
        headline: 'Dubai Tours',
        description:
            'With a range of tours catering to different parts of the city, you get the chance to see some of the major attractions. Check out our list of Dubai Tours to know more.',
        sectionData: [
            {
                id: 1,
                currentPrice: 33,
                lastPrice: 35,
                currency: 'AED',
                stars: 5.0,
                ratings: 30900,
                cashback: null,
                discount: 5,
                about: 'DUBAI TOURS',
                description: 'The Tour',
                url:
                    'https://upload.touristvisaonline.com/tours/tourposter/dubai%20sightseeing%20guided%20boat%20tours_Poster__fef19e6273fa455d88ff380b2b806a0d_1615401250221.jpg'
            },
            {
                id: 2,
                currentPrice: 86,
                lastPrice: 89,
                currency: 'AED',
                stars: 4.9,
                ratings: 1587,
                cashback: null,
                discount: 3,
                highlight: `SAVE UP To 50%`,
                about: 'DUBAI EXPLORER PASS',
                description: 'Dubai Explorer Pass - 3 Attractions',
                url:
                    'http://abctoursandtravels.com/wp-content/uploads/2015/10/4Nights1.jpg'
            },
            {
                id: 3,
                currentPrice: 134.4,
                lastPrice: 168,
                currency: 'AED',
                stars: null,
                ratings: null,
                cashback: null,
                discount: 20,
                about: 'DUBAI TOURS',
                description: `Dubai in a Day`,
                url:
                    'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/86/31/04.jpg'
            },
            {
                id: 4,
                currentPrice: 51,
                lastPrice: 54,
                currency: 'AED',
                stars: null,
                ratings: null,
                discount: 15,
                about: 'DUBAI TOURS',
                description: `The Downtown Experience - The Ride`,
                url:
                    'https://res.cloudinary.com/enchanting/f_auto,q_70/et-web/2017/03/Enchanting-Travels-Dubai-Tours-Dubai-city.jpg'
            },
            {
                id: 5,
                currentPrice: 35,
                lastPrice: 38,
                currency: 'AED',
                stars: 4.4,
                ratings: 68901,
                cashback: 10,
                discount: 7,
                about: 'WORLD OBSERVATORY',
                description: `Dubai Observatory Entrance Tickets`,
                url:
                    'https://media.timeout.com/images/105581784/image.jpg'
            },
            {
                id: 6,
                currentPrice: 124,
                lastPrice: null,
                currency: 'AED',
                stars: 4.8,
                ratings: 98906,
                cashback: null,
                discount: null,
                highlight: `SAVE UP TO $103`,
                about: 'THE DUBAI PASS',
                description: `Dubai Unlimited Attraction Pass - 1 Day`,
                url:
                    'https://imagetravelnepal.com/assets/timthumb/timthumb.php?src=https%3A%2F%2Fimagetravelnepal.com%2Fimages%2Ftrip%2Ftrip1498553323.jpg&w=850&h=450&zc=1&q=100'
            },
            {
                id: 7,
                currentPrice: 69,
                lastPrice: null,
                currency: 'AED',
                stars: 4.8,
                ratings: 88761,
                cashback: 5,
                discount: null,
                about: 'The SIGHTSEEING PASS',
                description: `FreeStyle Attraction Pass with Hop-On Hop-Off Cruise`,
                url:
                    'https://www.mustdo.com/wp-content/uploads/2017/06/Naples-Trolley-sightseeing-tours-Naples-Florida.jpeg'
            },
            {
                id: 8,
                showMore: true,
                currentPrice: null,
                lastPrice: null,
                currency: null,
                stars: null,
                ratings: null,
                cashback: null,
                discount: null,
                about: null,
                description: null,
                url: null
            }
        ]
    },
    {
        id: 7,
        headline: 'Dubai Museums and Hotels',
        description:
            'From museums that offer knowledge about art and history to five stars hotels, Dubai attractions have it all. Have a look at these to know more.',
        sectionData: [
            {
                id: 1,
                currentPrice: 37,
                lastPrice: 39.2,
                currency: 'AED',
                stars: 4.9,
                ratings: 99533,
                cashback: 10,
                about: 'HOTELS',
                description: 'Flora Inn',
                url:
                    'https://ak-d.tripcdn.com/images/22030u000000jgqnj7B28_R_550_412_R5_Q70_D.jpg'
            },
            {
                id: 2,
                currentPrice: 32,
                lastPrice: null,
                currency: 'AED',
                stars: 4.9,
                ratings: 87311,
                cashback: null,
                discount: 20,
                highlight: `NEW ARRIVAL`,
                about: 'MUESEUMS',
                description: `Museum of the Future`,
                url:
                    'https://media-cdn.tripadvisor.com/media/photo-s/22/69/55/b5/hotel-facade-featuring.jpg'
            },
            {
                id: 3,
                currentPrice: 21.5,
                lastPrice: 23,
                currency: 'AED',
                stars: 5.0,
                ratings: 67331,
                cashback: null,
                discount: 6,
                about: 'MUSEUMS',
                description: `Dubai Mueseum of Natural History`,
                url:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Roman_Museum_098.jpg/220px-Roman_Museum_098.jpg'
            },
            {
                id: 4,
                currentPrice: 25,
                lastPrice: null,
                currency: 'AED',
                stars: 4.8,
                ratings: 34448,
                cashback: null,
                about: 'MUSEUMS',
                highlight: `BEST SELLER`,
                description: `Skip the Line Tickets to Meuseum of Modern Art (MoMA)`,
                url:
                    'https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/victoria-and-albert-museum/vanda_copyright_visitlondon_jonreid1920x1080.jpg?h=174&la=en&w=310&hash=8B59347343F72C71640F0EEA79BDA3EC06E4A177'
            },
            {
                id: 5,
                currentPrice: 26,
                lastPrice: null,
                currency: 'AED',
                stars: 4.8,
                ratings: 90660,
                cashback: null,
                about: 'MEUSEUMS',
                highlight: `BEST SELLER`,
                description: `Hosni Meuseum Admission: Skip the Ticket Line`,
                url:
                    'https://i.pinimg.com/736x/4a/0b/2a/4a0b2a4414b77fbe7f27487f9e961749--visit-dubai-sheikh-mohammed.jpg'
            },
            {
                id: 6,
                currentPrice: 37,
                lastPrice: null,
                currency: 'AED',
                stars: 4.9,
                ratings: 79052,
                cashback: 10,
                discount: null,
                about: 'HOTELS',
                description: `Ecos Hotel`,
                url:
                    'https://cf.bstatic.com/xdata/images/hotel/270x200/302226592.jpg?k=17b850cb97564672bcdedc4a8e8a516d105436df6057a5e68d3aaa5a65cd65c8&o='
            },
            {
                id: 7,
                currentPrice: 31,
                lastPrice: 38,
                currency: 'AED',
                stars: 5.0,
                ratings: 47600,
                cashback: null,
                discount: 18,
                about: 'HOTELS',
                description: `St Pancras Renaissance`,
                url:
                    'https://www.dayofdubai.com/sites/default/files/news/4-star-hotels-dubai-magnificent-yet-economic-12272.jpg'
            },
            {
                id: 8,
                showMore: true,
                currentPrice: null,
                lastPrice: null,
                currency: null,
                stars: null,
                ratings: null,
                cashback: null,
                discount: null,
                about: null,
                description: null,
                url: null
            }
        ]
    }
];

// New York Experiences Data

const NewYorkData = [
    {
        id: 1,
        currentPrice: 95.5,
        currency: 'AED',
        stars: 4.6,
        ratings: 10564,
        cashback: 20,
        about: 'Bookable Attractions',
        description: 'Dubai Beach',
        url:
            'https://www.appetiteforprofit.com/wp-content/uploads/2018/03/5-Famous-Dubai-Attractions-That-Shouldn.jpg'
    },
    {
        id: 2,
        currentPrice: 35,
        lastPrice: 39.2,
        currency: 'AED',
        stars: 4.9,
        ratings: 8533,
        cashback: 30,
        discount: 5,
        about: 'TOP OF THE World',
        description: 'Burj Al-Arab',
        url:
            'https://www.ourglobetrotters.com/wp-content/uploads/2021/01/Destinations-Dubai-Stopover-1-1024x683.jpg'
    },
    {
        id: 3,
        currentPrice: 148.8,
        lastPrice: 186,
        currency: 'AED',
        stars: 4.9,
        ratings: 9531,
        cashback: null,
        discount: 20,
        about: 'PHOTOSHOOTS AND TOURS',
        description: 'Burj Al Underground Aquirium',
        url:
            'https://www.ourglobetrotters.com/wp-content/uploads/2018/04/Dubai-Attractions-06.jpg'
    },
    {
        id: 4,
        currentPrice: 28,
        lastPrice: 35,
        currency: 'AED',
        stars: 4.8,
        ratings: 7270,
        cashback: null,
        discount: 20,
        about: 'SCENERY',
        description: 'Sheikh Zayed Road',
        url:
            'https://www.ourglobetrotters.com/wp-content/uploads/2018/04/Dubai-Attractions-03.jpg'
    },
    {
        id: 5,
        currentPrice: 68,
        lastPrice: 85,
        currency: 'AED',
        stars: 4.9,
        ratings: 9276,
        cashback: null,
        discount: 20,
        about: 'ARCHITECTURE',
        description: 'World of Adventure',
        url:
            'https://www.ourglobetrotters.com/wp-content/uploads/2018/02/IMG-Worlds-of-Adventure-Cartoon-Network-3.jpg'
    },
    {
        id: 6,
        currentPrice: 49.14,
        lastPrice: 56,
        currency: 'AED',
        stars: 4.9,
        ratings: 23518,
        cashback: null,
        discount: 20,
        about: 'ARCHITECTURE',
        description: 'Museum of The Future',
        url:
            'https://www.stackumbrella.com/wp-content/uploads/2021/07/museum-of-the-future-dubai-killa-design-buro-happold-arabic-calligraphy_dezeen_2364hero_0.jpg'
    },
    {
        id: 7,
        currentPrice: 57,
        lastPrice: null,
        currency: 'AED',
        stars: 5.0,
        ratings: 91189,
        cashback: null,
        about: 'ENTERTAINMENT SHOW',
        description: 'Madame Tussauds',
        url:
            'https://v7k3m3s6.rocketcdn.me/wp-content/uploads/2019/frankreich/fotospots-paris-01.jpg'
    },
    {
        id: 8,
        currentPrice: 288,
        lastPrice: 360,
        currency: 'AED',
        stars: 4.7,
        ratings: 49268,
        cashback: null,
        about: 'FUN',
        discount: 20,
        description: 'Let the kids explore all careers',
        url:
            'https://cdn.londonandpartners.com/asset/kidzania-london_children-enjoying-the-flying-activities-at-kidzania-image-courtesy-of-kidzania-london_f7b3cdefd705abd7ede5c38985af3d17.jpg'
    },
    {
        id: 9,
        currentPrice: 68,
        lastPrice: 85,
        currency: 'AED',
        stars: 5.0,
        ratings: 2979,
        cashback: null,
        discount: 20,
        about: 'ARCHITECTURE',
        description: 'Kalifa Mosque',
        url:
            'https://media1.popsugar-assets.com/files/thumbor/2QiSrlztNxTMb8vQ42j9l1DJw0M/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/07/19/435/n/38922834/tmp_SePuZi_e3c1eb35ab5d43c2_dubai-attractions-when-will-global-village-in-2020.jpg'
    },
    {
        id: 10,
        currentPrice: 33.75,
        lastPrice: 45,
        currency: 'AED',
        stars: 4.5,
        ratings: 93830,
        cashback: null,
        discount: 25,
        about: 'ARCHITECTURE',
        description: 'Palace De Corona',
        url:
            'https://www.touropia.com/gfx/d/tourist-attractions-in-paris/place_de_la_concorde.jpg'
    },
    {
        id: 11,
        currentPrice: 24,
        lastPrice: 30,
        currency: 'AED',
        stars: 4.8,
        ratings: 76663,
        cashback: null,
        discount: 50,
        about: 'AFTER HOURS',
        description: 'Tower Bridge',
        url:
            'https://upload.travelawaits.com/ta/uploads/2022/02/shutterstock_1898112376-800x800.jpg'
    },
    {
        id: 12,
        currentPrice: 28,
        lastPrice: 35,
        ccurrency: 'AED',
        stars: 4.7,
        ratings: 554,
        cashback: null,
        discount: 20,
        about: 'AFTER HOURS',
        description: `Mubarak Market`,
        url:
            'https://www.holidify.com/images/cmsuploads/compressed/dbg_image-01_20190726163234.jpg'
    },
    {
        id: 13,
        currentPrice: 40.5,
        lastPrice: 79,
        currency: 'AED',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 49,
        about: 'BROADWAY SHOW TICKETS',
        description: `Al Nesery Kali`,
        url:
            'https://www.holidify.com/images/cmsuploads/compressed/shutterstock_780556252_20190822124114_20190822124134.jpg'
    },
    {
        id: 14,
        currentPrice: 29,
        lastPrice: null,
        currency: 'AED',
        stars: 4.9,
        ratings: 99681,
        cashback: 10,
        about: 'BROADWAY TOURS',
        description: `Live in Sea`,
        url:
            'https://www.naplesfloridavacationhomes.com/wp-content/uploads/2016/10/Slipping_into_the_Sea_25278613801-scaled.jpg'
    },
    {
        id: 15,
        currentPrice: 69,
        lastPrice: 79,
        currency: 'AED',
        stars: 4.9,
        ratings: 87274,
        cashback: 10,
        discount: 46,
        about: 'BROADWAY TOURS',
        description: `Le Granduer`,
        url:
            'https://10mosttoday.com/wp-content/uploads/2013/08/Notre_Dame_de_Paris.jpg'
    },
    {
        id: 16,
        currentPrice: 99,
        lastPrice: null,
        currency: 'AED',
        stars: 5.0,
        ratings: 347,
        cashback: 10,
        about: 'BROADWAY TOURS',
        description: `Lego Land`,
        url:
            'https://www.holidify.com/images/cmsuploads/compressed/shutterstock_698094457_20190822134054_20190822134119.jpg'
    },
    {
        id: 17,
        currentPrice: 49.5,
        lastPrice: null,
        currency: 'AED',
        stars: 4.5,
        ratings: 557,
        cashback: 10,
        discount: 44,
        about: 'BROADWAY MUSICALS',
        description: `Mary Poppins`,
        url:
            'https://c.ststat.net/content/entimg/homepagemodule/mary-poppins-1060788053-300x300.jpg'
    },
    {
        id: 18,
        currentPrice: 49,
        lastPrice: 69,
        currency: 'AED',
        stars: 4.5,
        ratings: 445,
        cashback: 10,
        discount: 41,
        about: 'BROADWAY MUSICALS',
        description: `Beautiful: The Carole King Musical`,
        url:
            'https://cdn-imgix.headout.com/tour/956/TOUR-IMAGE/17818c73-4692-4e79-8b82-b44f646165f7-734-new-york-beautiful-the-carole-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
    },
    {
        id: 19,
        currentPrice: 55,
        lastPrice: 119,
        currency: 'AED',
        stars: 4.6,
        ratings: 4444,
        cashback: 10,
        discount: 53,
        about: 'BROADWAY MUSICALS',
        description: `Kinky Boots`,
        url:
            'https://cdn-imgix.headout.com/tour/651/TOUR-IMAGE/0dce4644-0607-4de8-8a4e-fb8e64ac0cdc-9.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
    },
    {
        id: 20,
        currentPrice: 89,
        lastPrice: null,
        currency: 'AED',
        stars: 4.6,
        ratings: 4561,
        cashback: 10,
        about: 'BROADWAY MUSICALS',
        description: `Wicked`,
        url:
            'https://cdn-imgix.headout.com/tour/647/TOUR-IMAGE/35c36ce6-af74-4fdb-a14f-a2f947f6c713-5.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
    },
    {
        id: 21,
        currentPrice: 59,
        lastPrice: 99,
        currency: 'AED',
        stars: 4.8,
        ratings: 55,
        cashback: null,
        discount: 40,
        about: 'BROADWAY MUSICALS',
        description: `Pretty Woman`,
        url:
            'https://cdn-imgix.headout.com/tour/16624/TOUR-IMAGE/ab386fd8-b118-423c-8c7a-c9e306235c5a-9213-new-york-pretty-woman-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
    },
    {
        id: 22,
        currentPrice: 51,
        lastPrice: 99.5,
        currency: 'AED',
        stars: 4.8,
        ratings: 2417,
        cashback: 48,
        about: 'BROADWAY MUSICALS',
        description: `& Juliet`,
        url:
            'https://c.ststat.net/content/entimg/homepagemodule/-juliet--748945379-300x300.jpg'
    },
    {
        id: 23,
        currentPrice: 69.5,
        lastPrice: 99.5,
        currency: 'AED',
        stars: 4.5,
        ratings: 3129,
        cashback: 43,
        about: 'BROADWAY MUSICALS',
        description: `Mean Girls`,
        url:
            'https://cdn-imgix.headout.com/tour/14470/TOUR-IMAGE/acc17ba6-70f0-48da-8bea-3b744aa489b2-7911-new-york-mean-girls-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
    }
];

// New York Collections Data

// Collection Data

const collectionsData = [
    {
        id: 1,
        description: 'Broadway Show Tickets',
        url:
            'https://cdn-imgix.headout.com/category/24/image/66000036-0523-4859-87b7-83d628b8843c-BroadwayShowTickets.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
    },
    {
        id: 2,
        description: 'City Walks',
        url:
            'https://cdn-imgix.headout.com/category/29/image/379e4fd4-3c83-43a4-b4e7-8422b0356867-NYCCityWalks.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
    },
    {
        id: 3,
        description: 'Foods and Drinks',
        url:
            'https://cdn-imgix.headout.com/category/26/image/d405cabb-965f-4c15-8828-4276755636a2-NYCFoodandDrinks.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
    },
    {
        id: 4,
        description: 'NYC Tours',
        url:
            'https://cdn-imgix.headout.com/category/119/image/7be3f1f2-2002-4466-b6e0-890952bc408e-NYCTours.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
    },
    {
        id: 5,
        description: 'Entertainment',
        url:
            'https://cdn-imgix.headout.com/category/334/image/e7b12e66-aa7e-4cfc-ac43-262c6ff87f7a-334.jpeg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
    },
    {
        id: 6,
        description: 'New York City Passes',
        url:
            'https://cdn-imgix.headout.com/category/1303/image/ed686051-e9b8-493c-b0a5-dc27c79a726c-1303.jpeg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
    },
    {
        id: 7,
        description: 'NYC 101',
        url:
            'https://cdn-imgix.headout.com/category/20/image/50dd86bd-0af8-4fef-a334-94a699d3a67c-NYC101.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
    },
    {
        id: 8,
        description: 'Cruises',
        url:
            'https://cdn-imgix.headout.com/category/21/image/f083df8f-c083-4766-b496-bd67cb1199ad-NYCCruises.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
    }
];

export default Dubai;

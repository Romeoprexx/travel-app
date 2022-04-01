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
import VeniceWeather from './VeniceWeather';







class Venice extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);


    }
    render() {
        return (
            <div className="new-york-wrapper">
                <Header
                    backgroundImagesData={backgroundImagesData}
                    history={this.props.history}
                    selectedCity={'Venice'}
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
                                <span className='shift'>esteri.it</span>
                            </button>
                        </div>
                    </div>
                    <div className='weather'>
                        <VeniceWeather />
                    </div>
                </div>

                <TopPicks className="tops" id="top"
                    headline={'Top Experiences in Venice'}
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
            'https://image3.mouthshut.com/images/imagesp/925021622s.jpg'
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
            'Stay up to date on the season’s hottest shows and score amazing discounts and offers for the most popular entertainment attraction in the world.',
        sectionData: [
            {
                id: 1,
                currentPrice: 62.5,
                currency: '€',
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
                currency: '€',
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
                currency: '€',
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
                currency: '€',
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
                currency: '€',
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
                currency: '€',
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
                currency: '€',
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
            'Get a taste of Venice’s truly global culture with these delicious food tours of Venice. Whether you’re looking for the best Venice local cuisine or fancy the best craft beer from the east coast, we have got the perfect tours for you.',
        sectionData: [
            {
                id: 1,
                currentPrice: 61,
                lastPrice: 70,
                currency: '€',
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
                currency: '€',
                stars: null,
                ratings: null,
                cashback: null,
                about: 'FOOD AND DRINKS',
                description: `Carmel Restaurant`,
                url:
                    'https://i.guim.co.uk/img/media/dfd063087775b876f73e1a8bf65971eb7b4f2f50/0_0_5616_3744/master/5616.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=9cf8edc85445273ee782aafe86ecc379'
            },
            {
                id: 3,
                currentPrice: 56,
                lastPrice: 64,
                currency: '€',
                stars: null,
                ratings: null,
                cashback: null,
                discount: 25,
                about: 'FOOD AND DRINKS',
                description: `El Dinero Restaurant`,
                url:
                    'https://s7d2.scene7.com/is/image/ritzcarlton/RCNAPLE_00230_conversion?$XlargeViewport100pct$'
            },
            {
                id: 4,
                currentPrice: 82,
                lastPrice: null,
                currency: '€',
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
                currency: '€',
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
                currency: '€',
                stars: null,
                ratings: null,
                cashback: null,
                discount: 12,
                about: 'FOOD AND DRINKS',
                description: `El Commande `,
                url:
                    'https://www.therooftopguide.com/rooftop-news/Bilder/rooftop-restaurants-rome-hotel-raphael.jpg'
            },
            {
                id: 7,
                currentPrice: 57,
                lastPrice: null,
                currency: '€',
                stars: 5.0,
                ratings: 88500,
                cashback: null,
                about: 'FOOD AND DRINKS',
                description: 'Baleen',
                url:
                    'https://www.paradisecoast.com/sites/default/files/styles/profile_page_1200/public/profiles/photos/baleen.jpg?itok=JPBRs7AY'
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
        headline: 'Venice Tours',
        description:
            'With a range of tours catering to different parts of the city, you get the chance to see some of the major attractions. Check out our list of Venice Tours to know more.',
        sectionData: [
            {
                id: 1,
                currentPrice: 33,
                lastPrice: 35,
                currency: '€',
                stars: 5.0,
                ratings: 30900,
                cashback: null,
                discount: 5,
                about: 'VENICE TOURS',
                description: 'The Tour',
                url:
                    'https://thedirtypassport.com/wp-content/uploads/2018/02/Venice-rialto-Bridge.jpg'
            },
            {
                id: 2,
                currentPrice: 86,
                lastPrice: 89,
                currency: '€',
                stars: 4.9,
                ratings: 1587,
                cashback: null,
                discount: 3,
                highlight: `SAVE UP To 50%`,
                about: 'VENICE EXPLORER PASS',
                description: 'Venice Explorer Pass - 3 Attractions',
                url:
                    'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/38/d3/49.jpg'
            },
            {
                id: 3,
                currentPrice: 134.4,
                lastPrice: 168,
                currency: '€',
                stars: null,
                ratings: null,
                cashback: null,
                discount: 20,
                about: 'VENICE TOURS',
                description: `Venice in a Day`,
                url:
                    'https://static.onecms.io/wp-content/uploads/sites/28/2021/05/10/rome-italy-lead-ROMETG0521.jpg'
            },
            {
                id: 4,
                currentPrice: 51,
                lastPrice: 54,
                currency: '€',
                stars: null,
                ratings: null,
                discount: 15,
                about: 'VENICE TOURS',
                description: `The Downtown Experience - The Ride`,
                url:
                    'https://www.fodors.com/wp-content/uploads/2019/11/HERO_Venice__GondolasandOtherFamousAttractions_iStock-1067544520.jpg'
            },
            {
                id: 5,
                currentPrice: 35,
                lastPrice: 38,
                currency: '€',
                stars: 4.4,
                ratings: 68901,
                cashback: 10,
                discount: 7,
                about: 'WORLD OBSERVATORY',
                description: `Venice Observatory Entrance Tickets`,
                url:
                    'https://media.timeout.com/images/105581784/image.jpg'
            },
            {
                id: 6,
                currentPrice: 124,
                lastPrice: null,
                currency: '€',
                stars: 4.8,
                ratings: 98906,
                cashback: null,
                discount: null,
                highlight: `SAVE UP TO $103`,
                about: 'THE VENICE PASS',
                description: `Venice Unlimited Attraction Pass - 1 Day`,
                url:
                    'https://cdn.londonandpartners.com/l-and-p/assets/business/45356-640x360-london_eye_hero.jpg'
            },
            {
                id: 7,
                currentPrice: 69,
                lastPrice: null,
                currency: '€',
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
        headline: 'Venice Museums and Hotels',
        description:
            'From museums that offer knowledge about art and history to five stars hotels, Venice attractions have it all. Have a look at these to know more.',
        sectionData: [
            {
                id: 1,
                currentPrice: 37,
                lastPrice: 39.2,
                currency: '€',
                stars: 4.9,
                ratings: 99533,
                cashback: 10,
                about: 'HOTELS',
                description: 'The Beau',
                url:
                    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/80/99/81/cove-inn-on-naples-bay.jpg?w=500&h=400&s=1'
            },
            {
                id: 2,
                currentPrice: 32,
                lastPrice: null,
                currency: '€',
                stars: 4.9,
                ratings: 87311,
                cashback: null,
                discount: 20,
                highlight: `NEW ARRIVAL`,
                about: 'MUESEUMS',
                description: `Constantine`,
                url:
                    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/18/5d/d5/children-s-museum-of.jpg?w=500&h=400&s=1'
            },
            {
                id: 3,
                currentPrice: 21.5,
                lastPrice: 23,
                currency: '€',
                stars: 5.0,
                ratings: 67331,
                cashback: null,
                discount: 6,
                about: 'MUSEUMS',
                description: `Venice Mueseum of Natural History`,
                url:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Roman_Museum_098.jpg/220px-Roman_Museum_098.jpg'
            },
            {
                id: 4,
                currentPrice: 25,
                lastPrice: null,
                currency: '€',
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
                currency: '€',
                stars: 4.8,
                ratings: 90660,
                cashback: null,
                about: 'MEUSEUMS',
                highlight: `BEST SELLER`,
                description: `Capitoline Meuseum Admission: Skip the Ticket Line`,
                url:
                    'https://i.pinimg.com/originals/5f/8d/8c/5f8d8c152f05b80140cbccf625819778.jpg'
            },
            {
                id: 6,
                currentPrice: 37,
                lastPrice: null,
                currency: '€',
                stars: 4.9,
                ratings: 79052,
                cashback: 10,
                discount: null,
                about: 'HOTELS',
                description: `Napoloen Hotel`,
                url:
                    'https://cf.bstatic.com/xdata/images/hotel/max300/87944004.jpg?k=165a71e01ced4522667f2ebf3d250a1ffb73441dd602401628c987d73c80bcdc&o=&hp=1'
            },
            {
                id: 7,
                currentPrice: 31,
                lastPrice: 38,
                currency: '€',
                stars: 5.0,
                ratings: 47600,
                cashback: null,
                discount: 18,
                about: 'HOTELS',
                description: `St Pancras Renaissance`,
                url:
                    'https://cdn.londonandpartners.com/asset/st-pancras-renaissance-hotel-london-st-pancras-renaissance-hotel-e6bd7be8b8e0454a0926ad9464dd53b8.jpg'
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
        currency: '€',
        stars: 4.6,
        ratings: 10564,
        cashback: 20,
        about: 'Bookable Attractions',
        description: 'The Colonel',
        url:
            'https://www.planetware.com/photos-large/I/italy-venice-st-marks-basilica-and-square-5.jpg'
    },
    {
        id: 2,
        currentPrice: 35,
        lastPrice: 39.2,
        currency: '€',
        stars: 4.9,
        ratings: 8533,
        cashback: 30,
        discount: 5,
        about: 'TOP OF THE World',
        description: 'Encato',
        url:
            'https://www.touropia.com/gfx/d/tourist-attractions-in-naples/castel_dell_ovo.jpg'
    },
    {
        id: 3,
        currentPrice: 148.8,
        lastPrice: 186,
        currency: '€',
        stars: 4.9,
        ratings: 9531,
        cashback: null,
        discount: 20,
        about: 'PHOTOSHOOTS AND TOURS',
        description: 'Bonaparte Estate',
        url:
            'https://assets.traveltriangle.com/blog/wp-content/uploads/2018/07/AmalfiIslandNaplesepb0310.jpg'
    },
    {
        id: 4,
        currentPrice: 28,
        lastPrice: 35,
        currency: '€',
        stars: 4.8,
        ratings: 7270,
        cashback: null,
        discount: 20,
        about: 'CABLE CAR',
        description: 'Glide high above the Thames',
        url:
            'https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/emirates-cable-car/emirates-airline-cable-car-640x360.jpg'
    },
    {
        id: 5,
        currentPrice: 68,
        lastPrice: 85,
        currency: '€',
        stars: 4.9,
        ratings: 9276,
        cashback: null,
        discount: 20,
        about: 'ARCHITECTURE',
        description: 'Take a tour with one of the Warders',
        url:
            'https://www.planetware.com/wpimages/2019/02/italy-naples-top-attractions-day-trips-herculaneum.jpg'
    },
    {
        id: 6,
        currentPrice: 49.14,
        lastPrice: 56,
        currency: '€',
        stars: 4.9,
        ratings: 23518,
        cashback: null,
        discount: 20,
        about: 'SEA LIFE',
        description: 'Get a taste of the deep blue sea at SEA.',
        url:
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F10%2Fbrooklyn-bridge-WALKNYC0919.jpg'
    },
    {
        id: 7,
        currentPrice: 57,
        lastPrice: null,
        currency: '€',
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
        currency: '€',
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
        currency: '€',
        stars: 5.0,
        ratings: 2979,
        cashback: null,
        discount: 20,
        about: 'ARCHITECTURE',
        description: 'St Thoma’s Cathedral',
        url:
            'https://cdn.londonandpartners.com/visit/london-organisations/st-pauls-cathedral/100230-640x360-st-pauls-640.jpg'
    },
    {
        id: 10,
        currentPrice: 33.75,
        lastPrice: 45,
        currency: '€',
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
        currency: '€',
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
        currency: '€',
        stars: 4.7,
        ratings: 554,
        cashback: null,
        discount: 20,
        about: 'AFTER HOURS',
        description: `Caesar Station`,
        url:
            'https://www.planetware.com/wpimages/2019/02/italy-naples-top-attractions-lungomare-castel-ovo.jpg'
    },
    {
        id: 13,
        currentPrice: 40.5,
        lastPrice: 79,
        currency: '€',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 49,
        about: 'BROADWAY SHOW TICKETS',
        description: `Castle de Cloepatra`,
        url:
            'https://www.planetware.com/photos-large/I/italy-naples-castel-nuovo.jpg'
    },
    {
        id: 14,
        currentPrice: 29,
        lastPrice: null,
        currency: '€',
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
        currency: '€',
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
        currency: '€',
        stars: 5.0,
        ratings: 347,
        cashback: 10,
        about: 'BROADWAY TOURS',
        description: `EL Patron Romeo`,
        url:
            'https://www.travfare.com/public/uploads/news-2.jpg'
    },
    {
        id: 17,
        currentPrice: 49.5,
        lastPrice: null,
        currency: '€',
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
        currency: '€',
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
        currency: '€',
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
        currency: '€',
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
        currency: '€',
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
        currency: '€',
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
        currency: '€',
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

export default Venice;

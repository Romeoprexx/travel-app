import React, { Component } from 'react';
import Header from './Header/index';
import TopPicks from './Picks';
import Download from './Download';
import Media from './Media';
import Footer from './footer';
import ExperienceCard from './ExperienceCard';
import './Styles/new-york.css';
import {RiVirusFill} from 'react-icons/ri'
import {GiWorld} from 'react-icons/gi'
import LasWeather from './LasWeather';


class LasVegas extends Component {
 
  componentDidMount() {
    window.scrollTo(0, 0);

   
  }
  render() {
    return (
      <div className="new-york-wrapper">
        <Header
          backgroundImagesData={backgroundImagesData}
          history={this.props.history}
          selectedCity={'Las Vegas'}
          navigationData={NewYorkNavigationData}
        />
        <div className='news'>
          <div className='newsWrapper'>
            <h3 className='headline text-center'>Travel News</h3>
            <div className='covid'>
               <span className='virus'><RiVirusFill className='fill'/> Covid-19</span>
            </div>
            <div className='covidMsg'>
              <h3 className='travel'>Travel restricted to this destination</h3>
              <p className='writeTravel'>Proof of COVID-19 vaccination and negative test required before departure</p>
              <button className='btn'><span><GiWorld className='filler' /></span>
                <span className='shift'>cdc.gov</span>
              </button>
            </div>
          </div>
          <div className='weather'>
              <LasWeather />
          </div>
        </div>

        <TopPicks className="tops" id="top"
          headline={'Top Experiences in Las Vegas'}
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
      'https://fullsuitcase.com/wp-content/uploads/2021/03/Best-things-to-do-in-Las-Vegas.jpg.webp'
  },
  {
    id: 3,
    url:
      'https://media.timeout.com/images/101516243/image.jpg'
  },
  {
    id: 4,
    url:
      'https://cdn-imgix-open.headout.com/desktop-flaps/ny-508-01.jpg?auto=compress&fm=webp&h=501&crop=faces&fit=min'
  },
  {
    id: 5,
    url:
      'https://cdn-imgix-open.headout.com/desktop-flaps/ny-attractions-01.jpg?auto=compress&fm=webp&h=501&crop=faces&fit=min'
  },
  {
    id: 6,
    url:
      'https://cdn.thecrazytourist.com/wp-content/uploads/2019/10/ccimage-shutterstock_149733929.jpg'
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
        currency: '$',
        stars: 4.6,
        ratings: 564,
        cashback: 10,
        about: 'BROADWAY MUSICALS',
        description: 'Aladdin',
        url:
          'https://cdn-imgix.headout.com/tour/638/TOUR-IMAGE/d8da7ef3-6be5-4ab9-a88e-66a1cf8b5126-2.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 2,
        currentPrice: 29,
        lastPrice: null,
        currency: '$',
        stars: 4.6,
        ratings: 681,
        cashback: 10,
        about: 'BROADWAY MUSICALS',
        description: `The Phantom of the Opera`,
        url:
          'https://cdn-imgix.headout.com/tour/652/TOUR-IMAGE/cd0fa708-27c2-4145-9fcf-14e84d910456-517-new-york-phantom-of-the-opera-00.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 3,
        currentPrice: 40.5,
        lastPrice: 79,
        currency: '$',
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
        currency: '$',
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
        currency: '$',
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
        currency: '$',
        stars: 4.6,
        ratings: 322,
        cashback: 15,
        discount: 50,
        about: 'BROADWAY MUSICALS',
        description: `Waitress`,
        url:
          'https://cdn-imgix.headout.com/tour/3559/TOUR-IMAGE/687350c0-17f9-424d-840a-4b02fad0a54e-2370-new-york-waitress-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 7,
        currentPrice: 69,
        lastPrice: 79,
        currency: '$',
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
      'Get a taste of Las Vegas’s truly global culture with these delicious food tours of Las Vegas. Whether you’re looking for the best Las Vegas local cuisine or fancy the best craft beer from the east coast, we have got the perfect tours for you.',
    sectionData: [
      {
        id: 1,
        currentPrice: 61,
        lastPrice: 70,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 15,
        about: 'FOOD AND DRINKS',
        description: 'The LINQ',
        url:
          'https://www.caesars.com/content/dam/empire/ilv/restaurants/casual/guy-fieri/1920x1080/guy-buger.jpg.transform/featured-img/image.jpg'
      },
      {
        id: 2,
        currentPrice: 60,
        lastPrice: null,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        about: 'FOOD AND DRINKS',
        description: `Charlies Restaurant Tour`,
        url:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/69/a5/7f/caption.jpg?w=500&h=400&s=1'
      },
      {
        id: 3,
        currentPrice: 56,
        lastPrice: 64,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 25,
        about: 'FOOD AND DRINKS',
        description: `Little London`,
        url:
          'https://hauteliving.com/wp-content/uploads/2020/01/the_mayfair_supper_club_main_dining_room-bellagio-las-vegas.jpg'
      },
      {
        id: 4,
        currentPrice: 82,
        lastPrice: null,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: 40,
        about: 'FOOD AND DRINKS',
        description: `The Original Vegas Pizza`,
        url:
          'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/15/97.jpg'
      },
      {
        id: 5,
        currentPrice: 50,
        lastPrice: null,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        about: 'FOOD AND DRINKS',
        description: `Jettsetter`,
        url:
          'https://www.jetsetter.com//uploads/sites/7/2018/04/FOO4LxhE.jpeg'
      },
      {
        id: 6,
        currentPrice: 72,
        lastPrice: 82,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 12,
        about: 'FOOD AND DRINKS',
        description: `Vegas Craft Beer Tour`,
        url:
          'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_391,q_75,w_588,x_350,y_172/v1/clients/newyorkstate/340b6d4f_c26d_4b54_b2d7_f9e7a1a96499_6ebfb5a2-2be2-4c80-b121-ae4a3d388392.jpg'
      },
      {
        id: 7,
        currentPrice: 57,
        lastPrice: null,
        currency: '$',
        stars: 5.0,
        ratings: 88500,
        cashback: null,
        about: 'FOOD AND DRINKS',
        description: 'Sabinor Restaurant',
        url:
          'https://media.cntraveler.com/photos/5d9f8be0360ec20008a28c53/master/w_2201,h_1467,c_limit/Partage-LasVegas-SabinOrr-2019-Interior_SabinOrr010_HDR_LowRes.jpg'
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
    headline: 'Las Vegas Tours',
    description:
      'With a range of tours catering to different parts of the city, you get the chance to see some of the major attractions. Check out our list of Las Vegas Tours to know more.',
    sectionData: [
      {
        id: 1,
        currentPrice: 33,
        lastPrice: 35,
        currency: '$',
        stars: 5.0,
        ratings: 30900,
        cashback: null,
        discount: 5,
        about: 'VEGAS TOURS',
        description: 'The Tour - The Ride',
        url:
          'https://cdn-imgix.headout.com/tour/667/TOUR-IMAGE/f654eef0-7306-4ec1-8f69-acad8e28ee80-537-new-york-the-tour---the-ride-02.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 2,
        currentPrice: 86,
        lastPrice: 89,
        currency: '$',
        stars: 4.9,
        ratings: 1587,
        cashback: null,
        discount: 3,
        highlight: `SAVE UP To 50%`,
        about: 'LAS VEGAS EXPLORER PASS',
        description: 'Las Vegas Explorer Pass - 3 Attractions',
        url:
          'https://magazine.northeast.aaa.com/wp-content/uploads/2018/04/top-10-nyc-tours-1.jpg'
      },
      {
        id: 3,
        currentPrice: 134.4,
        lastPrice: 168,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 20,
        about: 'VEGAS TOURS',
        description: `Las Vegas in a Day`,
        url:
          'https://cdn-imgix.headout.com/tour/16150/TOUR-IMAGE/e00a5d3a-a3ec-4f7d-8fd8-de95beae9af5-8964-new-york-in-a-day-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 4,
        currentPrice: 51,
        lastPrice: 54,
        currency: '$',
        stars: null,
        ratings: null,
        discount: 15,
        about: 'VEGAS TOURS',
        description: `The Downtown Experience - The Ride`,
        url:
          'https://res.klook.com/image/upload/v1644564525/blog/twjrokr8a3szvtujnwcw.jpg'
      },
      {
        id: 5,
        currentPrice: 35,
        lastPrice: 38,
        currency: '$',
        stars: 4.4,
        ratings: 68901,
        cashback: 10,
        discount: 7,
        about: 'ONE WORLD OBSERVATORY',
        description: `One World Observatory Entrance Tickets`,
        url:
          'https://realnewyorktours.com/wp-content/uploads/2019/12/RealNewYorkTours_WalkingTourofLowerManhattan_MainImage-3-605x465.jpg'
      },
      {
        id: 6,
        currentPrice: 124,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 98906,
        cashback: null,
        discount: null,
        highlight: `SAVE UP TO $103`,
        about: 'THE VEGAS PASS',
        description: `Las Vegas Unlimited Attraction Pass - 1 Day`,
        url:
          'https://cdn-imgix.headout.com/tour/1816/TOUR-IMAGE/5d6da19b-0a01-4609-8fc2-6919972d9dcd-1294-new-york-1-day-new-york-pass-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 7,
        currentPrice: 69,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 88761,
        cashback: 5,
        discount: null,
        about: 'The SIGHTSEEING PASS',
        description: `FreeStyle Attraction Pass with Hop-On Hop-Off Cruise`,
        url:
          'https://cdn-imgix.headout.com/tour/16543/TOUR-IMAGE/4a07f498-91fd-4bad-b329-8d0a0efda2be-9173-new-york-freestyle--cruise-pass-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
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
    headline: 'Las Vegas Museums and Hotels',
    description:
      'From museums that offer knowledge about art and history to five stars hotels, Las Vegas attractions have it all. Have a look at these to know more.',
    sectionData: [
      {
        id: 1,
        currentPrice: 37,
        lastPrice: 39.2,
        currency: '$',
        stars: 4.9,
        ratings: 99533,
        cashback: 10,
        about: 'HOTELs',
        description: 'ST Regis',
        url:
          'https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2020/12/THE-ST-REGIS-NEW-YORK.jpg?ssl=1'
      },
      {
        id: 2,
        currentPrice: 32,
        lastPrice: null,
        currency: '$',
        stars: 4.9,
        ratings: 87311,
        cashback: null,
        discount: 20,
        highlight: `NEW ARRIVAL`,
        about: 'MUESEUMS',
        description: `Sahara Museum`,
        url:
          'https://pyxis.nymag.com/v1/imgs/174/448/49f6fd3ba90afcd91714c9b5f60c703aff-Neon-Museum-body-1340x788.jpg'
      },
      {
        id: 3,
        currentPrice: 21.5,
        lastPrice: 23,
        currency: '$',
        stars: 5.0,
        ratings: 67331,
        cashback: null,
        discount: 6,
        about: 'MUSEUMS',
        description: `American Mueseum of Natural History`,
        url:
          'https://cdn-imgix.headout.com/tour/881/image/1-american-museum-of-natural-history-dinasouredit.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 4,
        currentPrice: 25,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 34448,
        cashback: null,
        about: 'MUESUMS',
        highlight: `BEST SELLER`,
        description: `Skip the Line Tickets to Meuseum of Modern Art (MoMA)`,
        url:
          'https://cdn-imgix.headout.com/tour/729/TOUR-IMAGE/d796f45b-bc23-44ea-8a1f-533b03cdf3b2-598-new-york-museum-of-modern-art-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 5,
        currentPrice: 26,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 90660,
        cashback: null,
        about: 'MEUSEUMS',
        highlight: `BEST SELLER`,
        description: `Lexur Memorial & Meuseum Admission: Skip the Ticket Line`,
        url:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Las_Vegas_Luxor_04.jpg/1200px-Las_Vegas_Luxor_04.jpg'
      },
      {
        id: 6,
        currentPrice: 37,
        lastPrice: null,
        currency: '$',
        stars: 4.9,
        ratings: 79052,
        cashback: 10,
        discount: null,
        about: 'HOTELS',
        description: `Executive Hotel Le Soleil`,
        url:
          'https://www.executivehotels.net/new-york-luxury-hotel/images/main-banner.jpg'
      },
      {
        id: 7,
        currentPrice: 31,
        lastPrice: 38,
        currency: '$',
        stars: 5.0,
        ratings: 47600,
        cashback: null,
        discount: 18,
        about: 'HOTELS',
        description: `Roquois`,
        url:
          'https://media.timeout.com/images/103587500/750/562/image.jpg'
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
    currentPrice: 65.5,
    currency: '$',
    stars: 4.6,
    ratings: 10564,
    cashback: 20,
    about: 'BROADWAY MUSICALS',
    description: 'Aladdin',
    url:
      'https://cdn-imgix.headout.com/tour/638/TOUR-IMAGE/d8da7ef3-6be5-4ab9-a88e-66a1cf8b5126-2.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 2,
    currentPrice: 35,
    lastPrice: 39.2,
    currency: '$',
    stars: 4.9,
    ratings: 8533,
    cashback: 30,
    discount: 5,
    about: 'TOP OF THE ROCK',
    description: 'Top of the Rock Observation Deck',
    url:
      'https://cdn-imgix.headout.com/tour/751/TOUR-IMAGE/5a1a9e72-a128-4912-90d5-b2c78e83ee42-ny-attractions-top-of-the-rock-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 3,
    currentPrice: 148.8,
    lastPrice: 186,
    currency: '$',
    stars: 4.9,
    ratings: 9531,
    cashback: null,
    discount: 20,
    about: 'PHOTOSHOOTS AND TOURS',
    description: 'Best of New Las Vegas Tours',
    url:
      'https://assets3.thrillist.com/v1/image/2680204/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70'
  },
  {
    id: 4,
    currentPrice: 28,
    lastPrice: 35,
    currency: '$',
    stars: 4.8,
    ratings: 7270,
    cashback: null,
    discount: 20,
    about: 'PAINTING',
    description: 'Las Vegas Street Art Tour',
    url:
      'https://media.istockphoto.com/photos/hipster-male-walking-next-to-wall-of-graffiti-in-brooklyn-picture-id477339612?k=20&m=477339612&s=612x612&w=0&h=_E38XyTkK2ftv5YohnBWO-0XVk1nB1ppcqzb5cmWrhQ='
  },
  {
    id: 5,
    currentPrice: 68,
    lastPrice: 85,
    currency: '$',
    stars: 4.9,
    ratings: 276,
    cashback: null,
    discount: 20,
    about: 'ARCHITECTURE',
    description: 'Las Vegas Casino Tour',
    url:
      'https://fullsuitcase.com/wp-content/uploads/2021/03/Best-things-to-do-in-Las-Vegas.jpg.webp'
  },
  {
    id: 6,
    currentPrice: 49.14,
    lastPrice: 56,
    currency: '$',
    stars: 4.9,
    ratings: 18,
    cashback: null,
    discount: 20,
    about: 'BOAT TOUR',
    description: 'City Boat Tour',
    url:
      'https://www.touropia.com/gfx/d/tourist-attractions-in-las-vegas/the_venetian_las_vegas.jpg'
  },
  {
    id: 7,
    currentPrice: 57,
    lastPrice: null,
    currency: '$',
    stars: 5.0,
    ratings: 1189,
    cashback: null,
    about: 'LAS VEGAS WALKING TOURS',
    description: 'Chelsea Market Food and Culture Walking Tour',
    url:
      'https://cdn-imgix.headout.com/tour/2906/TOUR-IMAGE/4414a92f-1570-4b10-b05d-deaa5737d7f8-2005-ChelseaFoodTour-1-2-.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 8,
    currentPrice: 288,
    lastPrice: 360,
    currency: '$',
    stars: 4.7,
    ratings: 4268,
    cashback: null,
    about: 'ARCHITECTURE',
    discount: 20,
    description: 'Dennys Tour',
    url:
      'https://thumbs.dreamstime.com/b/las-vegas-strip-buildings-attractions-nevada-attractions-white-castle-las-vegas-city-street-view-nevada-las-vegas-strip-122871843.jpg'
  },
  {
    id: 9,
    currentPrice: 68,
    lastPrice: 85,
    currency: '$',
    stars: 5.0,
    ratings: 2979,
    cashback: null,
    discount: 20,
    about: 'CRUISES',
    description: 'Las Vegas Sightseeing Boat Tour',
    url:
      'https://media.timeout.com/images/103232470/image.jpg'
  },
  {
    id: 10,
    currentPrice: 33.75,
    lastPrice: 45,
    currency: '$',
    stars: 4.5,
    ratings: 3830,
    cashback: null,
    discount: 25,
    about: 'FUN',
    description: 'Sunrise Yoga',
    url:
      'https://ladyboss.asia/wp-content/uploads/2016/09/10-simple-yoga-poses-1170x658.jpg'
  },
  {
    id: 11,
    currentPrice: 24,
    lastPrice: 30,
    currency: '$',
    stars: 4.8,
    ratings: 16663,
    cashback: null,
    discount: 50,
    about: 'AFTER HOURS',
    description: 'Downtown Street Show',
    url:
      'https://lavish-964d.kxcdn.com/news/wp-content/uploads/2018/12/Fremont-Street-1.jpg'
  },
  {
    id: 12,
    currentPrice: 28,
    lastPrice: 35,
    currency: '$',
    stars: 4.7,
    ratings: 554,
    cashback: null,
    discount: 20,
    about: 'AFTER HOURS',
    description: `Open Bar Henny N' Paint`,
    url:
      'https://cdn-imgix.headout.com/tour/17181/TOUR-IMAGE/0f97d532-bd32-4c71-a219-ee477daf1a53-9464-new-york-open-bar-henny-and-paint-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 13,
    currentPrice: 40.5,
    lastPrice: 79,
    currency: '$',
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
    id: 14,
    currentPrice: 29,
    lastPrice: null,
    currency: '$',
    stars: 4.6,
    ratings: 681,
    cashback: 10,
    about: 'BROADWAY MUSICALS',
    description: `The Phantom of the Opera`,
    url:
      'https://cdn-imgix.headout.com/tour/652/TOUR-IMAGE/cd0fa708-27c2-4145-9fcf-14e84d910456-517-new-york-phantom-of-the-opera-00.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 15,
    currentPrice: 69,
    lastPrice: 79,
    currency: '$',
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
    id: 16,
    currentPrice: 99,
    lastPrice: null,
    currency: '$',
    stars: 4.7,
    ratings: 347,
    cashback: 10,
    about: 'BROADWAY MUSICALS',
    description: `The Lion King`,
    url:
      'https://cdn-imgix.headout.com/tour/637/TOUR-IMAGE/0442ebf8-8ad3-4e1b-bb49-3b7dde81eb35-507-new-york-the-lion-king-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 17,
    currentPrice: 49.5,
    lastPrice: null,
    currency: '$',
    stars: 4.5,
    ratings: 557,
    cashback: 10,
    discount: 44,
    about: 'BROADWAY MUSICALS',
    description: `Chicago`,
    url:
      'https://cdn-imgix.headout.com/tour/654/TOUR-IMAGE/41c27ecf-f84a-47ff-9517-fe88303ac5e8-1.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 18,
    currentPrice: 49,
    lastPrice: 69,
    currency: '$',
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
    currency: '$',
    stars: 4.6,
    ratings: 444,
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
    currency: '$',
    stars: 4.6,
    ratings: 561,
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
    currency: '$',
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
    currency: '$',
    stars: 4.8,
    ratings: 17,
    cashback: 48,
    about: 'BROADWAY MUSICALS',
    description: `Frozen - Broadway Week Discount`,
    url:
      'https://cdn-imgix.headout.com/tour/17069/TOUR-IMAGE/2f568870-80a6-4be1-84c4-3b6efe8df5f1-214d0dcf-6b0a-4d8d-90f0-11d601678377-7909-new-york-frozen-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 23,
    currentPrice: 69.5,
    lastPrice: 99.5,
    currency: '$',
    stars: 4.5,
    ratings: 129,
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

export default LasVegas;

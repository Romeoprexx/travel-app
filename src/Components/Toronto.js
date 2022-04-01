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
import TorontoWeather from './TorontoW';




class Toronto extends Component {
 
  componentDidMount() {
    window.scrollTo(0, 0);

   
  }
  render() {
    return (
      <div className="new-york-wrapper">
        <Header
          backgroundImagesData={backgroundImagesData}
          history={this.props.history}
          selectedCity={'Toronto'}
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
              <p className='writeTravel'>Proof of COVID-19 vaccination required before departure</p>
              <button className='btn'><span><GiWorld className='filler' /></span>
                <span className='shift'>travel.gc.ca</span>
              </button>
            </div>
          </div>
          <div className='weather'>
              <TorontoWeather />
          </div>
        </div>

        <TopPicks className="tops" id="top"
          headline={'Top Experiences in Toronto'}
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
          'https://static.onecms.io/wp-content/uploads/sites/20/2021/09/30/Broadway-Aladdin.jpg'
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
          'https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_768/v1614773807/post_images/new-york-1/lion-king.jpg'
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
      'Get a taste of Toronto’s truly global culture with these delicious food tours of Toronto. Whether you’re looking for the best Toronto local cuisine or fancy the best craft beer from the east coast, we have got the perfect tours for you.',
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
        description: 'Rickett Family',
        url:
          'https://www.sydney.com/sites/sydney/files/styles/landscape_992x558/public/2021-01/ATDW%20-%20Bennelong%20-%20Img%20Credit%20Brett%20Stevens%20-%20Fink%20Group_0.jpeg?itok=-5-PgzqU'
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
        description: `Saudi Media`,
        url:
          'https://travel.mqcdn.com/mapquest/travel/wp-content/uploads/2020/10/Untitled-design-114.jpg'
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
        description: `Barstool Bar`,
        url:
          'https://media.cntraveler.com/photos/5cd39d0065d95549ec194644/master/w_4000,h_2667,c_limit/Blu-Bar-&-Grill_2019__DSC3535-1-Favourite-b.jpg'
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
        description: `The Original Pizza`,
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
        description: `Liberal`,
        url:
          'https://s1.at.atcdn.net/wp-content/uploads/2019/03/glebe2.jpg'
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
        description: `Tadic Restaurant`,
        url:
          'https://www.luxurytravelmag.com.au/wp-content/uploads/2019/03/Bopp-Tone_Restaurant_18.jpg'
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
        description: 'Hen Hang Restaurant',
        url:
          'https://www.sydneycafes.com.au/wp-content/uploads/2016/11/Sydneys-20-Best-Restaurants.jpg'
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
    headline: 'Toronto Tours',
    description:
      'With a range of tours catering to different parts of the city, you get the chance to see some of the major attractions. Check out our list of Toronto Tours to know more.',
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
        about: 'TORONTO TOURS',
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
        about: 'TORONTO EXPLORER PASS',
        description: 'Toronto Explorer Pass - 3 Attractions',
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
        about: 'TORONTO TOURS',
        description: `Toronto in a Day`,
        url:
          'https://www.planetware.com/wpimages/2018/11/canada-ontario-toronto-attractions-city-hall-nathan-phillips-square-night.jpg'
      },
      {
        id: 4,
        currentPrice: 51,
        lastPrice: 54,
        currency: '$',
        stars: null,
        ratings: null,
        discount: 15,
        about: 'TORONTO TOURS',
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
        about: 'THE TORONTO PASS',
        description: `Toronto Unlimited Attraction Pass - 1 Day`,
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
    headline: 'Toronto Museums and Hotels',
    description:
      'From museums that offer knowledge about art and history to five stars hotels, Toronto attractions have it all. Have a look at these to know more.',
    sectionData: [
      {
        id: 1,
        currentPrice: 37,
        lastPrice: 39.2,
        currency: '$',
        stars: 4.9,
        ratings: 99533,
        cashback: 10,
        about: 'HOTELS',
        description: 'Hilton',
        url:
          'https://media-cdn.tripadvisor.com/media/photo-s/1d/79/27/87/hilton-toronto.jpg'
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
        description: `Toronto Museum`,
        url:
          'https://dj91ptodl6lds.cloudfront.net/2018/01/15090407/Photo-credit-Art-Gallery-of-New-South-Wales-Sydney.-Photo-AGNSW-960x504.jpg'
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
        description: `Toronto Mueseum of Natural History`,
        url:
          'https://mgnsw.org.au/wp-content/uploads/2013/07/AM-Westpac-Long-Gallery-small.jpg'
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
          'https://media.cntraveler.com/photos/5a7e199817acc04e56ef1686/master/w_2362,h_1575,c_limit/Museum-of-Sydney_2018_First-Fleet-Ship-Models-Photograph-%C2%A9-Paolo-Busato.jpg'
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
        description: `Toronto Memorial & Meuseum Admission: Skip the Ticket Line`,
        url:
          'https://www.create.nsw.gov.au/wp-content/uploads/2020/02/Artists-impression-of-exhibition-space-Australian-Museum.-Image-copyright-Australian-Museum-440x293-1.jpg'
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
        description: `Crowne Plaza`,
        url:
          'https://digital.ihg.com/is/image/ihg/crowne-plaza-toronto-6840356319-4x3?qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0'
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
        description: `King Edwards`,
        url:
          'https://www.omnihotels.com/-/media/images/hotels/tordtn/digex/carousel/tordtn_1_2880x1870.jpg'
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
      'https://dj1gd759w71sg.cloudfront.net/content/uploads/2021/10/Aladdin_website_2048x768_10.25.21-NP.jpg'
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
    description: 'Ripley Aquarium of Canada',
    url:
      'https://media.timeout.com/images/103116420/image.jpg'
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
    about: 'PARK',
    description: 'Luna Park',
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/03.01.2009-luna_entrance2.jpg/350px-03.01.2009-luna_entrance2.jpg'
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
    description: 'Toronto Tour',
    url:
      'https://media.timeout.com/images/102873865/image.jpg'
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
    description: 'Vbio Boat Tour',
    url:
      'https://images.ctfassets.net/gxwgulxyxxy1/6IttHw5dR9XkFDrg52ixDH/dafb7ccdf6ccf484fe552ec616a173ae/toronto-1426205_1920.jpg?fm=jpg&fl=progressive&w=680&q=100'
  },
  {
    id: 7,
    currentPrice: 57,
    lastPrice: null,
    currency: '$',
    stars: 5.0,
    ratings: 1189,
    cashback: null,
    about: 'RIDING TOURS',
    description: 'Chezem Cable Ride',
    url:
      'https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cms/places-to-visit-in-sydney-taronga-1550482591-735X412.jpg'
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
      'https://www.planetware.com/photos-large/CDN/canada-toronto-rogers-center.jpg'
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
    description: 'Toronto Sightseeing Boat Tour',
    url:
      'https://media.timeout.com/images/103648790/image.jpg'
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
    description: 'Niagara Falls',
    url:
      'https://www.toniagara.com/blog/wp-content/uploads/2019/06/niagara-bus-tours-niagara-bus-tours-from-toronto.jpg'
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
    description: 'Clifton Hills',
    url:
      'https://www.cliftonhill.com/sites/default/files/styles/home_slide/public/2020-12/street-scape-bp.jpg?itok=OtadEKa4'
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
    description: `Movieland`,
    url:
      'https://www.cliftonhill.com/sites/default/files/styles/slider/public/page/primary-images/movieland-wax-museum_0.jpg?itok=g6T4cW2y'
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
    description: `Hamilton`,
    url:
      'https://www.gannett-cdn.com/-mm-/ba67ef18d53ccf1ea23d37bc405998b4ee3ee380/c=961-1281-4595-3334/local/-/media/2016/03/28/USATODAY/USATODAY/635947804098414743-XXX-IMG-HAMILTON-CREDIT-JOAN-1-1-QNCK5FRG-78029476.JPG'
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

export default Toronto;

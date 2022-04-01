import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Left, Right } from './Arrows';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Styles/top-cities.css';

class TopCities extends Component {
  render() {
    return (
      <div>
        <div className="top-cities-wrapper" id='topcities'>
          <h1>World's Top Destinations</h1>
          <hr
            style={{
              backgroundColor: '#ffbb58',
              width: '75px',
              height: '2px',
              border: 'none',
              marginTop: '0px',
              marginLeft: '0px',
              marginBottom: '20px'
            }}
          />
          <div className="top-cities-carousel-wrap">
            <CitySlider />
          </div>
          <hr
            style={{
              height: '1px',
              color: '#e7e7e7',
              borderTop: 'none',
              borderLeft: 'none'
            }}
          />
        </div>
        <hr className="section-divide-hr" />
      </div>
    );
  }
}

class CitySlider extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <Right />,
      prevArrow: <Left />
    };
    return (
      <Slider {...settings}>
        {topCitiesData &&
          topCitiesData.map(({ id, city, url, description, route }) => (
            <Link
              to={{ pathname: `/cities/${route}` }}
              key={id}
              className="link"
            >
              <CityCard city={city} url={url} description={description} />
            </Link>
          ))}
      </Slider>
    );
  }
}

class CityCard extends Component {
  render() {
    const url = `url(${this.props.url})`;
    return (
      <div className="city-card-wrapper">
        <div className="city-card">
          <div
            className="city-card-img"
            style={{
              backgroundImage: url
            }}
          />
          <div className="city-details">
            <div id="triangle" />
            <p style={{color: 'black', fontFamily: 'Benne', fontSize: '18px', fontWeight: 'bold'}}>{this.props.city}</p>
            <div id="city-hidden">
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const topCitiesData = [
  {
    id: 1,
    city: 'New York',
    route: 'new-york',
    description: 'The City of Dreams',
    url:
      'https://www.beworldready.ca/wp-content/uploads/2019/03/new_york_1.jpg'
  },
  {
    id: 2,
    city: 'Las Vegas',
    route: 'las-vegas',
    description: "Experience the Strip",
    url:
      'https://images.ctfassets.net/rxqefefl3t5b/5QX5qG3dBxzfT3rwyTmVIb/ff5224e4d76af8b9021fb409cf2641e9/shutterstock_1499600606_copy.jpg?fl=progressive&q=80'
  },
  {
    id: 3,
    city: 'Rome',
    route: 'rome',
    description: 'Roam the eternal city',
    url:
      'https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg'
  },
  {
    id: 4,
    city: 'Paris',
    route: 'paris',
    description: "City of light",
    url:
      'https://cdn-imgix.headout.com/cities/paris/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 5,
    city: 'London',
    route: 'london',
    description: 'Explore the Town',
    url:
      'https://www.fodors.com/assets/destinations/2869/tower-bridge-london-england_980x650.jpg'
  },
  {
    id: 6,
    city: 'Dubai',
    route: 'dubai',
    description: 'An Oasis like no other',
    url:
      'https://cdn.cnn.com/cnnnext/dam/assets/200924183413-dubai-9-1-full-169.jpg'
  },
  {
    id: 7,
    city: 'Barcelona',
    route: 'barcelona',
    description: 'Hacer Peunte a Catalunya',
    url:
      'https://static.amazon.jobs/locations/171/thumbnails/FC-Barcelona-Spain_image.jpg?1481893206'
  },
  {
    id: 8,
    city: 'Madrid',
    route: 'madrid',
    description: 'Discover the heart of Spain',
    url:
      'https://cdn-imgix.headout.com/cities/madrid/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 9,
    city: 'Singapore',
    route: 'singapore',
    description: 'The Lion City',
    url:
      'https://cdn-imgix.headout.com/cities/singapore/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 10,
    city: 'Venice',
    route: 'venice',
    description: 'Enjoy the City of Canals',
    url:
      'https://thenomadvisor.com/wp-content/uploads/2020/11/wheretostayinvenice.jpg'
  },
  {
    id: 11,
    city: 'Milan',
    route: 'milan',
    description: 'El Milano',
    url:
      'https://cdn-imgix.headout.com/cities/milan/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 12,
    city: 'Naples',
    route: 'naples',
    description: 'The New City',
    url:
      'https://www.wantedinrome.com/i/preview/storage/uploads/2022/01/naples-only-italian-destination-on-CNN-travel-wish-list-2022.jpg'
  },
  {
    id: 13,
    city: 'Budapest',
    route: 'budapest',
    description: 'Pearl of the Danube',
    url:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/36/37/32/caption.jpg?w=700&h=500&s=1'
  },
  {
    id: 14,
    city: 'Edinburg',
    route: 'edinburg',
    description: 'Gaelic Dun Eideann',
    url:
      'https://a.cdn-hotels.com/gdcs/production73/d1723/35b8f7e3-14c4-4d53-ae2f-5f7f6adb6aac.jpg'
  },
  {
    id: 15,
    city: 'Florence',
    route: 'florence',
    description: 'Jewel of the Renaissance',
    url:
      'https://cdn-imgix.headout.com/cities/florence/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {  id: 16,
    city: 'Sydney',
    route: 'sydney',
    description: 'City of Opera',
    url:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/3b/95/61/photo2jpg.jpg?w=600&h=400&s=1'
  },
  {  id: 17,
    city: 'Toronto',
    route: 'toronto',
    description: 'Enjoy and have fun in the City',
    url:
      'https://cdn.britannica.com/70/73470-050-25595ED9/Ice-skaters-park-Toronto.jpg'
  },
  {  id: 18,
    city: 'Manila',
    route: 'manila',
    description: 'Golden Bracelet',
    url:
      'https://www.cityranking.co/wp-content/uploads/2020/04/Living-in-Manilla.jpg'
  },
  {  id: 19,
    city: 'Berlin',
    route: 'berlin',
    description: 'The Edgy Vibe',
    url:
      'https://study-eu.s3.amazonaws.com/uploads/image/path/171/wide_fullhd_14798621115_bcba1d1e7b_o.jpg'
  },
  {  id: 20,
    city: 'Bermuda',
    route: 'bermuda',
    description: 'Islets and Rocks',
    url:
      'https://media.gq.com/photos/59444590e8e94c21c8ef4d35/1:1/w_2641,h_2641,c_limit/bermuda-travel-guide-americas-cup.jpg'
  }
];

export default TopCities;

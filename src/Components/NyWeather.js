import React from 'react'
import ReactWeather, { useOpenWeather } from 'react-open-weather';

function NyWeather() {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: 'be2f2d5cbf936d19e4399e30eff152e9',
        lat: '40.730610',
        lon: '-73.935242',
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
      });
  return (
    <div>
        <ReactWeather 
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          locationLabel="New York"
          unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
          showForecast
        
        
        />
    </div>
  )
}

export default NyWeather
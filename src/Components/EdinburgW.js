import React from 'react'
import ReactWeather, { useOpenWeather } from 'react-open-weather';

function EdinburgWeather() {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: 'be2f2d5cbf936d19e4399e30eff152e9',
        lat: '55.9533',
        lon: '3.1883',
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
          locationLabel="Edinburgh"
          unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
          showForecast
        
        
        />
    </div>
  )
}

export default EdinburgWeather
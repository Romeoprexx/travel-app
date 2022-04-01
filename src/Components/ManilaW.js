import React from 'react'
import ReactWeather, { useOpenWeather } from 'react-open-weather';

function ManilaWeather() {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: 'be2f2d5cbf936d19e4399e30eff152e9',
        lat: '14.5995',
        lon: '120.9842',
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
          locationLabel="Manila"
          unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
          showForecast
        
        
        />
    </div>
  )
}

export default ManilaWeather;
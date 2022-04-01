import React from 'react'
import ReactWeather, { useOpenWeather } from 'react-open-weather';

function BudapestWeather() {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: 'be2f2d5cbf936d19e4399e30eff152e9',
        lat: '47.4979',
        lon: '19.0402',
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
          locationLabel="Budapest"
          unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
          showForecast
        
        
        />
    </div>
  )
}

export default BudapestWeather
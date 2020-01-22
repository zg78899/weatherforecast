import React from 'react';
import './WeatherContext.css';
import { withRouter } from 'react-router-dom';
import uuid from 'uuid';

const WeatherContext = (props) => {
  console.log(props)
  return (
    <>
      <button onClick={() => props.history.push('/')}>Go Back</button>
      
      <div className="weather-name">
        <div>
          제목
      </div>
        <div className="country">
          <ul className="country-name">
            {props.token.map(city=><li key={uuid.v4()} >{city}</li>)}
          </ul>
        </div>
      </div>
    </>
  )
};
export default withRouter(WeatherContext);
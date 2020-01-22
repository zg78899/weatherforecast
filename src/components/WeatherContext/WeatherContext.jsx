import React from 'react';
import './WeatherContext.css';
import { withRouter } from 'react-router-dom';

const WeatherContext = (props) => {
  return (
    <>
      <button onClick={() => props.history.push('/')}>Go Back</button>
      <div className="weather-name">
        <div>
          제목
      </div>
        <div className="country">
          <ul className="country-name">
            <li>
            </li>
            <li>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
};
export default withRouter(WeatherContext);
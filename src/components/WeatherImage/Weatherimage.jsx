import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { Col } from 'antd';
import './WeatherImage.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const WeatherImage = () => {
  const [state, setState] = useState({});
  const [temp, setTemp] = useState();
  const [tempMin, setMin] = useState();
  const [tempMax, setMax] = useState();


  useEffect(() => {
    getData();
    getData1();
  }, []);

  const getData = async () => {
    const appid = 'e809a87e6cd4872c422d92a2f10d9973'
    const q = 'london';

    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`);
    console.log(data);
    console.log(data.weather[0].main);
    console.log(data.main.temp);
    setState({
      main: data.main
    });
    setTemp(data.main.temp);
    setMin(data.main.temp_min);
    setMax(data.main.temp_max);
  }

  const getData1 = async () => {
    const appid = 'e809a87e6cd4872c422d92a2f10d9973'
    const q = 'london';

    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${q}&appid=${appid}`);
    console.log(data);
  }

  console.log(state)

  return (

    <div className="weather">
      <div className="Temporary">
        <div className="weather-nowTemp"><span className="TempIcon"></span>{temp}
        </div>
        <div className="weather-minTemp"><span className="MinTemp"></span>{tempMin}
        </div>
        <div className="weather-max-Temp"><span className="MaxTemp"></span>{tempMax}
        </div>
      </div>
      <div className="weather-today">
      </div>

    </div>
  )
}
export default withRouter(WeatherImage);
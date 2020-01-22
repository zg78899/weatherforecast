import React, { useState, useEffect } from 'react';
import './WeatherImage.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import {useWeatherRecord} from '../Reducer';
import { FaTemperatureLow, FaTemperatureHigh } from 'react-icons/fa';

const WeatherImage = () => {

  const { state: stateR } = useWeatherRecord();
  const [state, setState] = useState({});

  const [temp, setTemp] = useState();
  const [tempMin, setMin] = useState();
  const [tempMax, setMax] = useState();

  console.log(stateR)
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

    setTemp((data.main.temp - 273.15).toFixed(2));
    setMin((data.main.temp_min - 273.15).toFixed(2));
    setMax((data.main.temp_max - 273.15).toFixed(2));
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
        <div className="weather-nowTemp"><span className="TempIcon"></span>오늘의 현재 온도 :{temp}
        </div>
        <div className="wrapped">
          <div className="weather-minTemp"><span className="MinTemp"></span>오늘 최저 온도 :{tempMin} <FaTemperatureLow />
          </div>
          <div className="weather-max-Temp"><span className="MaxTemp"></span>오늘 최고 온도 :{tempMax} <FaTemperatureHigh />
          </div>
        </div>
      </div>
      <div className="weather-today">
        <div>
        </div>
      </div>
    </div>
  )
}
export default withRouter(WeatherImage);
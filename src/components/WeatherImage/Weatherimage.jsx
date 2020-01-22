import React, { useState, useEffect } from 'react';
import './WeatherImage.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useWeatherRecord } from '../Reducer';
import { FaTemperatureLow, FaTemperatureHigh } from 'react-icons/fa';

// 현재시간 가져오기
const getTime = () => {
  const today = new Date();
  const todayMilli = Date.parse(new Date());
  console.log(today);

  const arrTime = [
    today.getFullYear(),
    '0' + (today.getMonth() + 1),
    today.getDate(),
  ];

  const todayDate = arrTime.reduce((pre, cur) => pre + '-' + cur);

  return { todayDate, todayMilli };
};

const WeatherImage = () => {
  const { state: stateR } = useWeatherRecord();
  const [state, setState] = useState({});

  const [temp, setTemp] = useState();
  const [tempMin, setMin] = useState();
  const [tempMax, setMax] = useState();

  console.log(stateR);
  useEffect(() => {
    getData();
    getData1();
  }, []);

  const getData = async () => {
    const appid = 'e809a87e6cd4872c422d92a2f10d9973';
    const q = 'london';
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`,
    );

    console.log(data);
    console.log(data.weather[0].main);
    console.log(data.main.temp);
    setState({
      main: data.main,
    });

    setTemp((data.main.temp - 273.15).toFixed(2));
    setMin((data.main.temp_min - 273.15).toFixed(2));
    setMax((data.main.temp_max - 273.15).toFixed(2));
  };

  const getData1 = async () => {
    const appid = 'e809a87e6cd4872c422d92a2f10d9973';
    const q = 'london';
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${q}&appid=${appid}`,
    );
    console.log(data);

    // ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
    const { todayDate, todayMilli } = getTime();

    console.log(data.list[0].dt_txt.slice(0, 10) === todayDate);

    // 현재 날짜의 3시간 간격의 데이터 5개
    const result = data.list.filter(
      list => list.dt_txt.slice(0, 10) === todayDate,
    );

    // 가져온 데이터의 현재시간을 밀리초롤 변경후 현재시간의 밀리초를 뺀 결과의 배열
    const resultMili = result.map(list =>
      Math.abs(Date.parse(list.dt_txt) - todayMilli),
    );

    // 최소값
    const minResultMili = resultMili.sort((a, b) => a - b)[0];
    const minusMinResultMili = resultMili.sort((a, b) => a - b)[0] * -1;

    // 최소값의 밀리초에 현재 밀리초를 더한뒤 현재시간을 가져옴
    const lastTime = new Date(minResultMili + todayMilli);
    const minusLastTime = new Date(minusMinResultMili + todayMilli);

    // 현재 시간에서 제일 가까운 시간대의 데이터의 시간
    console.log(lastTime.toTimeString().slice(0, 9));
    console.log(minusLastTime.toTimeString().slice(0, 9));

    // 위에서 가져오 데이터의 시간과 같은 5일치의 데이터에서 맞는 데이터 필터
    console.log(
      data.list.filter(list =>
        list.dt_txt.slice(11) === lastTime.toTimeString().slice(0, 8)
          ? list.dt_txt.slice(11) === lastTime.toTimeString().slice(0, 8)
          : list.dt_txt.slice(11) === minusLastTime.toTimeString().slice(0, 8),
      ),
    );
  };

  return (
    <div className="weather">
      <div className="Temporary">
        <div className="weather-nowTemp">
          <span className="TempIcon"></span>오늘의 현재 온도 :{temp}
        </div>
        <div className="wrapped">
          <div className="weather-minTemp">
            <span className="MinTemp"></span>오늘 최저 온도 :{tempMin}{' '}
            <FaTemperatureLow />
          </div>
          <div className="weather-max-Temp">
            <span className="MaxTemp"></span>오늘 최고 온도 :{tempMax}{' '}
            <FaTemperatureHigh />
          </div>
        </div>
      </div>
      <div className="weather-today">
        <div></div>
      </div>
    </div>
  );
};
export default withRouter(WeatherImage);

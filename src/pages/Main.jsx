import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
// import useWeatherRecordProvider from '../components/Reducer';

const StyledBgCircle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  height: 200rem;
  width: 200rem;
  border-radius: 50%;
  background: linear-gradient(
    -225deg,
    #ffffff 0%,
    #ffe29f 10%,
    #ffa99f 48%,
    #ffd1ff 100%
  );
  animation: scaleup-circle 900ms ease-in-out forwards;
  transition: background 1s ease-in-out;
`;

const StyledBg = styled.div`
  background: linear-gradient(to top, #86dbff 0%, #e0c3fc 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  padding: 2rem 0;
  width: 100vw;
  height: 100vh;
`;

const getDate = () => {};

const Main = props => {
  const [data, setDate] = useState({});
  const [state, setState] = useState({});

  // 쿼리로 데이터 가져오기
  const query = new URLSearchParams(props.location.search);
  const token = JSON.parse(query.get('data'));
  console.log(token);

  const getTime = () => {
    const today = new Date();
    const todayMilli = Date.parse(new Date());
    console.log(todayMilli);

    const arrTime = [
      today.getFullYear(),
      '0' + (today.getMonth() + 1),
      today.getDate(),
    ];

    const todayDate = arrTime.reduce((pre, cur) => pre + '-' + cur);

    return { todayDate, todayMilli };
  };

  const getDate1 = async () => {
    const q = 'LONDON';
    const appid = '5e1df5c43452466b07ee8843b5f8959c';

    const { data } = await Axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${q}&appid=${appid}`,
    );

    // 시간데이터 가져오기
    const { todayDate, todayMilli } = getTime();

    console.log(data.list[0].dt_txt.slice(0, 10) === todayDate);

    // 현재 날짜의 3시간 간격의 데이터 5개
    const result = data.list.filter(
      list => list.dt_txt.slice(0, 10) === todayDate,
    );

    console.log(result);

    // 가져온 데이터의 현재시간을 밀리초롤 변경후 현재시간의 밀리초를 뺀 결과의 배열
    const resultMili = result.map(list =>
      Math.abs(Date.parse(list.dt_txt) - todayMilli),
    );

    console.log(resultMili);

    console.log(resultMili.sort((a, b) => a - b));

    // 최소값
    const minResultMili = resultMili.sort((a, b) => a - b)[0];
    const minusMinResultMili = resultMili.sort((a, b) => a - b)[0] * -1;

    console.log(minResultMili, minusMinResultMili);

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

    // 데이터 state에 저장
  };

  const getDate2 = async () => {
    const q = 'seoul';
    const appid = '5e1df5c43452466b07ee8843b5f8959c';

    const { data } = await Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`,
    );
    console.log(data.weather);
    setState(data.main);
  };
  console.log(state.temp);
  return (
    <>
      <StyledBg>
        <StyledBgCircle></StyledBgCircle>
      </StyledBg>
      <button onClick={() => getDate1()}>data</button>
      <button onClick={() => getDate2()}>data</button>
    </>
  );
};

export default Main;

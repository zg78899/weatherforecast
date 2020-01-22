import React from 'react';
import styled from 'styled-components';
import WeatherContext from '../components/WeatherContext/WeatherContext';
import WeatherImage from '../components/WeatherImage/Weatherimage';

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

const StyledRow = styled.div`
  display: flex;
  align-items: middle;
  height: 100vh;
`;
const StyledCol = styled.div`
  /* background: aqua; */
  height: 100vh;
  width: 100vw;
`;
const StyledContents = styled.div`
  display: flex;
  margin-top: 100px;
  background-color: #f3f7f8;
  margin-left: 50px;
  margin-right: 50px;
  align-items: middle;
`;

const Main = props => {
  // 쿼리로 데이터 가져오기
  const query = new URLSearchParams(props.location.search);
  const token = JSON.parse(query.get('data'));
  console.log(token);

  return (
    <>
      <StyledBg>
        <StyledRow>
          <StyledCol>
            <StyledContents>
              <WeatherContext token={token} />
              <WeatherImage token={token} />
            </StyledContents>
          </StyledCol>
        </StyledRow>
      </StyledBg>
    </>
  );
};

export default Main;

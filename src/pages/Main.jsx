// import React from 'react';
// import { Row, Col } from 'antd';
// import styled from 'styled-components';
// import WeatherContext from '../components/WeatherContext/WeatherContext';
// import WeatherImage from '../components/WeatherImage/Weatherimage';
// const StyledRow = styled(Row).attrs(() => ({
//   type: 'flex',
//   align: 'middle'
// }))`
//   height: 100vh;
// `;
// const StyledCol = styled(Col).attrs(() => ({
//   span: 12
// }))`
//   background: aqua;
//   height: 100vh;
// `;
// const StyledContents = styled(Row).attrs(() => ({
//   type: 'flex'
// }))`
//   margin-top: 50px;
//   background-color: #f3f7f8;
//   margin-left: 50px;
//   margin-right: 50px;
//   ;
// `;

// const Main = () => (
//   <StyledRow>
//     <StyledCol>
//       <StyledContents>
//         <WeatherContext />
//         <WeatherImage />
//       </StyledContents>
//     </StyledCol>
//   </StyledRow>
// );
// export default Main;
import React from 'react';
import styled from 'styled-components';
import WeatherContext from '../components/WeatherContext/WeatherContext';
import WeatherImage from '../components/WeatherImage/Weatherimage';

const StyledRow = styled.div`
  display:flex;
  align-items:middle;
  height: 100vh;
`;
const StyledCol = styled.div`
  /* background: aqua; */
  height: 100vh;
  width:100vw;
`;
const StyledContents = styled.div`
  display:flex;
  margin-top: 100px;
  background-color: #f3f7f8;
  margin-left: 50px;
  margin-right: 50px;
  align-items:middle;
`;
const Main = () => (
  <StyledRow>
    <StyledCol>
      <StyledContents>
        <WeatherContext />
        <WeatherImage />
      </StyledContents>
    </StyledCol>
  </StyledRow>
);
export default Main;
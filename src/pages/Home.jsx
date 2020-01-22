import React, { useState, createRef, useEffect } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import uuid from 'uuid';
import NavDate from '../components/NavDate';
import { useWeatherRecord } from '../components/Reducer';

// styled-components
// Layout-grid
const StyledRow = styled(Row).attrs(() => ({
  type: 'flex',
  aligh: 'middle',
}))`
  /* 스타일 */
  /* background-image: linear-gradient(to top, #5ee7df 0, #66a6ff 100%); */
  /* background: linear-gradient(to top, #86dbff 0%, #e0c3fc 100%); */
  /* background: linear-gradient(#fc7db8, #495cfc); */
  background: linear-gradient(
    -225deg,
    #ffffff 0%,
    #ffe29f 10%,
    #ffa99f 48%,
    #ffd1ff 100%
  );
  /* 배경 */

  /* 폰트 */
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
`;

const StyledCol = styled(Col).attrs(() => ({
  span: 24,
}))``;

//
const Header = styled(Row).attrs(() => ({
  type: 'flex',
  aligh: 'middle',
}))`
  height: 200px;
  line-height: 2;
  h1 {
    /* color: #0c1066; */
    color: white;
    margin: 0;
  }
`;

const SearchBar = styled(Row).attrs(() => ({
  type: 'flex',
  aligh: 'middle',
}))`
  display: flex;
  position: relative;
  margin: 0 auto;
  width: 90%;
  height: calc((90vh - 200px) / 2);
  background: white;
  border-radius: 20px;
  justify-content: center;
`;

const CityList = styled(Row).attrs(() => ({
  type: 'flex',
  aligh: 'middle',
}))`
  display: flex;
  flex-direction: column;
  margin: 30px auto 0 auto;
  width: 90%;
  min-height: 300px;
  background: white;
  border-radius: 20px;

  ul {
    height: 100%;
    list-style-type: none;
    /* font-size: 1.5rem; */
  }
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 85%;
  height: 50px;
  margin-top: 110px;
  padding: 1.5rem;
  border-radius: 3rem;
  outline: none;
  border: none;
  box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);

  /* font */
  font-size: 1rem;
  color: #131f69;
  text-transform: uppercase;

  &::placeholder {
    font-size: 1rem;
    color: #131f69;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 60px;
  width: 70px;
  height: 70px;
  margin-left: 20px;
  margin-top: 100px;
  background-color: #31feae;
  border-radius: 50%;
  outline: none;
  border: none;
  box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.2);
`;

const StyledStartButton = styled.button`
  cursor: pointer;
  position: absolute;
  width: 100px;
  height: 50px;
  left: calc(50% - 50px);
  bottom: 10px;
`;

const StyledDiv = styled.div`
  height: 30px;
`;

// Function

const Home = props => {
  // useReducer
  const { state, addCityLists } = useWeatherRecord();
  // state
  const [cityLists, setCityList] = useState([]);

  //ref
  let inputValue = createRef();

  // useEffect
  useEffect(() => {
    console.log(state);
  }, [state]);

  // Event
  const addCityList = ({ target, key }) => {
    if (key !== 'Enter') return;

    addCityLists(target.value.trim().toUpperCase());
    target.value = '';
  };

  const addClickCityList = () => {
    if (inputValue.current.value === '') return;

    addCityLists(inputValue.current.value.trim().toUpperCase());

    inputValue.current.value = '';
  };

  const moveToMain = () => {
    const data = JSON.stringify(state.cities);
    props.history.push(`/main?data=${data}`);
  };

  const removeList = e => {
    console.log(e.target);
  };

  return (
    <>
      <StyledRow>
        <StyledCol>
          <Header>
            <h1>Weather Forecast</h1>
          </Header>
          <NavDate />
          <SearchBar>
            <StyledInput
              name="search"
              ref={inputValue}
              placeholder="SEARCH CITY"
              onKeyPress={addCityList}
              autoFocus
            />
            <StyledButton onClick={addClickCityList}>
              <svg
                className="search-icon"
                viewBox="0 0 451 451"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M447 428L337.6 318.4A192.5 192.5 0 0 0 192.4 0C86.3 0 0 86.3 0 192.3s86.3 192.3 192.3 192.3c48.2 0 92.3-17.8 126-47.2L428.2 447a13.2 13.2 0 0 0 19 0 13.5 13.5 0 0 0 0-19zM27 192.3C27 101.1 101 27 192.3 27c91.1 0 165.3 74.2 165.3 165.3s-74.2 165.4-165.4 165.4A165.6 165.6 0 0 1 27 192.3z"
                  fill="#FFF"
                />
              </svg>
            </StyledButton>
            <StyledStartButton onClick={moveToMain}>START</StyledStartButton>
          </SearchBar>
          <CityList>
            <ul>
              {state.cities.map((list, i) => (
                <li key={i} id={i}>
                  {list}
                  <button onClick={removeList}>X</button>
                </li>
              ))}
            </ul>
          </CityList>
          <StyledDiv></StyledDiv>
        </StyledCol>
      </StyledRow>
    </>
  );
};

export default Home;

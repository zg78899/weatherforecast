import React from 'react';
import { Row, Col } from 'antd';
import styled, { css } from 'styled-components';
import { findByLabelText } from '@testing-library/react';

const StyledRow = styled(Row).attrs(() => ({
  type: 'flex',
  aligh: 'middle',
}))`
  height: 100vh;
  background: pink;
  text-align: center;
  vertical-align: middle;
`;

const StyledCol = styled(Col).attrs(() => ({
  span: 24,
}))``;

const StyledRow1 = styled(Row).attrs(() => ({
  type: 'flex',
  aligh: 'middle',
}))`
  height: calc(100vh / 5);
  background: aqua;
`;

const StyledRow2 = styled(Row).attrs(() => ({
  type: 'flex',
  aligh: 'middle',
}))`
  display: flex;
  flex-direction: column;
  height: calc((100vh / 5) * 2);
  background: yellow;
`;

const Styledinput = styled.input`
  box-sizing: border-box;
  width: 50%;
  padding: 1.5rem;
  border-radius: 3rem;
  outline: none;
  border: none;
  box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);
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
  background-color: #31feae;
  border-radius: 50%;
  outline: none;
  border: none;
  box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);
`;

const Home = props => {
  return (
    <>
      <StyledRow>
        <StyledCol>
          <StyledRow1 span={6}>
            <div>dsd</div>
          </StyledRow1>
          <StyledRow2 span={9}>
            <Styledinput placeholder="SEARCH CITY" />
            <button>dsd</button>
            <button>dsd</button>
          </StyledRow2>
          <StyledRow2 span={9}>
            <button>dsd</button>
          </StyledRow2>
        </StyledCol>
      </StyledRow>
    </>
  );
};

export default Home;

import React from 'react';
import styled from 'styled-components';

const StyledDate = styled.p`
  margin: 0 auto;
  height: 50px;
  text-align: center;

  /* font */
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  color: white;

  span {
    margin-left: 20px;
  }
`;

const NavDate = props => {
  const today = new Date();

  const dataString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });

  return (
    <>
      <StyledDate>
        {dataString}
        <span>{dayName}</span>
      </StyledDate>
    </>
  );
};

export default NavDate;

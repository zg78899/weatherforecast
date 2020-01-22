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
  const todayParse = Date.parse(today);

  const todayMilli = Date.parse(new Date());
  console.log('milli', todayMilli);

  console.log(today.getMonth() + 1);

  const arrTime = [
    today.getFullYear(),
    '0' + (today.getMonth() + 1),
    today.getDate(),
  ];

  console.log(arrTime.reduce((pre, cur) => pre + '-' + cur));

  console.log(
    'today',
    today
      .toLocaleDateString()
      .slice(0, 11)
      .split('. '),
  );

  console.log(
    today
      .toLocaleDateString()
      .slice(0, 11)
      .split('. ')
      .reduce((pre, cur) => pre + '-' + cur),
  );

  console.log(today);
  console.log(todayParse);
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

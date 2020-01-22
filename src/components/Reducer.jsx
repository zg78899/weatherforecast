import React, { useReducer } from 'react';

const initialState = {
  cities: [],
  weather: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        cities: [...state.cities, action.city],
      };

    case 'WEEKEND':
      return {
        ...state,
        weather: {
          ...state.weather,
          weekend: action.weekend,
        },
      };

    default:
      return state;
  }
};

export function useWeatherRecord(data) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
  });

  const addCityLists = city => {
    dispatch({ type: 'ADD', city });
  };

  const addWeekend = weekend => {
    dispatch({ type: 'WEEKEND', weekend });
  };

  return { state, addCityLists, addWeekend };
}

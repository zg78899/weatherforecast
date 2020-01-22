import { useReducer, useCallback } from 'react';

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

    default:
      return state;
  }
};

const useWeatherRecord = data => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
  });

  const addCityLists = city => {
    dispatch({ type: 'ADD', city });
  };

  return { state, addCityLists };
};

export default useWeatherRecord;

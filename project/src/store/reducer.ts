import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';
import { offers } from './../mocks/offers';

const initialState = {
  city: 'Paris',
  offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    });
});

export { reducer };

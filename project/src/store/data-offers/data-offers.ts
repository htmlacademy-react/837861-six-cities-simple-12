import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_SORTING, FetchStatus, NameSpace } from '../../const';
import { fecthOffersAction } from '../api-actions';
import { Offers } from '../../types/offer';

type DataOffers = {
  offers: Offers[];
  offersStatus: FetchStatus;
  city: string;
  sorting: string;
};

const initialState: DataOffers = {
  offers: [],
  offersStatus: FetchStatus.Idle,
  city: 'Amsterdam',
  sorting: DEFAULT_SORTING,
};

export const dataOffers = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeSorting: (state, action) => {
      const { sorting } = action.payload;
      state.sorting = sorting;
    },
    changeCity: (state, action) => {
      const { city } = action.payload;
      state.city = city;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fecthOffersAction.pending, (state) => {
        state.offersStatus = FetchStatus.Loading;
      })
      .addCase(fecthOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.offersStatus = FetchStatus.Succes;
      })
      .addCase(fecthOffersAction.rejected, (state) => {
        state.offersStatus = FetchStatus.Failed;
      });
  }
});

export const { changeSorting, changeCity } = dataOffers.action;

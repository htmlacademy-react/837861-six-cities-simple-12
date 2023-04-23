import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { fetchOffersAction } from '../api-actions';
import { Offers } from '../../types/offer';

type DataOffers = {
  offers: Offers;
  offersStatus: FetchStatus;
};

const initialState: DataOffers = {
  offers: [],
  offersStatus: FetchStatus.Idle,
};

export const dataOffers = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.offersStatus = FetchStatus.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.offersStatus = FetchStatus.Succes;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offersStatus = FetchStatus.Failed;
      });
  }
});

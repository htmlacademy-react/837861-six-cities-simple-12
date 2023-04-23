import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { dataOffers } from './data-offers/data-offers';
import { UiProcess } from './ui/ui-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: dataOffers.reducer,
  [NameSpace.Ui]: UiProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});

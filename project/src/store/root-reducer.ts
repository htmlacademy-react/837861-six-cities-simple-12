import { combineReducers } from '@reduxjs/toolkit';
import {NameSpace} from '../const';

export const rootReducer = combineReducers({
  [NameSpace.Data]: gameData.reducer,
  [NameSpace.Game]: gameProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});

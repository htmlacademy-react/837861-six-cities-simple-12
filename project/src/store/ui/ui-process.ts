import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DEFAULT_SORTING, NameSpace } from '../../const';

type UiProcess = {
  city: string;
  sorting: string;
};

const initialState: UiProcess = {
  city: 'Amsterdam',
  sorting: DEFAULT_SORTING,
};

export const UiProcess = createSlice({
  name: NameSpace.Ui,
  initialState,
  reducers: {
    changeSorting: (state, action: PayloadAction<{ sorting: string }>) => {
      const { sorting } = action.payload;
      state.sorting = sorting;
    },
    changeCity: (state, action: PayloadAction<{ city: string }>) => {
      const { city } = action.payload;
      state.city = city;
    }
  }
});

export const { changeSorting, changeCity } = UiProcess.actions;

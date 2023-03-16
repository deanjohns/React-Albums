import { createSlice } from '@reduxjs/toolkit';

export const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    value: 'asc',
  },
  reducers: {
    sortAsc: (state) => {
      state.value = 'asc';
    },
    sortDesc: (state) => {
      state.value = 'desc';
    },
  },
});

export const { sortAsc, sortDesc } = sortSlice.actions;

export default sortSlice.reducer;

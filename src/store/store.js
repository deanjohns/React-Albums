import { configureStore } from '@reduxjs/toolkit';
import sortReducer from './reducers/sortReducer';

const Store = configureStore({
  reducer: sortReducer,
});

export default Store;

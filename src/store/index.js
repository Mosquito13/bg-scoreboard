import { configureStore } from '@reduxjs/toolkit';

import arboretumReducer from '../arboretum/redux';

const store = configureStore({
  reducer: {
    arboretum: arboretumReducer
  }
});

export default store;

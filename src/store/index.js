import { configureStore } from '@reduxjs/toolkit';

import arboretumReducer from '../_arboretum/redux';
import greatWesternTrailReducer from '../_greatWesternTrail/redux';

const store = configureStore({
  reducer: {
    arboretum: arboretumReducer,
    greatWesternTrail: greatWesternTrailReducer
  }
});

export default store;

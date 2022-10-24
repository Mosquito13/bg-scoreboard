import { configureStore } from '@reduxjs/toolkit';

import cascadiaReducer from '../_cascadia/redux';
import arboretumReducer from '../_arboretum/redux';
import feastForOdinReducer from '../_feastForOdin/redux';
import greatWesternTrailReducer from '../_greatWesternTrail/redux';

const store = configureStore({
  reducer: {
    cascadia: cascadiaReducer,
    arboretum: arboretumReducer,
    feastForOdin: feastForOdinReducer,
    greatWesternTrail: greatWesternTrailReducer
  }
});

export default store;

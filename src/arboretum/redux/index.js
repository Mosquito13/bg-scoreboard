import { createSlice } from '@reduxjs/toolkit';

import games from '../../mapping/games';

const initialState = {
  step: 1
};

const arboretumSlice = createSlice({
  name: games.ARBORETUM.id,
  initialState,
  reducers: {
    nextStep(state) {
      state.step++;
    },
    previousStep(state) {
      state.step--;
    }
  }
});

export const { nextStep, previousStep } = arboretumSlice.actions;
export default arboretumSlice.reducer;

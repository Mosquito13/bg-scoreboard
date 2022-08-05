import { createSlice } from '@reduxjs/toolkit';

import games from '../../mapping/games';

const initialState = {
  players: []
};

const arboretumSlice = createSlice({
  name: games.ARBORETUM.id,
  initialState,
  reducers: {
    setPlayers(state, action) {
      state.players = action.payload;
    }
  }
});

export const { nextStep, previousStep } = arboretumSlice.actions;
export default arboretumSlice.reducer;

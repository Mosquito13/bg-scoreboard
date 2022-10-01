import { createSlice } from '@reduxjs/toolkit';

import { normalizePlayerNames } from '../../common/helpers';

const initialState = {
  playerList: [],
  score: {}
};

const arboretumSlice = createSlice({
  name: 'arboretum',
  initialState,
  reducers: {
    setPlayerList(state, action) {
      state.playerList = normalizePlayerNames(action.payload);
    },
    setPlayersScoreByColor(state, action) {
      state.score = {
        ...state.score,
        [action.payload.color]: action.payload.score
      };
    }
  }
});

export const { setPlayerList, setPlayersScoreByColor } = arboretumSlice.actions;
export default arboretumSlice.reducer;

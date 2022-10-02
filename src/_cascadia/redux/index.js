import { createSlice } from '@reduxjs/toolkit';

import { normalizePlayerNames } from '../../common/helpers';

const initialState = {
  playerList: [],
  bear: [],
  fox: [],
  elk: [],
  hawk: [],
  salmon: [],
  mountains: [],
  forests: [],
  prairies: [],
  wetlands: [],
  rivers: [],
  natureToken: []
};

const cascadiaSlice = createSlice({
  name: 'cascadia',
  initialState,
  reducers: {
    setPlayerList(state, action) {
      state.playerList = normalizePlayerNames(action.payload);
    },
    setCriteriaScore(state, action) {
      state[action.payload.criteriaId] = action.payload.score;
    }
  }
});

export const { setPlayerList, setCriteriaScore } = cascadiaSlice.actions;
export default cascadiaSlice.reducer;

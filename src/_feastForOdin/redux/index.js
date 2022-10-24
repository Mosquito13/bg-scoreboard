import { createSlice } from '@reduxjs/toolkit';

import { normalizePlayerNames } from '../../common/helpers';
import negativeCriteria from '../mapping/negativeCriteria';
import positiveCriteria from '../mapping/positiveCriteria';

const initialState = {
  playerList: [],
  positive: {},
  negative: {}
};

Object.values(positiveCriteria).forEach(({ key }) => initialState.positive[key] = []);
Object.values(negativeCriteria).forEach(({ key }) => initialState.negative[key] = []);

const feastForOdinSlice = createSlice({
  name: 'feastForOdin',
  initialState,
  reducers: {
    setPlayerList(state, { payload }) {
      state.playerList = normalizePlayerNames(payload);
    },
    setScoreByTypeAndCriteria(state, { payload: { type, criteria, score, index } }) {
      if (index !== undefined) {
        state[type][criteria][index] = score;
      } else {
        state[type][criteria] = score;
      }
    }
  }
});

export const { setPlayerList, setScoreByTypeAndCriteria } = feastForOdinSlice.actions;
export default feastForOdinSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { normalizePlayerNames } from '../../common/helpers';

const initialState = {
  playerList: [],
  research: [],
  note: [],
  temple: [],
  idol: [],
  idolBoard: [],
  guardian: [],
  item: [],
  fear: []
};

const lostRuinsOfArnakSlice = createSlice({
  name: 'lostRuinsOfArnak',
  initialState,
  reducers: {
    setPlayerList(state, action) {
      state.playerList = normalizePlayerNames(action.payload);
    },
    setResearch(state, action) {
      state.research = action.payload;
    },
    setNote(state, action) {
      state.note = action.payload;
    },
    setTemple(state, action) {
      state.temple[action.payload.index] = action.payload.score;
    },
    setIdol(state, action) {
      state.idol = action.payload;
    },
    setIdolBoard(state, action) {
      state.idolBoard = action.payload;
    },
    setGuardian(state, action) {
      state.guardian = action.payload;
    },
    setItem(state, action) {
      state.item = action.payload;
    },
    setFear(state, action) {
      state.fear = action.payload;
    }
  }
});

export const {
  setPlayerList,
  setResearch,
  setNote,
  setTemple,
  setIdol,
  setIdolBoard,
  setGuardian,
  setItem,
  setFear
} = lostRuinsOfArnakSlice.actions;
export default lostRuinsOfArnakSlice.reducer;

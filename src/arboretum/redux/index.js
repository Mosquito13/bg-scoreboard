import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playerList: []
};

const arboretumSlice = createSlice({
  name: 'arboretum',
  initialState,
  reducers: {
    setPlayerList(state, action) {
      state.playerList = action.payload;
    }
  }
});

export const { setPlayerList } = arboretumSlice.actions;
export default arboretumSlice.reducer;

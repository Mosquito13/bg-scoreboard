import { createSlice } from '@reduxjs/toolkit';

import { normalizePlayerNames } from '../../common/helpers';

const initialState = {
  playerList: [],
  money: [],
  building: [],
  city: [],
  trainStation: [],
  hazard: [],
  cattle: [],
  objective: [],
  stationMasterTask: [],
  worker: [],
  playerBoard: [],
  jobMarket: []
};

const greatWesterTrailSlice = createSlice({
  name: 'greatWesternTrail',
  initialState,
  reducers: {
    setPlayerList(state, action) {
      state.playerList = normalizePlayerNames(action.payload);
    },
    setMoney(state, action) {
      state.money = action.payload;
    },
    setBuilding(state, action) {
      state.building = action.payload;
    },
    setCityByPlayer(state, action) {
      state.city[action.payload.index] = action.payload.score;
    },
    setTrainStation(state, action) {
      state.trainStation = action.payload;
    },
    setHazard(state, action) {
      state.hazard = action.payload;
    },
    setCattle(state, action) {
      state.cattle = action.payload;
    },
    setObjective(state, action) {
      state.objective = action.payload;
    },
    setStationMasterTask(state, action) {
      state.stationMasterTask = action.payload;
    },
    setWorker(state, action) {
      state.worker = action.payload;
    },
    setPlayerBoard(state, action) {
      state.playerBoard = action.payload;
    },
    setJobMarket(state, action) {
      state.jobMarket = action.payload;
    }
  }
});

export const {
  setPlayerList,
  setMoney,
  setBuilding,
  setCityByPlayer,
  setTrainStation,
  setHazard,
  setCattle,
  setObjective,
  setStationMasterTask,
  setWorker,
  setPlayerBoard,
  setJobMarket
} = greatWesterTrailSlice.actions;
export default greatWesterTrailSlice.reducer;

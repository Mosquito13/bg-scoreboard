import {
  cityToScore,
  jobMarketToScore,
  moneyToScore,
  playerBoardToScore,
  workerToScore
} from '../helpers/translator';

const criteria = {
  MONEY: {
    key: 'money',
    translator: moneyToScore
  },
  BUILDING: {
    key: 'building'
  },
  CITY: {
    key: 'city',
    translator: cityToScore
  },
  TRAIN_STATION: {
    key: 'trainStation'
  },
  HAZARD: {
    key: 'hazard'
  },
  CATTLE: {
    key: 'cattle'
  },
  OBJECTIVE: {
    key: 'objective'
  },
  STATION_MASTER_TASK: {
    key: 'stationMasterTask'
  },
  WORKER: {
    key: 'worker',
    translator: workerToScore
  },
  PLAYER_BOARD: {
    key: 'playerBoard',
    translator: playerBoardToScore
  },
  JOB_MARKET: {
    key: 'jobMarket',
    translator: jobMarketToScore
  }
};

export default criteria;

import { ReactComponent as MoneyIcon } from '../../assets/svg/greatWesternTrail/money.svg';
import { ReactComponent as BuildingIcon } from '../../assets/svg/greatWesternTrail/building.svg';
import { ReactComponent as CityIcon } from '../../assets/svg/greatWesternTrail/city.svg';
import { ReactComponent as TrainStationIcon } from '../../assets/svg/greatWesternTrail/train_station.svg';
import { ReactComponent as HazardIcon } from '../../assets/svg/greatWesternTrail/hazard.svg';
import { ReactComponent as CattleIcon } from '../../assets/svg/greatWesternTrail/cattle.svg';
import { ReactComponent as ObjectiveIcon } from '../../assets/svg/greatWesternTrail/objective.svg';
import { ReactComponent as StationMasterTaskIcon } from '../../assets/svg/greatWesternTrail/station_master_task.svg';
import { ReactComponent as WorkerIcon } from '../../assets/svg/greatWesternTrail/worker.svg';
import { ReactComponent as PlayerBoardIcon } from '../../assets/svg/greatWesternTrail/player_board.svg';
import { ReactComponent as JobMarketIcon } from '../../assets/svg/greatWesternTrail/job_market.svg';

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
    title: 'Dólares',
    IconCmp: MoneyIcon,
    translator: moneyToScore
  },
  BUILDING: {
    key: 'building',
    title: 'Construções',
    IconCmp: BuildingIcon
  },
  CITY: {
    key: 'city',
    title: 'Cidades',
    IconCmp: CityIcon,
    translator: cityToScore
  },
  TRAIN_STATION: {
    key: 'trainStation',
    title: 'Estações',
    IconCmp: TrainStationIcon
  },
  HAZARD: {
    key: 'hazard',
    title: 'Perigos',
    IconCmp: HazardIcon
  },
  CATTLE: {
    key: 'cattle',
    title: 'Rebanho',
    IconCmp: CattleIcon
  },
  OBJECTIVE: {
    key: 'objective',
    title: 'Objetivos',
    IconCmp: ObjectiveIcon
  },
  STATION_MASTER_TASK: {
    key: 'stationMasterTask',
    title: 'Tarefas de mestre da estação',
    IconCmp: StationMasterTaskIcon
  },
  WORKER: {
    key: 'worker',
    title: 'Trabalhadores',
    IconCmp: WorkerIcon,
    translator: workerToScore
  },
  PLAYER_BOARD: {
    key: 'playerBoard',
    title: 'Tabuleiro de jogador',
    IconCmp: PlayerBoardIcon,
    translator: playerBoardToScore
  },
  JOB_MARKET: {
    key: 'jobMarket',
    title: 'Ficha do mercado de trabalho',
    IconCmp: JobMarketIcon,
    translator: jobMarketToScore
  }
};

export default criteria;

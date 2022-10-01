import PlayerList from '../pages/PlayerList';
import Money from '../pages/Money';
import Building from '../pages/Building';
import City from '../pages/City';
import TrainStation from '../pages/TrainStation';
import Hazard from '../pages/Hazard';
import Cattle from '../pages/Cattle';
import Objective from '../pages/Objective';
import StationMasterTask from '../pages/StationMasterTask';
import Worker from '../pages/Worker';
import PlayerBoard from '../pages/PlayerBoard';
import JobMarket from '../pages/JobMarket';
import Result from '../pages/Result';

const routes = [
  {
    path: 'greatWesternTrail/player-list',
    Cmp: PlayerList
  },
  {
    path: 'greatWesternTrail/money',
    Cmp: Money
  },
  {
    path: 'greatWesternTrail/building',
    Cmp: Building
  },
  {
    path: 'greatWesternTrail/city/:playerIndex',
    Cmp: City
  },
  {
    path: 'greatWesternTrail/train-station',
    Cmp: TrainStation
  },
  {
    path: 'greatWesternTrail/hazard',
    Cmp: Hazard
  },
  {
    path: 'greatWesternTrail/cattle',
    Cmp: Cattle
  },
  {
    path: 'greatWesternTrail/objective',
    Cmp: Objective
  },
  {
    path: 'greatWesternTrail/station-master-task',
    Cmp: StationMasterTask
  },
  {
    path: 'greatWesternTrail/worker',
    Cmp: Worker
  },
  {
    path: 'greatWesternTrail/player-board',
    Cmp: PlayerBoard
  },
  {
    path: 'greatWesternTrail/job-market',
    Cmp: JobMarket
  },
  {
    path: 'greatWesternTrail/result',
    Cmp: Result
  }
];

export default routes;

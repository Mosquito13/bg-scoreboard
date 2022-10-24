import PlayerList from '../pages/PlayerList';
import Ships from '../pages/Ships';
import Emigrations from '../pages/Emigrations';
import Exploration from '../pages/Exploration';
import Houses from '../pages/Houses';
import Animals from '../pages/Animals';
import Occupations from '../pages/Occupations';
import Silver from '../pages/Silver';
import Income from '../pages/Income';
import Crown from '../pages/Crown';
import NegativeHome from '../pages/NegativeHome';
import NegativeExploration from '../pages/NegativeExploration';
import NegativeHouses from '../pages/NegativeHouses';
import Penalties from '../pages/Penalties';
import Result from '../pages/Result';

const routes = [
  {
    path: 'feastForOdin/player-list',
    Cmp: PlayerList
  },
  {
    path: 'feastForOdin/ships/:playerIndex',
    Cmp: Ships
  },
  {
    path: 'feastForOdin/emigrations/:playerIndex',
    Cmp: Emigrations
  },
  {
    path: 'feastForOdin/exploration/:playerIndex',
    Cmp: Exploration
  },
  {
    path: 'feastForOdin/houses/:playerIndex',
    Cmp: Houses
  },
  {
    path: 'feastForOdin/animals/:playerIndex',
    Cmp: Animals
  },
  {
    path: 'feastForOdin/occupations',
    Cmp: Occupations
  },
  {
    path: 'feastForOdin/silver',
    Cmp: Silver
  },
  {
    path: 'feastForOdin/income',
    Cmp: Income
  },
  {
    path: 'feastForOdin/crown',
    Cmp: Crown
  },
  {
    path: 'feastForOdin/negative-home',
    Cmp: NegativeHome
  },
  {
    path: 'feastForOdin/negative-exploration',
    Cmp: NegativeExploration
  },
  {
    path: 'feastForOdin/negative-houses',
    Cmp: NegativeHouses
  },
  {
    path: 'feastForOdin/penalties',
    Cmp: Penalties
  },
  {
    path: 'feastForOdin/result',
    Cmp: Result
  }
];

export default routes;

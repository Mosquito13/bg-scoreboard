import PlayerList from '../pages/PlayerList';
import CriteriaScore from '../pages/CriteriaScore';
import Result from '../pages/Result';

const routes = [
  {
    path: 'cascadia/player-list',
    Cmp: PlayerList
  },
  {
    path: 'cascadia/criteria/:criteriaId',
    Cmp: CriteriaScore
  },
  {
    path: 'cascadia/result',
    Cmp: Result
  }
];

export default routes;

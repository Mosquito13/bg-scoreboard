import PlayerList from '../pages/PlayerList';
import Colors from '../pages/Colors';
import Result from '../pages/Result';

const routes = [
  {
    path: 'arboretum/playerList',
    Cmp: PlayerList
  },
  {
    path: 'arboretum/colors',
    Cmp: Colors
  },
  {
    path: 'arboretum/result',
    Cmp: Result
  }
];

export default routes;

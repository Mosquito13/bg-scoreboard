import PlayerList from '../pages/PlayerList';
import Colors from '../pages/Colors';
import Result from '../pages/Result';

const routes = [
  {
    path: 'arboretum/player-list',
    Cmp: PlayerList
  },
  {
    path: 'arboretum/colors/:colorIndex',
    Cmp: Colors
  },
  {
    path: 'arboretum/result',
    Cmp: Result
  }
];

export default routes;

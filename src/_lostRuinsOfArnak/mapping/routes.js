import PlayerList from '../pages/PlayerList';
import Research from '../pages/Research';
import Note from '../pages/Note';
import Temple from '../pages/Temple';
import Idol from '../pages/Idol';
import IdolBoard from '../pages/IdolBoard';
import Guardian from '../pages/Guardian';
import Item from '../pages/Item';
import Fear from '../pages/Fear';
import Result from '../pages/Result';

const routes = [
  {
    path: 'lostRuinsOfArnak/player-list',
    Cmp: PlayerList
  },
  {
    path: 'lostRuinsOfArnak/research',
    Cmp: Research
  },
  {
    path: 'lostRuinsOfArnak/note',
    Cmp: Note
  },
  {
    path: 'lostRuinsOfArnak/temple/:playerIndex',
    Cmp: Temple
  },
  {
    path: 'lostRuinsOfArnak/idol',
    Cmp: Idol
  },
  {
    path: 'lostRuinsOfArnak/idol-board',
    Cmp: IdolBoard
  },
  {
    path: 'lostRuinsOfArnak/guardian',
    Cmp: Guardian
  },
  {
    path: 'lostRuinsOfArnak/item',
    Cmp: Item
  },
  {
    path: 'lostRuinsOfArnak/fear',
    Cmp: Fear
  },
  {
    path: 'lostRuinsOfArnak/result',
    Cmp: Result
  }
];

export default routes;

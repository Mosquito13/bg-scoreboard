import { penaltiesToScore } from '../helpers/translators';

const negativeCriteria = {
  HOME: {
    key: 'home',
    title: 'Tabuleiro pessoal'
  },
  EXPLORATION: {
    key: 'exploration',
    title: 'Exploração'
  },
  HOUSES: {
    key: 'houses',
    title: 'Cabanas e casas'
  },
  PENALTIES: {
    key: 'penalties',
    title: 'Penalidade Ting',
    translator: penaltiesToScore
  }
};

export default negativeCriteria;

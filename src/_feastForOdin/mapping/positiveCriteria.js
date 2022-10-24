import ships from '../mapping/ships';
import houses from '../mapping/houses';
import animals from '../mapping/animals';
import emigration from '../mapping/emigration';
import exploration from '../mapping/exploration';
import { crownToScore } from '../helpers/translators';

const positiveCriteria = {
  SHIPS: {
    key: 'ships',
    title: 'Navios',
    mapping: ships
  },
  EMIGRATIONS: {
    key: 'emigrations',
    title: 'Emigração',
    mapping: emigration
  },
  EXPLORATION: {
    key: 'exploration',
    title: 'Exploração',
    mapping: exploration
  },
  HOUSES: {
    key: 'houses',
    title: 'Cabanas e casas',
    mapping: houses
  },
  ANIMALS: {
    key: 'animals',
    title: 'Ovelhas e vacas',
    mapping: animals
  },
  OCCUPATIONS: {
    key: 'occupations',
    title: 'Ocupações'
  },
  SILVER: {
    key: 'silver',
    title: 'Prata'
  },
  INCOME: {
    key: 'income',
    title: 'Renda final'
  },
  CROWN: {
    key: 'crown',
    title: 'Coroa inglesa',
    translator: crownToScore
  }
};

export default positiveCriteria;

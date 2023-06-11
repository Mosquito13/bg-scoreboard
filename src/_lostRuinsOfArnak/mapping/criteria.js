import { templeToScore } from '../helpers/translator';

const criteria = {
  RESEARCH: {
    key: 'research',
    title: 'Pesquisa'
  },
  NOTE: {
    key: 'note',
    title: 'Anotação'
  },
  TEMPLE: {
    key: 'temple',
    title: 'Peças de templo',
    translator: templeToScore
  },
  IDOL: {
    key: 'idol',
    title: 'Ídolos'
  },
  IDOL_BOARD: {
    key: 'idolBoard',
    title: 'Ídolos não utilizados'
  },
  GUARDIAN: {
    key: 'guardian',
    title: 'Guardiões'
  },
  ITEM: {
    key: 'item',
    title: 'Items e Artefatos'
  },
  FEAR: {
    key: 'fear',
    title: 'Medo'
  }
};

export default criteria;

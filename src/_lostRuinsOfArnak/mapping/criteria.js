import { ReactComponent as ResearchIcon } from '../../assets/svg/lostRuinsOfArnak/research.svg';
import { ReactComponent as NoteIcon } from '../../assets/svg/lostRuinsOfArnak/note.svg';
import { ReactComponent as TempleIcon } from '../../assets/svg/lostRuinsOfArnak/temple.svg';
import { ReactComponent as IdolIcon } from '../../assets/svg/lostRuinsOfArnak/idol.svg';
import { ReactComponent as IdolBoardIcon } from '../../assets/svg/lostRuinsOfArnak/idol_board.svg';
import { ReactComponent as GuardianIcon } from '../../assets/svg/lostRuinsOfArnak/guardian.svg';
import { ReactComponent as ItemIcon } from '../../assets/svg/lostRuinsOfArnak/item.svg';
import { ReactComponent as FearIcon } from '../../assets/svg/lostRuinsOfArnak/fear.svg';

import { templeToScore } from '../helpers/translator';

const criteria = {
  RESEARCH: {
    key: 'research',
    title: 'Pesquisa',
    IconCmp: ResearchIcon
  },
  NOTE: {
    key: 'note',
    title: 'Anotação',
    IconCmp: NoteIcon
  },
  TEMPLE: {
    key: 'temple',
    title: 'Peças de templo',
    IconCmp: TempleIcon,
    translator: templeToScore
  },
  IDOL: {
    key: 'idol',
    title: 'Ídolos',
    IconCmp: IdolIcon
  },
  IDOL_BOARD: {
    key: 'idolBoard',
    title: 'Ídolos não utilizados',
    IconCmp: IdolBoardIcon
  },
  GUARDIAN: {
    key: 'guardian',
    title: 'Guardiões',
    IconCmp: GuardianIcon
  },
  ITEM: {
    key: 'item',
    title: 'Items e Artefatos',
    IconCmp: ItemIcon
  },
  FEAR: {
    key: 'fear',
    title: 'Medo',
    IconCmp: FearIcon
  }
};

export default criteria;

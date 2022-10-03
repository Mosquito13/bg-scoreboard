import { ReactComponent as BearIcon } from '../../assets/svg/cascadia/bear.svg';
import { ReactComponent as FoxIcon } from '../../assets/svg/cascadia/fox.svg';
import { ReactComponent as ElkIcon } from '../../assets/svg/cascadia/elk.svg';
import { ReactComponent as HawkIcon } from '../../assets/svg/cascadia/hawk.svg';
import { ReactComponent as SalmonIcon } from '../../assets/svg/cascadia/salmon.svg';
import { ReactComponent as MountainsIcon } from '../../assets/svg/cascadia/mountains.svg';
import { ReactComponent as ForestsIcon } from '../../assets/svg/cascadia/forests.svg';
import { ReactComponent as PrairiesIcon } from '../../assets/svg/cascadia/prairies.svg';
import { ReactComponent as WetlandsIcon } from '../../assets/svg/cascadia/wetlands.svg';
import { ReactComponent as RiversIcon } from '../../assets/svg/cascadia/rivers.svg';
import { ReactComponent as NatureTokenIcon } from '../../assets/svg/cascadia/nature_token.svg';

const criteria = {
  BEAR: {
    id: 'bear',
    title: 'Ursos',
    IconCmp: BearIcon
  },
  FOX: {
    id: 'fox',
    title: 'Raposas',
    IconCmp: FoxIcon
  },
  ELK: {
    id: 'elk',
    title: 'Cervos',
    IconCmp: ElkIcon
  },
  HAWK: {
    id: 'hawk',
    title: 'Búteos',
    IconCmp: HawkIcon
  },
  SALMON: {
    id: 'salmon',
    title: 'Salmões',
    IconCmp: SalmonIcon
  },
  MOUNTAINS: {
    id: 'mountains',
    title: 'Montanhas',
    IconCmp: MountainsIcon,
    habitat: true,
  },
  FORESTS: {
    id: 'forests',
    title: 'Florestas',
    IconCmp: ForestsIcon,
    habitat: true
  },
  PRAIRIES: {
    id: 'prairies',
    title: 'Pradarias',
    IconCmp: PrairiesIcon,
    habitat: true
  },
  WETLANDS: {
    id: 'wetlands',
    title: 'Zonas úmidas',
    IconCmp: WetlandsIcon,
    habitat: true
  },
  RIVERS: {
    id: 'rivers',
    title: 'Rios',
    IconCmp: RiversIcon,
    habitat: true
  },
  NATURE_TOKEN: {
    id: 'natureToken',
    title: 'Fichas de natureza',
    IconCmp: NatureTokenIcon
  }
};

export default criteria;

import { ReactComponent as BlueIcon } from '../../assets/svg/arboretum/blue.svg';
import { ReactComponent as BrownIcon } from '../../assets/svg/arboretum/brown.svg';
import { ReactComponent as DarkGreenIcon } from '../../assets/svg/arboretum/dark_green.svg';
import { ReactComponent as GrayIcon } from '../../assets/svg/arboretum/gray.svg';
import { ReactComponent as LightGreenIcon } from '../../assets/svg/arboretum/light_green.svg';
import { ReactComponent as OrangeIcon } from '../../assets/svg/arboretum/orange.svg';
import { ReactComponent as PinkIcon } from '../../assets/svg/arboretum/pink.svg';
import { ReactComponent as PurpleIcon } from '../../assets/svg/arboretum/purple.svg';
import { ReactComponent as RedIcon } from '../../assets/svg/arboretum/red.svg';
import { ReactComponent as YellowIcon } from '../../assets/svg/arboretum/yellow.svg';

const colorMapping = {
  BLUE: {
    id: 'blueSpruce',
    title: 'Abeto Azul',
    IconCmp: BlueIcon
  },
  YELLOW: {
    id: 'cassia',
    title: 'Cássia',
    IconCmp: YellowIcon
  },
  PINK: {
    id: 'cherryBlossom',
    title: 'Flor de Cerejeira',
    IconCmp: PinkIcon
  },
  GRAY: {
    id: 'dogwood',
    title: 'Corniso',
    IconCmp: GrayIcon
  },
  PURPLE: {
    id: 'jacaranda',
    title: 'Jacarandá',
    IconCmp: PurpleIcon
  },
  ORANGE: {
    id: 'maple',
    title: 'Bordo',
    IconCmp: OrangeIcon
  },
  BROWN: {
    id: 'oak',
    title: 'Carvalho',
    IconCmp: BrownIcon
  },
  RED: {
    id: 'royalPoinciana',
    title: 'Poinciana Real',
    IconCmp: RedIcon
  },
  LIGHT_GREEN: {
    id: 'tulipPoplar',
    title: 'Tulipa Poplar',
    IconCmp: LightGreenIcon
  },
  DARK_GREEN: {
    id: 'willow',
    title: 'Salgueiro',
    IconCmp: DarkGreenIcon
  }
};

export default colorMapping;

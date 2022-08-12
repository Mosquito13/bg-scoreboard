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
    hex: '#005ea9',
    IconCmp: BlueIcon
  },
  YELLOW: {
    id: 'cassia',
    title: 'Cássia',
    hex: '#fece01',
    IconCmp: YellowIcon
  },
  PINK: {
    id: 'cherryBlossom',
    title: 'Flor de Cerejeira',
    hex: '#f180b3',
    IconCmp: PinkIcon
  },
  GRAY: {
    id: 'dogwood',
    title: 'Corniso',
    hex: '#b1b4b4',
    IconCmp: GrayIcon
  },
  PURPLE: {
    id: 'jacaranda',
    title: 'Jacarandá',
    hex: '#603094',
    IconCmp: PurpleIcon
  },
  ORANGE: {
    id: 'maple',
    title: 'Bordo',
    hex: '#ef7721',
    IconCmp: OrangeIcon
  },
  BROWN: {
    id: 'oak',
    title: 'Carvalho',
    hex: '#693d1c',
    IconCmp: BrownIcon
  },
  RED: {
    id: 'royalPoinciana',
    title: 'Poinciana Real',
    hex: '#d01a2c',
    IconCmp: RedIcon
  },
  LIGHT_GREEN: {
    id: 'tulipPoplar',
    title: 'Tulipa Poplar',
    hex: '#7ebe3f',
    IconCmp: LightGreenIcon
  },
  DARK_GREEN: {
    id: 'willow',
    title: 'Salgueiro',
    hex: '#0e552e',
    IconCmp: DarkGreenIcon
  }
};

export default colorMapping;

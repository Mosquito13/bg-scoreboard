import CascadiaCover from '../assets/image/CascadiaCover.png';
import ArboretumCover from '../assets/image/ArboretumCover.png';
import FeastForOdinCover from '../assets/image/FeastForOdinCover.png';
import BrazilImperialCover from '../assets/image/BrazilImperialCover.png';
import LostRuinsOfArnakCover from '../assets/image/LostRuinsOfArnakCover.png';
import GreatWesternTrailCover from '../assets/image/GreatWesternTrailCover.png';

import { ReactComponent as GreatWesternTrailLogo } from '../assets/svg/greatWesternTrail/logo.svg';
import { ReactComponent as LostRuinsOfArnakLogo } from '../assets/svg/lostRuinsOfArnak/logo.svg';
import { ReactComponent as FeastForOdinLogo } from '../assets/svg/feastForOdin/logo.svg';
import { ReactComponent as ArboretumLogo } from '../assets/svg/arboretum/logo.svg';
import { ReactComponent as CascadiaLogo } from '../assets/svg/cascadia/logo.svg';

import cascadiaRoutes from '../_cascadia/mapping/routes';
import arboretumRoutes from '../_arboretum/mapping/routes';
import feastForOdinRoutes from '../_feastForOdin/mapping/routes';
import greatWesternTrailRoutes from '../_greatWesternTrail/mapping/routes';
import lostRuinsOfArnakRoutes from '../_lostRuinsOfArnak/mapping/routes';

const gamesMapping = {
  ARBORETUM: {
    id: 'arboretum',
    title: 'Arboretum',
    theme: 'theme-arboretum',
    cover: ArboretumCover,
    routes: arboretumRoutes,
    logo: ArboretumLogo
  },
  CASCADIA: {
    id: 'cascadia',
    title: 'Cascadia',
    theme: 'theme-cascadia',
    cover: CascadiaCover,
    routes: cascadiaRoutes,
    logo: CascadiaLogo
  },
  GREAT_WESTERN_TRAIL: {
    id: 'greatWesternTrail',
    title: 'Great Western Trail',
    theme: 'theme-great-western-trail',
    cover: GreatWesternTrailCover,
    routes: greatWesternTrailRoutes,
    logo: GreatWesternTrailLogo
  },
  BRAZIL_IMPERIAL: {
    id: 'brazilImperial',
    title: 'Brazil Imperial',
    cover: BrazilImperialCover,
    routes: []
  },
  FEAST_FOR_ODIN: {
    id: 'feastForOdin',
    title: 'Um Banquete à Odin',
    theme: 'theme-feast-for-odin',
    cover: FeastForOdinCover,
    routes: feastForOdinRoutes,
    logo: FeastForOdinLogo
  },
  LOST_RUINS_OF_ARNAK: {
    id: 'lostRuinsOfArnak',
    title: 'As Ruínas Perdidas de Arnak',
    theme: 'theme-lost-ruins-of-arnak',
    cover: LostRuinsOfArnakCover,
    routes: lostRuinsOfArnakRoutes,
    logo: LostRuinsOfArnakLogo
  }
};

export default gamesMapping;

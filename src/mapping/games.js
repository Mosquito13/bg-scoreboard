import CascadiaCover from '../assets/image/CascadiaCover.png';
import ArboretumCover from '../assets/image/ArboretumCover.png';
import FeastForOdinCover from '../assets/image/FeastForOdinCover.png';
import BrazilImperialCover from '../assets/image/BrazilImperialCover.png';
import GreatWesternTrailCover from '../assets/image/GreatWesternTrailCover.png';

import cascadiaRoutes from '../_cascadia/mapping/routes';
import arboretumRoutes from '../_arboretum/mapping/routes';
import greatWesternTrailRoutes from '../_greatWesternTrail/mapping/routes';

const gamesMapping = {
  ARBORETUM: {
    id: 'arboretum',
    title: 'Arboretum',
    cover: ArboretumCover,
    routes: arboretumRoutes
  },
  CASCADIA: {
    id: 'cascadia',
    title: 'Cascadia',
    cover: CascadiaCover,
    routes: cascadiaRoutes
  },
  GREAT_WESTERN_TRAIL: {
    id: 'greatWesternTrail',
    title: 'Great Western Trail',
    cover: GreatWesternTrailCover,
    routes: greatWesternTrailRoutes
  },
  BRAZIL_IMPERIAL: {
    id: 'brazilImperial',
    title: 'Brazil Imperial',
    cover: BrazilImperialCover,
    routes: []
  },
  FEAST_FOR_ODIN: {
    id: 'feastForOdin',
    title: 'Banquete à Odin',
    cover: FeastForOdinCover,
    routes: []
  }
};

export default gamesMapping;

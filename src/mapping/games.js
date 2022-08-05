import ArboretumCover from '../assets/image/ArboretumCover.png';
import FeastForOdinCover from '../assets/image/FeastForOdinCover.png';
import BrazilImperialCover from '../assets/image/BrazilImperialCover.png';
import GreatWesternTrailCover from '../assets/image/GreatWesternTrailCover.png';

import arboretumRoutes from '../arboretum/mapping/routes';

const gamesMapping = {
  ARBORETUM: {
    id: 'arboretum',
    title: 'Arboretum',
    cover: ArboretumCover,
    routes: arboretumRoutes
  },
  GREAT_WESTERN_TRAIL: {
    id: 'greatWesternTrail',
    title: 'Great Western Trail',
    cover: GreatWesternTrailCover,
    routes: []
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

import gamesMapping from '../../mapping/games';

const getSlice = (state) => state[gamesMapping.ARBORETUM.id];

export const getStep = (state) => getSlice(state).step;

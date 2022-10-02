import criteria from '../mapping/criteria';

export const findCriteriaIndex = (criteriaId) => {
  let criteriaIndex = undefined;

  Object.keys(criteria).forEach((key, index) => {
    if (criteriaIndex) return;

    if (criteria[key].id === criteriaId) {
      criteriaIndex = index;
    }
  });

  return criteriaIndex;
};

export const calculateHabitatBonus = (criteriaScore, playerCount) => {
  const [
    firstPlaceBonus,
    secondPlaceBonus,
    twoPlayerDrawBonus,
    threeOrFourPlayerDrawBonus
  ] = getBonusValues(playerCount);

  const parsedScore = criteriaScore.map((v) => parseInt(v, 10) || 0);

  const highestValue = Math.max(...parsedScore);
  const secondHighestValue = Math.max(...parsedScore.filter((v) => v !== highestValue));

  const countFirstPlace = parsedScore.filter((v) => v === highestValue).length;
  const countSecondPlace = parsedScore.filter((v) => v === secondHighestValue).length;

  const bonus = [0, 0, 0, 0];

  parsedScore.forEach((value, index) => {
    if (value === highestValue) {
      if (countFirstPlace === 1) {
        bonus[index] = firstPlaceBonus;
      } else if (countFirstPlace === 2) {
        bonus[index] = twoPlayerDrawBonus;
      } else {
        bonus[index] = threeOrFourPlayerDrawBonus;
      }
    } else if (value === secondHighestValue && countSecondPlace === 1) {
      bonus[index] = secondPlaceBonus;
    }
  });

  return bonus;
};

const getBonusValues = (playerCount) => {
  if (playerCount === 2) {
    return [2, 0, 1, 0];
  }

  return [3, 1, 2, 1];
};

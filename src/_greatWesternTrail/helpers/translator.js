export const moneyToScore = (money) =>
  parseInt(money / 5, 10);

export const cityToScore = (city) => {
  let score = 0;

  if (city.KANSAS_CITY) {
    score -= city.KANSAS_CITY * 6;
  }

  if (city.FULTON && city.ST_LOUIS) {
    score -= 3;
  }

  if (city.CHICAGO && city.TOLEDO) {
    score += 6;
  }

  if (city.TOLEDO && city.PITTSBURGH) {
    score += 8;
  }

  if (city.PITTSBURGH && city.PHILADELPHIA) {
    score += 4;
  }

  if (city.PHILADELPHIA) {
    score += 6;
  }

  if (city.NEW_YORK) {
    score += city.NEW_YORK * 9;
  }

  return score;
};

export const workerToScore = (worker) =>
  worker * 4;

export const playerBoardToScore = (hasUnlockedScore) =>
  hasUnlockedScore ? 3 : 0;

export const jobMarketToScore = (hasToken) =>
  hasToken ? 2 : 0;

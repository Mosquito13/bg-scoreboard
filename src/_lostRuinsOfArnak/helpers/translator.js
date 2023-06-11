import templeCriteria from '../mapping/temple';

export const templeToScore = (temple) => {
  let score = 0;

  Object.keys(templeCriteria).forEach((enumKey) => {
    const key = templeCriteria[enumKey].key;
    const quantity = temple[key] || 0;

    score += quantity * templeCriteria[enumKey].value;
  });

  return score;
};

export const idolToScore = (value) => parseInt(value, 10) * 3;

export const guardianToScore = (value) => parseInt(value, 10) * 5;

export const fearToScore = (value) => parseInt(value, 10) * -1;

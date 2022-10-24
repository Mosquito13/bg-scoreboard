export const crownToScore = (value) => (value ? 2 : 0);

export const penaltiesToScore = (value) => parseInt(value, 10) * -3;

export const mappingToScore = (mapping, storedValue) => {
  let score = 0;

  Object.values(mapping).forEach(({ key, value: mappedItemValue }) => {
    const valueByKey = parseInt(storedValue[key] || 0, 10);

    score += valueByKey * mappedItemValue;
  });

  return score;
};

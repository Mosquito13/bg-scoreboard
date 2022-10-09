import { useSelector } from 'react-redux';
import SvgWrapper from '../../common/components/SvgWrapper';
import { calculateHabitatBonus } from '../helpers';

import criteria from '../mapping/criteria';
import { getAll, getPlayerList } from '../redux/selectors';

const Result = () => {
  const playerList = useSelector(getPlayerList);
  const score = useSelector(getAll);

  const rows = [];
  const totals = [0, 0, 0, 0];

  Object.keys(criteria).forEach((key) => {
    const currentCriteria = criteria[key];
    const { IconCmp } = currentCriteria;
    let habitatBonus = [];

    if (currentCriteria.habitat) {
      habitatBonus = calculateHabitatBonus(score[currentCriteria.id], playerList.length);
    }

    rows.push(
      <div key={key} className="h-12 flex items-center justify-center bg-primary-alt odd:bg-primary">
        <div className="flex-[0_0_3rem] p-1 h-full">
          <SvgWrapper>
            <IconCmp />
          </SvgWrapper>
        </div>
        {playerList.map((player, index) => {
          const storedCriteriaScore = parseInt(score[currentCriteria.id][index], 10) || 0;
          let displayScore = `${storedCriteriaScore}`;

          totals[index] += storedCriteriaScore;

          if (currentCriteria.habitat) {
            totals[index] += habitatBonus[index];
            displayScore = `${displayScore}/${habitatBonus[index]}`;
          }

          return (
            <div key={`${key}_${index}`} className="flex-1 flex justify-end pr-2 text-xl font-bold">
              {displayScore}
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <div className="w-full max-h-full flex flex-col border-2 border-secondary rounded-md overflow-hidden">
      <div className="flex border-b-2 border-b-secondary text-lg font-semibold bg-secondary text-secondary-alt">
        <div className="flex-[0_0_3rem]" />
        {playerList.map((player, index) => (
          <div key={index} className="flex-1 flex justify-end mx-0.5 overflow-hidden">
            <span className="text-ellipsis whitespace-nowrap overflow-hidden">{player}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col overflow-y-auto">
        {rows}
      </div>
      <div className="flex border-t-2 border-t-secondary text-lg font-semibold bg-secondary text-secondary-alt">
        <div className="flex-[0_0_3rem]" />
        {playerList.map((player, index) => (
          <div key={index} className="flex-1 flex justify-end mx-0.5 pr-2">
            {totals[index] || 0}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;

import { useSelector } from 'react-redux';
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
    let habitatBonus = [];

    if (currentCriteria.habitat) {
      habitatBonus = calculateHabitatBonus(score[currentCriteria.id], playerList.length);
    }

    rows.push(
      <div key={key} className="h-12 flex items-center justify-center bg-indigo-900 odd:bg-indigo-800">
        <div className="flex-[0_0_3rem] p-1 overflow-hidden">
          {key}
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
    <div className="w-full max-h-full flex flex-col border-2 border-blue-400 rounded-md overflow-hidden">
      <div className="flex border-b-2 border-b-blue-400 text-lg font-semibold bg-slate-800">
        <div className="flex-[0_0_3rem]" />
        {playerList.map((player, index) => (
          <div key={index} className="flex-1 flex justify-end mx-0.5 overflow-hidden">
            <span className="text-ellipsis whitespace-nowrap overflow-hidden">{player}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col overflow-y-auto bg-indigo-900">
        {rows}
      </div>
      <div className="flex border-t-2 border-t-blue-400 text-lg font-semibold bg-slate-800">
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

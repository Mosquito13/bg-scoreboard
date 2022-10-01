import { useSelector } from 'react-redux';
import criteria from '../mapping/criteria';

import { getAll, getPlayerList } from '../redux/selectors';

const Result = () => {
  const playerList = useSelector(getPlayerList);
  const score = useSelector(getAll);

  const rows = [];
  const totals = [0, 0, 0, 0];

  Object.keys(criteria).forEach((key) => {
    const translator = criteria[key]?.translator;

    rows.push(
      <div key={key} className="h-12 flex items-center justify-center bg-indigo-900 odd:bg-indigo-800">
        <div className="flex-[0_0_3rem] p-1 overflow-hidden">
          {/* <div className="bg-slate-50 rounded-full p-0.5 border-2 border-slate-800"> */}
            {key}
          {/* </div> */}
        </div>
        {playerList.map((player, index) => {
          let storedPlayerCriteriaScore = score[criteria[key].key][index];
          let finalPlayerCriteriaScore = 0;

          if (typeof storedPlayerCriteriaScore === 'string') {
            storedPlayerCriteriaScore = parseInt(storedPlayerCriteriaScore, 10);
          }

          if (translator) {
            finalPlayerCriteriaScore = translator(storedPlayerCriteriaScore);
          } else if (storedPlayerCriteriaScore) {
            finalPlayerCriteriaScore += storedPlayerCriteriaScore;
          }

          totals[index] += finalPlayerCriteriaScore;

          return (
            <div key={`${key}_${index}`} className="flex-1 flex justify-end pr-2 text-xl font-bold">
              {finalPlayerCriteriaScore}
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
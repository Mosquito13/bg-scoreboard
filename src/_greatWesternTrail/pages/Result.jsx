import { useSelector } from 'react-redux';
import SvgWrapper from '../../common/components/SvgWrapper';
import criteria from '../mapping/criteria';

import { getAll, getPlayerList } from '../redux/selectors';

const Result = () => {
  const playerList = useSelector(getPlayerList);
  const score = useSelector(getAll);

  const rows = [];
  const totals = [0, 0, 0, 0];

  Object.keys(criteria).forEach((key) => {
    const translator = criteria[key]?.translator;
    const IconCmp = criteria[key].IconCmp;

    rows.push(
      <div key={key} className="h-12 flex items-center justify-center bg-primary odd:bg-primary-alt">
        <div className="flex-[0_0_3rem] h-full p-1 overflow-hidden">
          <SvgWrapper>
            <IconCmp />
          </SvgWrapper>
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
    <div className="w-full max-h-full flex flex-col border-2 border-secondary rounded-md overflow-hidden">
      <div className="flex border-b-2 border-b-secondary text-lg font-semibold bg-secondary text-white">
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
      <div className="flex border-t-2 border-t-secondary text-lg font-semibold bg-secondary text-white">
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

import { useSelector } from 'react-redux';
import SvgWrapper from '../../common/components/SvgWrapper';
import colorMapping from '../mapping/color';

import { getPlayerList, getScore } from '../redux/selectors';

const Result = () => {
  const score = useSelector(getScore);
  const playerList = useSelector(getPlayerList);

  const colorRows = [];
  const totals = [0, 0, 0, 0];

  Object.keys(colorMapping).forEach((colorKey) => {
    const { IconCmp } = colorMapping[colorKey];

    colorRows.push(
      <div key={colorKey} className="h-12 flex items-center justify-center bg-indigo-900 odd:bg-indigo-800">
        <div className="flex-[0_0_3rem] p-1">
          <div className="bg-slate-50 rounded-full p-0.5 border-2 border-slate-800">
            <SvgWrapper>
              <IconCmp />
            </SvgWrapper>
          </div>
        </div>
        {playerList.map((player, index) => {
          totals[index] += parseInt(score[colorKey][index], 10) || 0;

          return (
            <div key={`${colorKey}_${index}`} className="flex-1 flex justify-end pr-2 text-xl font-bold">
              {score[colorKey][index] || 0}
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
        {colorRows}
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
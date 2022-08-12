import { useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import StepButton, { TYPE_NEXT, TYPE_PREVIOUS } from '../../common/components/StepButton';
import NumberField from '../../common/components/Fields/NumberField';
import SvgWrapper from '../../common/components/SvgWrapper';

import { getPlayerList } from '../redux/selectors';
import colorMapping from '../mapping/color';
import { setPlayersScoreByColor } from '../redux';

const initialValues = ['', '', '', ''];

const Colors = () => {
  const { colorIndex } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const playerList = useSelector(getPlayerList);
  const [score, setScore] = useState(initialValues);

  const setScoreByIndex = useCallback((value, index) => {
    const newScore = [...score];

    newScore[index] = value;

    setScore(newScore);
  }, [score]);

  const colorKeys = Object.keys(colorMapping);
  const currentColor = colorKeys[colorIndex];
  const { title, hex, IconCmp } = colorMapping[currentColor];

  const colorStyle = { color: hex, borderColor: hex };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full h-16 flex items-center justify-between py-2 px-6 rounded-full border-4 bg-white text-2xl font-semibold whitespace-nowrap" style={colorStyle}>
        {title}
        <div className="h-full w-10">
          <SvgWrapper>
            <IconCmp />
          </SvgWrapper>
        </div>
      </div>
      <div className="w-full mt-4 flex flex-col">
        {playerList.map((name, index) => (
          <div key={index} className="flex mt-4">
            <div className="flex-1 flex items-center text-xl overflow-hidden">
              <span className="whitespace-nowrap text-ellipsis overflow-hidden">
                {name}
              </span>
            </div>
            <div className="flex-[0_0_5rem] ml-2">
              <NumberField
                min={0}
                value={score[index]}
                onChange={(value) => setScoreByIndex(value, index)}
              />
            </div>
          </div>
        ))}
      </div>
      <StepButton
        type={TYPE_PREVIOUS}
        onClick={() => navigate(-1)}
      />
      <StepButton
        type={TYPE_NEXT}
        onClick={() => {
          const nextIndex = parseInt(colorIndex, 10) + 1;
          let nextRoute = '../arboretum/result';

          if (colorKeys[nextIndex]) {
            nextRoute = `../arboretum/colors/${nextIndex}`;
          }

          dispatch(setPlayersScoreByColor({
            color: currentColor,
            score
          }));
          setScore(initialValues);
          navigate(nextRoute);
        }}
      />
    </div>
  );
};

export default Colors;

import { useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SvgWrapper from '../../common/components/SvgWrapper';

import PlayerScoreInput from '../../common/components/PlayerScoreInput';
import NavigationStep from '../../common/layouts/NavigationStep';
import colorMapping from '../mapping/color';
import { getPlayerList } from '../redux/selectors';
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

  const handleClickNext = useCallback(() => {
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
  }, [colorIndex, colorKeys, currentColor, score, dispatch, navigate]);

  return (
    <NavigationStep onClickNext={handleClickNext}>
      <div className="w-full h-16 flex items-center justify-between py-2 px-6 rounded-full border-4 bg-white text-2xl font-semibold whitespace-nowrap" style={colorStyle}>
        {title}
        <div className="h-full w-10">
          <SvgWrapper>
            <IconCmp />
          </SvgWrapper>
        </div>
      </div>
      <PlayerScoreInput
        players={playerList}
        score={score}
        onChange={(value, index) => setScoreByIndex(value, index)}
      />
    </NavigationStep>
  );
};

export default Colors;

import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import PlayerScoreInput from '../../common/components/PlayerScoreInput';
import NavigationStep from '../../common/layouts/NavigationStep';
import { getPlayerList } from '../redux/selectors';
import { setMoney } from '../redux';

const initialValues = [0, 0, 0, 0, 0];

const Money = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const playerList = useSelector(getPlayerList);
  const [score, setScore] = useState(initialValues);

  const setScoreByIndex = useCallback((value, index) => {
    const newScore = [...score];

    newScore[index] = value;

    setScore(newScore);
  }, [score]);

  const handleClickNext = useCallback(() => {
    dispatch(setMoney(score));
    navigate('../greatWesternTrail/building');
  }, [score, dispatch, navigate]);

  return (
    <NavigationStep onClickNext={handleClickNext}>
      <div className="w-full h-16 flex items-center justify-center text-2xl">
        Dólares
      </div>
      <PlayerScoreInput
        players={playerList}
        score={score}
        onChange={(value, index) => setScoreByIndex(value, index)}
      />
    </NavigationStep>
  );
};

export default Money;

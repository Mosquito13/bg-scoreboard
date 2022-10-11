import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import NavigationStep from '../../common/layouts/NavigationStep';
import PlayerScoreInput from '../../common/components/PlayerScoreInput';
import CriteriaTitle from '../components/CriteriaTitle';
import criteria from '../mapping/criteria';

import { getPlayerList } from '../redux/selectors';
import { setCattle } from '../redux';

const initialValues = [0, 0, 0, 0];

const Cattle = () => {
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
    dispatch(setCattle(score));
    navigate('../greatWesternTrail/objective');
  }, [score, dispatch, navigate]);

  return (
    <NavigationStep onClickNext={handleClickNext}>
      <CriteriaTitle {...criteria.CATTLE} />
      <PlayerScoreInput
        players={playerList}
        score={score}
        onChange={(value, index) => setScoreByIndex(value, index)}
      />
    </NavigationStep>
  );
};

export default Cattle;

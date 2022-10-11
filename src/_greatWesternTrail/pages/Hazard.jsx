import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import NavigationStep from '../../common/layouts/NavigationStep';
import PlayerScoreInput from '../../common/components/PlayerScoreInput';
import CriteriaTitle from '../components/CriteriaTitle';
import criteria from '../mapping/criteria';

import { getPlayerList } from '../redux/selectors';
import { setHazard } from '../redux';

const initialValues = [0, 0, 0, 0];

const Hazard = () => {
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
    dispatch(setHazard(score));
    navigate('../greatWesternTrail/cattle');
  }, [score, dispatch, navigate]);

  return (
    <NavigationStep onClickNext={handleClickNext}>
      <CriteriaTitle {...criteria.HAZARD} />
      <PlayerScoreInput
        players={playerList}
        score={score}
        onChange={(value, index) => setScoreByIndex(value, index)}
      />
    </NavigationStep>
  );
};

export default Hazard;

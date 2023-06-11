import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CriteriaTitle from '../../common/components/CriteriaTitle';
import PlayerScoreInput from '../../common/components/PlayerScoreInput';
import NavigationStep from '../../common/layouts/NavigationStep';
import criteria from '../mapping/criteria';

import { getPlayerList } from '../redux/selectors';
import { setGuardian } from '../redux';

const initialValues = [0, 0, 0, 0];

const Guardian = () => {
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
    dispatch(setGuardian(score));
    navigate('../lostRuinsOfArnak/item');
  }, [score, dispatch, navigate]);

  return (
    <NavigationStep onClickNext={handleClickNext}>
      <CriteriaTitle {...criteria.GUARDIAN} />
      <PlayerScoreInput
        players={playerList}
        score={score}
        onChange={(value, index) => setScoreByIndex(value, index)}
      />
    </NavigationStep>
  );
};

export default Guardian;

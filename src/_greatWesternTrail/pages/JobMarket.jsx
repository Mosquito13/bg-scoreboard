import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import NavigationStep from '../../common/layouts/NavigationStep';
import PlayerScoreInput, { TYPE_BOOLEAN } from '../../common/components/PlayerScoreInput';
import CriteriaTitle from '../../common/components/CriteriaTitle';
import criteria from '../mapping/criteria';

import { getPlayerList } from '../redux/selectors';
import { setJobMarket } from '../redux';

const initialValues = [false, false, false, false];

const JobMarket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const playerList = useSelector(getPlayerList);
  const [score, setScore] = useState(initialValues);

  const setScoreByIndex = useCallback((index) => {
    const newScore = [...initialValues];

    newScore[index] = !newScore[index];

    setScore(newScore);
  }, []);

  const handleClickNext = useCallback(() => {
    dispatch(setJobMarket(score));
    navigate('../greatWesternTrail/result');
  }, [score, dispatch, navigate]);

  return (
    <NavigationStep onClickNext={handleClickNext}>
      <CriteriaTitle {...criteria.JOB_MARKET} />
      <PlayerScoreInput
        players={playerList}
        score={score}
        onChange={setScoreByIndex}
        type={TYPE_BOOLEAN}
      />
    </NavigationStep>
  );
};

export default JobMarket;

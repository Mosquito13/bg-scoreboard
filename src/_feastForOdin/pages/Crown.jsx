import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PlayerScoreInput, { TYPE_BOOLEAN } from '../../common/components/PlayerScoreInput';
import NavigationStep from '../../common/layouts/NavigationStep';
import CriteriaTitle from '../../common/components/CriteriaTitle';
import positiveCriteria from '../mapping/positiveCriteria';

import { getPlayerList } from '../redux/selectors';
import { setScoreByTypeAndCriteria } from '../redux';

const initialValues = [false, false, false, false];

const Crown = () => {
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
    dispatch(setScoreByTypeAndCriteria({
      type: 'positive',
      criteria: positiveCriteria.CROWN.key,
      score
    }));
    navigate('../feastForOdin/negative-home');
  }, [score, dispatch, navigate]);

  return (
    <NavigationStep onClickNext={handleClickNext}>
      <CriteriaTitle title={positiveCriteria.CROWN.title} />
      <PlayerScoreInput
        score={score}
        players={playerList}
        onChange={setScoreByIndex}
        type={TYPE_BOOLEAN}
      />
    </NavigationStep>
  );
};

export default Crown;

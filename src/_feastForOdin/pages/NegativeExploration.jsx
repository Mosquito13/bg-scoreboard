import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PlayerScoreInput from '../../common/components/PlayerScoreInput';
import NavigationStep from '../../common/layouts/NavigationStep';
import CriteriaTitle from '../../common/components/CriteriaTitle';
import negativeCriteria from '../mapping/negativeCriteria';

import { getPlayerList } from '../redux/selectors';
import { setScoreByTypeAndCriteria } from '../redux';

const initialValues = [0, 0, 0, 0];

const NegativeExploration = () => {
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
    dispatch(setScoreByTypeAndCriteria({
      type: 'negative',
      criteria: negativeCriteria.EXPLORATION.key,
      score
    }));
    navigate('../feastForOdin/negative-houses');
  }, [score, dispatch, navigate]);

  return (
    <NavigationStep onClickNext={handleClickNext}>
      <CriteriaTitle title={negativeCriteria.EXPLORATION.title} />
      <PlayerScoreInput
        score={score}
        players={playerList}
        onChange={(value, index) => setScoreByIndex(value, index)}
      />
    </NavigationStep>
  );
};

export default NegativeExploration;

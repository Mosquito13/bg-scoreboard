import { useState } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import PlayerScoreInput from '../../common/components/PlayerScoreInput';
import NavigationStep from '../../common/layouts/NavigationStep';
import CriteriaTitle from '../../common/components/CriteriaTitle';

import criteria from '../mapping/criteria';

import { findCriteriaIndex } from '../helpers';
import { setCriteriaScore } from '../redux';
import { getPlayerList } from '../redux/selectors';

const initialValues = [0, 0, 0, 0];

const Criteria = () => {
  const { criteriaId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const playerList = useSelector(getPlayerList);
  const [score, setScore] = useState(initialValues);

  const criteriaKeys = Object.keys(criteria);
  const currentCriteriaIndex = findCriteriaIndex(criteriaId);
  const currentCriteria = criteria[criteriaKeys[currentCriteriaIndex]];
  const { title, IconCmp } = currentCriteria;

  const setScoreByIndex = useCallback((value, index) => {
    const newScore = [...score];

    newScore[index] = value;

    setScore(newScore);
  }, [score]);

  const handleClickNext = useCallback(() => {
    const nextCriteriaKey = criteriaKeys?.[currentCriteriaIndex + 1];
    const nextCriteria = criteria?.[nextCriteriaKey];

    dispatch(setCriteriaScore({
      criteriaId,
      score
    }));

    let nextRoute = '../cascadia/result';

    if (nextCriteria) {
      nextRoute = `../cascadia/criteria/${nextCriteria.id}`;
    }

    setScore(initialValues);
    navigate(nextRoute);
  }, [criteriaId, criteriaKeys, currentCriteriaIndex, dispatch, navigate, score]);

  return (
    <NavigationStep onClickNext={handleClickNext}>
      <CriteriaTitle title={title} IconCmp={IconCmp} />
      <PlayerScoreInput
        players={playerList}
        score={score}
        onChange={(value, index) => setScoreByIndex(value, index)}
      />
    </NavigationStep>
  );
};

export default Criteria;

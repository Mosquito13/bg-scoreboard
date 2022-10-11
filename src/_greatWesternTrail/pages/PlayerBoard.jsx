import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import NavigationStep from '../../common/layouts/NavigationStep';
import PlayerScoreInput, { TYPE_BOOLEAN } from '../../common/components/PlayerScoreInput';
import CriteriaTitle from '../components/CriteriaTitle';
import criteria from '../mapping/criteria';

import { getPlayerList } from '../redux/selectors';
import { setPlayerBoard } from '../redux';

const initialValues = [false, false, false, false];

const PlayerBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const playerList = useSelector(getPlayerList);
  const [score, setScore] = useState(initialValues);

  const setScoreByIndex = useCallback((index) => {
    const newScore = [...score];

    newScore[index] = !newScore[index];

    setScore(newScore);
  }, [score]);

  const handleClickNext = useCallback(() => {
    dispatch(setPlayerBoard(score));
    navigate('../greatWesternTrail/job-market');
  }, [score, dispatch, navigate]);

  return (
    <NavigationStep onClickNext={handleClickNext}>
      <CriteriaTitle {...criteria.PLAYER_BOARD} />
      <PlayerScoreInput
        players={playerList}
        score={score}
        onChange={setScoreByIndex}
        type={TYPE_BOOLEAN}
      />
    </NavigationStep>
  );
};

export default PlayerBoard;

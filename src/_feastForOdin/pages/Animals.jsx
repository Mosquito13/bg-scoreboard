import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Counter, { SIZE_SMALL } from '../../common/components/Counter';
import CriteriaTitle from '../../common/components/CriteriaTitle';
import NavigationStep from '../../common/layouts/NavigationStep';

import positiveCriteria from '../mapping/positiveCriteria';
import animals from '../mapping/animals';

import { setScoreByTypeAndCriteria } from '../redux';
import { getPlayerList } from '../redux/selectors';

const initialValues = {};

Object.values(animals).forEach(({ key }) => (initialValues[key] = 0));

const Animals = () => {
  const { playerIndex } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const playerList = useSelector(getPlayerList);
  const [score, setScore] = useState(initialValues);

  const handleChangeCounter = useCallback(
    (key, increment) => setScore({ ...score, [key]: score[key] + increment }),
    [score, setScore]
  );

  const handleClickNext = useCallback(() => {
    const index = parseInt(playerIndex, 10);

    dispatch(
      setScoreByTypeAndCriteria({
        type: 'positive',
        criteria: positiveCriteria.ANIMALS.key,
        score,
        index
      })
    );

    let nextRoute = '../feastForOdin/occupations';

    if (Boolean(playerList[index + 1])) {
      nextRoute = `../feastForOdin/animals/${index + 1}`;
    }

    setScore(initialValues);
    navigate(nextRoute);
  }, [dispatch, navigate, playerIndex, playerList, score, setScore]);

  return (
    <NavigationStep onClickNext={handleClickNext}>
      <CriteriaTitle title={positiveCriteria.ANIMALS.title} playerName={playerList[playerIndex]} />
      <div className="w-full flex flex-col mt-2">
        {Object.values(animals).map(({ key, title }) => (
          <div key={key} className="flex justify-between items-center">
            <div className="font-semibold">{title}</div>
            <Counter
              min={0}
              max={20}
              value={score[key]}
              onIncrease={() => handleChangeCounter(key, 1)}
              onDecrease={() => handleChangeCounter(key, -1)}
              size={SIZE_SMALL}
            />
          </div>
        ))}
      </div>
    </NavigationStep>
  );
};

export default Animals;

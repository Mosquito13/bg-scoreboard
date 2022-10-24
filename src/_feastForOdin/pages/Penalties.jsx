import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Counter, { SIZE_SMALL } from '../../common/components/Counter';
import CriteriaTitle from '../../common/components/CriteriaTitle';
import NavigationStep from '../../common/layouts/NavigationStep';
import negativeCriteria from '../mapping/negativeCriteria';

import { setScoreByTypeAndCriteria } from '../redux';
import { getPlayerList } from '../redux/selectors';

const initialValues = [0, 0, 0, 0];

const Penalties = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const playerList = useSelector(getPlayerList);
  const [score, setScore] = useState(initialValues);

  const handleChangeCounter = useCallback(
    (key, increment) => setScore({ ...score, [key]: score[key] + increment }),
    [score, setScore]
  );

  const handleClickNext = useCallback(() => {
    dispatch(
      setScoreByTypeAndCriteria({
        type: 'negative',
        criteria: negativeCriteria.PENALTIES.key,
        score
      })
    );

    setScore(initialValues);
    navigate('../feastForOdin/result');
  }, [dispatch, navigate, score, setScore]);

  return (
    <NavigationStep onClickNext={handleClickNext}>
      <CriteriaTitle title={negativeCriteria.PENALTIES.title} />
      <div className="w-full flex flex-col mt-2">
        {playerList.map((playerName, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="font-semibold">{playerName}</div>
            <Counter
              min={0}
              max={20}
              value={score[index]}
              onIncrease={() => handleChangeCounter(index, 1)}
              onDecrease={() => handleChangeCounter(index, -1)}
              size={SIZE_SMALL}
            />
          </div>
        ))}
      </div>
    </NavigationStep>
  );
};

export default Penalties;

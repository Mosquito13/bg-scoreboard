import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import BooleanField from '../../common/components/Fields/BooleanField';
import NavigationStep from '../../common/layouts/NavigationStep';
import CriteriaTitle from '../../common/components/CriteriaTitle';

import positiveCriteria from '../mapping/positiveCriteria';
import exploration from '../mapping/exploration';

import { setScoreByTypeAndCriteria } from '../redux';
import { getPlayerList } from '../redux/selectors';

const initialValues = {};

Object.values(exploration).forEach(({ key }) => (initialValues[key] = 0));

const Exploration = () => {
  const { playerIndex } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const playerList = useSelector(getPlayerList);
  const [score, setScore] = useState(initialValues);

  const handleChange = useCallback(
    (key) => setScore({ ...score, [key]: !score[key] ? 1 : 0 }),
    [setScore, score]
  );

  const handleClickNext = useCallback(() => {
    const index = parseInt(playerIndex, 10);

    dispatch(
      setScoreByTypeAndCriteria({
        type: 'positive',
        criteria: positiveCriteria.EXPLORATION.key,
        score,
        index
      })
    );

    let nextRoute = '../feastForOdin/houses/0';

    if (Boolean(playerList[index + 1])) {
      nextRoute = `../feastForOdin/exploration/${index + 1}`;
    }

    setScore(initialValues);
    navigate(nextRoute);
  }, [dispatch, navigate, playerIndex, playerList, score, setScore]);

  return (
    <NavigationStep onClickNext={handleClickNext}>
      <CriteriaTitle title={positiveCriteria.EXPLORATION.title} playerName={playerList[playerIndex]} />
      <div className="w-full flex flex-col mt-2">
        {Object.values(exploration).map(({ key, title }) => (
          <div key={key} className="flex justify-between items-center">
            <div className="font-semibold">{title}</div>
            <BooleanField
              checked={score[key]}
              onChange={() => handleChange(key)}
            />
          </div>
        ))}
      </div>
    </NavigationStep>
  );
};

export default Exploration;

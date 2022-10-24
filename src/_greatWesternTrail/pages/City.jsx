import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Counter, { SIZE_SMALL } from '../../common/components/Counter';

import NavigationStep from '../../common/layouts/NavigationStep';
import CriteriaTitle from '../../common/components/CriteriaTitle';
import criteria from '../mapping/criteria';
import cities from '../mapping/cities';

import { getPlayerList } from '../redux/selectors';
import { setCityByPlayer } from '../redux';

const City = () => {
  const { playerIndex } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const playerList = useSelector(getPlayerList);
  const [score, setScore] = useState({});

  const handleChangeCounter = useCallback(
    (cityKey, change) =>
      setScore({
        ...score,
        [cityKey]: (score[cityKey] || 0) + change
      }),
    [score]
  );

  const handleClickNext = useCallback(() => {
    const index = parseInt(playerIndex, 10);

    dispatch(setCityByPlayer({ index, score }));

    let nextRoute = '../greatWesternTrail/train-station';

    if (Boolean(playerList[index + 1])) {
      nextRoute = `../greatWesternTrail/city/${index + 1}`;
    }

    setScore({});
    navigate(nextRoute);
  }, [dispatch, navigate, playerIndex, playerList, score]);

  return (
    <NavigationStep onClickNext={handleClickNext}>
      <CriteriaTitle
        title={criteria.CITY.title}
        IconCmp={criteria.CITY.IconCmp}
        playerName={playerList[playerIndex]}
      />
      <div className="w-full flex flex-col mt-2">
        {Object.keys(cities).map((key) => {
          return (
            <div key={key} className="flex justify-between items-center">
              <div className="font-semibold">
                {cities[key].title}
              </div>
              <Counter
                min={0}
                max={['KANSAS_CITY', 'NEW_YORK'].includes(key) ? 10 : 1}
                value={score[key] || 0}
                onIncrease={() => handleChangeCounter(key, 1)}
                onDecrease={() => handleChangeCounter(key, -1)}
                size={SIZE_SMALL}
              />
            </div>
          );
        })}
      </div>
    </NavigationStep>
  );
};

export default City;

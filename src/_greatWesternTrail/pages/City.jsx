import { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Counter, { SIZE_SMALL } from '../../common/components/Counter';

import NavigationStep from '../../common/layouts/NavigationStep';
import cities from '../mapping/cities';
import { setCityByPlayer } from '../redux';
import { getPlayerList } from '../redux/selectors';

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
      <div className="w-full h-16 flex items-center justify-center text-2xl">
        {`Cidades - ${playerList[playerIndex]}`}
      </div>
      <div className="w-full flex flex-col">
        {Object.keys(cities).map((key) => {
          return (
            <div key={key} className="flex justify-between items-center">
              <div >
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

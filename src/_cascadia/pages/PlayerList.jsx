import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import SimplePlayerList from '../../common/pages/SimplePlayerList';
import GameSelectionContext from '../../common/contexts/GameSelection';

import { setPlayerList } from '../redux';

const PlayerList = () => {
  const { setGame } = useContext(GameSelectionContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => setGame('cascadia'), [setGame]);

  return (
    <SimplePlayerList
      min={2}
      max={4}
      onClickNext={(players) => {
        dispatch(setPlayerList(players));
        navigate('../cascadia/criteria/bear');
      }}
    />
  );
};

export default PlayerList;

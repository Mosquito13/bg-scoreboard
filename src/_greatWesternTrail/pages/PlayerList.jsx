import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import GameSelectionContext from '../../common/contexts/GameSelection';
import SimplePlayerList from '../../common/pages/SimplePlayerList';
import { setPlayerList } from '../redux';

const PlayerList = () => {
  const { setGame } = useContext(GameSelectionContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => setGame('greatWesternTrail'), [setGame]);

  return (
    <SimplePlayerList
      min={2}
      max={4}
      onClickNext={(players) => {
        dispatch(setPlayerList(players));
        navigate('../greatWesternTrail/money');
      }}
    />
  );
};

export default PlayerList;

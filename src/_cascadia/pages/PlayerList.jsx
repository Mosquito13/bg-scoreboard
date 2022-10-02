import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import SimplePlayerList from '../../common/pages/SimplePlayerList';

import { setPlayerList } from '../redux';

const PlayerList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

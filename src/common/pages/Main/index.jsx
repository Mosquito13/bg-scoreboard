import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import gamesMapping from '../../../mapping/games';
import GameCover from '../../components/GameCover';
import './styles.scss';

const MainPage = () => {
  const navigate = useNavigate();

  const games = [];

  Object.keys(gamesMapping).forEach((key) => {
    const { id, cover } = gamesMapping[key];

    games.push(
      <GameCover
        key={id}
        id={id}
        cover={cover}
        onClick={() => navigate(`/game/${id}`)}
      />
    )
  });

  return (
    <div className="main-page">
      {games}
    </div>
  );
};

export default MainPage;

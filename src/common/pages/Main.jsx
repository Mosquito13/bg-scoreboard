import { useNavigate } from 'react-router-dom';

import gamesMapping from '../../mapping/games';
import GameCover from '../components/GameCover';
import Carousel from '../components/Carousel';

const MainPage = () => {
  const navigate = useNavigate();

  const items = [];

  Object.keys(gamesMapping).forEach((key) => {
    const { id, title, cover } = gamesMapping[key];

    items.push({
      id,
      title,
      content: (
        <GameCover
          id={id}
          cover={cover}
          onClick={() => navigate(`/game/${id}`)}
        />
      )
    });
  });

  return (
    <div className="w-full h-full flex items-center">
      <Carousel items={items} />
    </div>
  );
};

export default MainPage;

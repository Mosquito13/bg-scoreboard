import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import GameSelectionContext from '../contexts/GameSelection';
import gamesMapping from '../../mapping/games';
import GameCover from '../components/GameCover';
import Carousel from '../components/Carousel';

const MainPage = () => {
  const navigate = useNavigate();
  const { setGame } = useContext(GameSelectionContext);

  const items = [];

  useEffect(() => setGame(null), [setGame]);

  Object.keys(gamesMapping).forEach((key) => {
    const { id, title, cover, routes: [firstRoute] } = gamesMapping[key];

    // FIXME: this is here while another game routes are uninplemented
    const { path } = firstRoute || {};

    const onSelectGame = () => navigate(path);

    items.push({
      id,
      title,
      onSelectGame,
      content: (
        <GameCover
          id={id}
          cover={cover}
          onClick={onSelectGame}
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

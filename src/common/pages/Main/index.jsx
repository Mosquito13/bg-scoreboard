import { useNavigate } from 'react-router-dom';

import gamesMapping from '../../../mapping/games';
import Carousel, { CarouselItem } from '../../components/Carousel';
import GameCover from '../../components/GameCover';

const MainPage = () => {
  const navigate = useNavigate();

  const games = [];

  Object.keys(gamesMapping).forEach((key) => {
    const { id, title, cover } = gamesMapping[key];

    // games.push(
    //   <GameCover
    //     key={id}
    //     id={id}
    //     cover={cover}
    //     onClick={() => navigate(`/game/${id}`)}
    //   />
    // )

    games.push(
      <CarouselItem key={id}>
        <img src={cover} />
      </CarouselItem>
    );
  });

  return (
    <div className="w-full h-full py-32 flex items-center">
      <Carousel>
        {games}
      </Carousel>
    </div>
  );
};

export default MainPage;

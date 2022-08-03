import gamesMapping from '../../../mapping/games';
import Carousel from '../../components/Carousel';

const MainPage = () => {
  // const navigate = useNavigate();

  const items = [];

  Object.keys(gamesMapping).forEach((key) => {
    const { id, title, cover } = gamesMapping[key];

    items.push({
      id,
      title,
      content: <img className="h-full" src={cover} alt={id} />
    });
  });

  return (
    <div className="w-full h-4/5 flex items-center">
      <Carousel items={items} />
    </div>
  );
};

export default MainPage;

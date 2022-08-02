import Image from '../Image';

const GameCover = ({ id, cover, onClick }) => {
  return (
    <div className="game-cover" onClick={onClick}>
      <Image source={cover} alt="xesq" />
    </div>
  );
};

export default GameCover;

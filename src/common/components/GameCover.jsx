import Image from './Image';

const GameCover = ({ id, cover, onClick }) => {
  return (
    <div onClick={onClick} className="group w-full h-full flex items-center justify-center transition cursor-pointer">
      <div className="w-3/4 h-3/4 flex justify-center">
        <Image source={cover} id={id} />
      </div>
    </div>
  );
};

export default GameCover;

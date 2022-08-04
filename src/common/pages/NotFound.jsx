import { ReactComponent as TravoltaImage } from '../../assets/svg/travolta.svg';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center text-center pt-8 text-indigo-100 font-londrina-sketch">
      <div className="text-9xl">404</div>
      <div className="text-4xl">Página não encontrada</div>
      <div className="w-3/4 opacity-30 absolute bottom-0 left-1/2 translate-x-[-50%] [&>svg]:w-full [&>svg]:h-full">
        <TravoltaImage />
      </div>
    </div>
  );
};

export default NotFoundPage;

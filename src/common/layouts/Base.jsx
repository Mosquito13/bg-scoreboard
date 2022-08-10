import { Outlet, useNavigate } from 'react-router-dom';
import Div100vh from 'react-div-100vh';

const BaseLayout = () => {
  const navigate = useNavigate();

  return (
    <Div100vh>
      <div className="w-full h-full overflow-hidden flex flex-col text-white bg-gradient-to-b from-indigo-900 to-blue-900">
        <div onClick={() => navigate('/')} className="flex-[0_0_5rem] flex items-center justify-center font-metal-mania text-5xl text-indigo-900 bg-gradient-to-b from-indigo-300 to-blue-300">
          BG Scoreboard
        </div>
        <div className="flex-1 p-4 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </Div100vh>
  );
};

export default BaseLayout;

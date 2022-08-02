import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col text-white bg-gradient-to-b from-indigo-900 to-blue-900">
      <div className="flex-[0_0_5rem] flex items-center justify-center text-indigo-900 text-4xl font-bold bg-indigo-300">
        BG ScoreBoard (wip)
      </div>
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;

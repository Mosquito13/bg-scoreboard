import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Div100vh from 'react-div-100vh';

import LogoBanner from '../components/LogoBanner';
import GameSelectionContext from '../contexts/GameSelection';
import gamesMapping from '../../mapping/games';

const BaseLayout = () => {
  const { game } = useContext(GameSelectionContext);

  const mappedGame = Object.values(gamesMapping).find(({ id }) => id === game);
  const theme = mappedGame?.theme || '';
  const logo = mappedGame?.logo;

  return (
    <Div100vh>
      <div className={`${theme} w-full h-full overflow-hidden flex flex-col bg-gradient-to-b from-primary to-primary-alt text-secondary font-inter select-none`}>
        <LogoBanner LogoCmp={logo} />
        <div className="flex-1 p-4 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </Div100vh>
  );
};

export default BaseLayout;

import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

import SvgWrapper from './SvgWrapper';
import NavigationButton from './NavigationButton';
import Sticked, { POSITION_TOP_RIGHT } from './Sticked';

const getDefaultLogo = (onClick) => (
  <div onClick={onClick} className="self-end">
    BG Scoreboard
  </div>
);

const getGameLogo = (LogoCmp) => (
  <SvgWrapper>
    <LogoCmp />
  </SvgWrapper>
);

const LogoBanner = ({ LogoCmp }) => {
  const navigate = useNavigate();

  const navigateToHome = () => navigate('/');

  return (
    <div className="flex-[0_0_5rem] flex items-center justify-center overflow-hidden text-5xl font-fredoka">
      {!LogoCmp && getDefaultLogo(navigateToHome)}
      {LogoCmp && (
        <div className="flex-1 h-full flex relative px-24">
          {getGameLogo(LogoCmp)}
          <Sticked position={POSITION_TOP_RIGHT}>
            <NavigationButton
              title="Home"
              IconCmp={FaHome}
              onClick={navigateToHome}
              borderless
            />
          </Sticked>
        </div>
      )}
    </div>
  );
};

export default LogoBanner;

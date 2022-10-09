import { useNavigate } from 'react-router-dom';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';

import NavigationButton from '../components/NavigationButton';
import Sticked, {
  POSITION_BOTTOM_LEFT,
  POSITION_BOTTOM_RIGHT
} from '../components/Sticked';

const NavigationStep = ({ onClickNext, children }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col items-center">
      {children}
      <Sticked position={POSITION_BOTTOM_LEFT}>
        <NavigationButton
          onClick={() => navigate(-1)}
          IconCmp={BsCaretLeftFill}
          title="Anterior"
        />
      </Sticked>
      <Sticked position={POSITION_BOTTOM_RIGHT}>
        <NavigationButton
          onClick={onClickNext}
          IconCmp={BsCaretRightFill}
          title="Próximo"
        />
      </Sticked>
    </div>
  );
};

export default NavigationStep;

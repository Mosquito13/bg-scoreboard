import { useNavigate } from 'react-router-dom';

import StepButton, { TYPE_NEXT, TYPE_PREVIOUS } from '../components/StepButton';

const NavigationStep = ({ onClickNext, children }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col items-center">
      {children}
      <StepButton type={TYPE_PREVIOUS} onClick={() => navigate(-1)} />
      <StepButton type={TYPE_NEXT} onClick={onClickNext} />
    </div>
  );
};

export default NavigationStep;

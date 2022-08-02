import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { nextStep, previousStep } from '../../redux';
import { getStep } from '../../redux/selectors';

import Button from '../../../common/components/Button';

const ArboretumMainPage = () => {
  const dispatch = useDispatch();
  const step = useSelector(getStep);

  const incrementStep = useCallback(() => {
    dispatch(nextStep());
  }, [dispatch]);

  const decrementStep = useCallback(() => {
    dispatch(previousStep());
  }, [dispatch]);

  return (
    <div className="arboretum-main-page">
      <h1>{step}</h1>
      <Button
        text="+"
        onClick={incrementStep}
      />
      <Button
        text="-"
        onClick={decrementStep}
      />
    </div>
  );
};

export default ArboretumMainPage;
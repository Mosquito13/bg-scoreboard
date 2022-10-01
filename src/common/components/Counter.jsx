import classNames from 'classnames';
import { FiMinus, FiPlus } from 'react-icons/fi';

import Button from './Button';

const SIZE_SMALL = 'sm';
const SIZE_MEDIUM = 'md';

const Counter = ({ value, onIncrease, onDecrease, min, max, size }) => {
  const btnSize = classNames(
    size === SIZE_MEDIUM && 'w-8 h-8',
    size === SIZE_SMALL && 'w-6 h-6'
  );

  const textSize = classNames(
    size === SIZE_MEDIUM && 'text-5xl',
    size === SIZE_SMALL && 'text-3xl'
  );

  return (
    <div className="flex items-center">
      <div className={`mr-5 ${btnSize}`}>
        <Button
          icon={<FiMinus />}
          text="Diminuir"
          onClick={onDecrease}
          disabled={value === min}
        />
      </div>
      <div className={textSize}>{value}</div>
      <div className={`ml-5 ${btnSize}`}>
        <Button
          icon={<FiPlus />}
          text="Aumentar"
          onClick={onIncrease}
          disabled={value === max}
        />
      </div>
    </div>
  );
};

export { SIZE_MEDIUM, SIZE_SMALL };
export default Counter;

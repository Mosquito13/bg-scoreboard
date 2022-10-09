import classNames from 'classnames';

const POSITION_BOTTOM_LEFT = 1;
const POSITION_BOTTOM_RIGHT = 2;
const POSITION_TOP_RIGHT = 3;

const Sticked = ({ position, children }) => {
  const classes = classNames(
    'fixed',
    position === POSITION_BOTTOM_LEFT && 'bottom-4 left-4',
    position === POSITION_BOTTOM_RIGHT && 'bottom-4 right-4',
    position === POSITION_TOP_RIGHT && 'top-2 right-2'
  );

  return <div className={classes}>{children}</div>;
};

export { POSITION_BOTTOM_LEFT, POSITION_BOTTOM_RIGHT, POSITION_TOP_RIGHT };
export default Sticked;

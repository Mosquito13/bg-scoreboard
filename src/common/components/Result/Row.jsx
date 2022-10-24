import classNames from 'classnames';

const TYPE_SCORE = 1;
const TYPE_HEADER = 2;
const TYPE_FOOTER = 3;
const TYPE_SUBTOTAL = 4;

const HEIGHT_UNSET = 1;
const HEIGHT_MD = 2;
const HEIGHT_LG = 3;

const Row = ({ type = TYPE_SCORE, height = HEIGHT_UNSET, children }) => {
  const classes = classNames(
    'flex items-center',
    type === TYPE_SCORE && 'bg-primary odd:bg-primary-alt',
    type === TYPE_HEADER && 'border-b-2 border-b-secondary bg-secondary text-white',
    type === TYPE_FOOTER && 'border-t-2 border-t-secondary bg-secondary text-white',
    type === TYPE_SUBTOTAL && 'bg-secondary-alt text-white',
    height === HEIGHT_MD && 'h-10',
    height === HEIGHT_LG && 'h-12'
  );

  return (
    <div className={classes}>{children}</div>
  );
};

export const rowType = {
  SCORE: TYPE_SCORE,
  HEADER: TYPE_HEADER,
  FOOTER: TYPE_FOOTER,
  SUBTOTAL: TYPE_SUBTOTAL
};
export const rowHeight = {
  MD: HEIGHT_MD,
  LG: HEIGHT_LG
};
export default Row;
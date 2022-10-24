import classNames from 'classnames';

const TYPE_CRITERIA = 1;
const TYPE_VALUE = 2;

const WIDTH_SM = 1;
const WIDTH_LG = 2;
const WIDTH_FLEX = 3;

const ALIGN_LEFT = 1;
const ALIGN_CENTER = 2;
const ALIGN_RIGHT = 3;

const Col = ({
  type = TYPE_VALUE,
  width = WIDTH_FLEX,
  align = ALIGN_RIGHT,
  contentIcon,
  children
}) => {
  const classes = classNames(
    'h-full flex items-center whitespace-nowrap text-ellipsis overflow-hidden',
    type === TYPE_VALUE && 'mx-1 text-lg font-semibold',
    type === TYPE_CRITERIA && 'm-1',
    width === WIDTH_FLEX && 'flex-1 ',
    width === WIDTH_SM && 'flex-[0_0_3rem]',
    width === WIDTH_LG && 'flex-[0_0_8rem]',
    align === ALIGN_LEFT && 'justify-start',
    align === ALIGN_CENTER && 'justify-center',
    align === ALIGN_RIGHT && 'justify-end',
    contentIcon && 'p-1'
  );

  return <div className={classes}>{children}</div>;
};

export const colType = {
  CRITERIA: TYPE_CRITERIA,
  VALUE: TYPE_VALUE
};
export const colWidth = {
  SM: WIDTH_SM,
  LG: WIDTH_LG
};
export const colAlign = {
  LEFT: ALIGN_LEFT,
  CENTER: ALIGN_CENTER,
  RIGHT: ALIGN_RIGHT
};
export default Col;

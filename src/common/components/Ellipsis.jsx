import classNames from 'classnames';

const Ellipsis = ({ smallText, children }) => {
  const classes = classNames(
    'text-ellipsis whitespace-nowrap overflow-hidden',
    smallText && 'text-sm'
  );

  return <span className={classes}>{children}</span>;
};

export default Ellipsis;

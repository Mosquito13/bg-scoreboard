import './styles.scss';

const Image = ({ alt, source }) => {
  return (
    <img alt={alt} className="image" src={source} />
  );
};

export default Image;

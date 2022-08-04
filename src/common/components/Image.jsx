const Image = ({ source, id }) => {
  return (
    <img
      className="max-h-full object-contain"
      src={source}
      alt={id}
    />
  );
};

export default Image;

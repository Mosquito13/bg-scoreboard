const SvgWrapper = ({ children }) => (
  <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full">{children}</div>
);

export default SvgWrapper;

const BooleanField = ({ checked, onChange, disabled }) => (
  <input
    className="w-11 h-11"
    type="checkbox"
    checked={checked}
    onChange={onChange}
  />
);

export default BooleanField;

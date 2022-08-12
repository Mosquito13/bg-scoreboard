import BaseField from './Base';

const TextField = ({ value, onChange, placeholder }) => (
  <BaseField
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default TextField;

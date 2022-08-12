import BaseField from './Base';

const NumberField = ({ value, onChange, min, max }) => (
  <BaseField
    type="number"
    inputMode="numeric"
    onChange={onChange}
    value={value}
    min={min}
    max={max}
  />
);

export default NumberField;

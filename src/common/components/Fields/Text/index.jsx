import { useCallback } from 'react';

const TextField = ({ value, onChange }) => {
  const handleChange = useCallback(
    (evt) => onChange(evt.target.value),
    [onChange]
  );

  return <input type="text" value={value} onChange={handleChange} />;
};

export default TextField;

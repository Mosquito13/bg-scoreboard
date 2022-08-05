import { useCallback } from 'react';

const TextField = ({ value, onChange, placeholder }) => {
  const handleChange = useCallback(
    (evt) => onChange(evt.target.value),
    [onChange]
  );

  return (
    <input
      className="w-full text-indigo-700 p-1 rounded-md border-2 border-indigo-500 bg-slate-50"
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default TextField;

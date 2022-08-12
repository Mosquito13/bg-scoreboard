import { useCallback } from 'react';

const BaseField = ({ onChange, ...otherProps }) => {
	const handleChange = useCallback(
		(evt) => onChange(evt.target.value),
		[onChange]
	);

	return (
		<input
			{...otherProps}
			onChange={handleChange}
			className="w-full p-2 rounded-md border-2 text-lg text-indigo-900 font-semibold border-blue-400"
		/>
	);
};

export default BaseField;

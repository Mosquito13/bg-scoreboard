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
			onFocus={(evt) => evt.target.select()}
			className="w-full p-2 rounded-md border-2 text-lg text-secondary font-semibold border-secondary bg-white placeholder:font-normal"
		/>
	);
};

export default BaseField;

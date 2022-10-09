import React from 'react';
import classNames from 'classnames';

const Button = ({ text, icon, onClick, disabled }) => {
	const classes = classNames(
		'w-full h-full flex items-center justify-center rounded-md border-2 transition relative selection-none',
		disabled && 'text-secondary-alt border-secondary-alt',
		!disabled && 'hover:brightness-125 active:brightness-75 active:translate-y-px',
		icon && 'text-lg'
	);

	return (
		<button
			type="button"
			title={text}
			onClick={onClick}
			className={classes}
			disabled={disabled}
		>
			{icon}
		</button>
	);
};

export default Button;

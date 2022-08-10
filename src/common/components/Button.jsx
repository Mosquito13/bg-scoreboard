import React from 'react';
import classNames from 'classnames';

const COLOR_GREEN = 1;
const COLOR_RED = 2;

const Button = ({ color, text, icon, onClick, disabled }) => {
	const classes = classNames(
		'w-full h-full flex items-center justify-center rounded-md border-2 text-white transition relative',
		disabled && 'text-slate-500 border-slate-500',
		!disabled && 'hover:brightness-125 active:brightness-75 active:translate-y-px',
		!disabled && color === COLOR_GREEN && 'bg-green-700 border-green-800',
		!disabled && color === COLOR_RED && 'bg-red-700 border-red-800',
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

export { COLOR_GREEN, COLOR_RED };
export default Button;

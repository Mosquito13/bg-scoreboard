import classNames from 'classnames';
import React from 'react';

const NavigationButton = ({ title, onClick, IconCmp, borderless = false }) => {
	const classes = classNames(
		'w-16 h-16 flex items-center justify-center rounded-full text-secondary text-4xl select-none',
		!borderless && 'border-2 border-secondary'
	);

	return (
		<button
			type="button"
			className={classes}
			onClick={onClick}
			title={title}
		>
			<IconCmp />
		</button>
	);
};

export default NavigationButton;

import React from 'react';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';

const TYPE_NEXT = 1;
const TYPE_PREVIOUS = 2;

const StepButton = ({ type, onClick }) => {
	const IconCmp = type === TYPE_NEXT ? BsCaretRightFill : BsCaretLeftFill;
	const title = type === TYPE_NEXT ? 'Próximo' : 'Anterior';

	return (
		<button
			type="button"
			title={title}
			onClick={onClick}
			className="fixed right-4 bottom-4 w-16 h-16 flex items-center justify-center rounded-full border-2 border-indigo-900 text-indigo-900 bg-blue-300 text-4xl"
		>
			<IconCmp />
		</button>
	);
};

export { TYPE_NEXT, TYPE_PREVIOUS };
export default StepButton;

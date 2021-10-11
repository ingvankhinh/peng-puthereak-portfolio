import React from 'react';
import { useCycle } from 'framer-motion';

const ModeToggler = () => {
	const [ mode, toggleMode ] = useCycle('light', 'dark');

	const icon = mode === 'dark' ? <i className="fas fa-moon" /> : <i className="fas fa-sun text-2xl" />;

	return (
		<button
			onClick={() => {
				if (window) {
					window.document.documentElement.classList.toggle('dark');
				}

				toggleMode();
			}}
			className="rounded-full text-dark-blue w-10 h-10 flex items-center justify-center hover:bg-dark-blue hover:bg-opacity-20 dark:hover:bg-champagne dark:hover:bg-opacity-20 dark:text-champagne"
		>
			{icon}
		</button>
	);
};

export default ModeToggler;

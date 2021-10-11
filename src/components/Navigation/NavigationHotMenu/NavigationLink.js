import React from 'react';
import { motion } from 'framer-motion';

const variants = {
	initial: { opacity: 0.2 },
	hover: { opacity: 1, x: 5 },
	tap: { x: 0 }
};

const NavigationLink = ({ children, current, href }) => {
	if (current) {
		return (
			<a href={href} className="mb-6 text-dark-blue p-3 dark:text-champagne lg:mb-0 lg:p-2">
				{children}
			</a>
		);
	}

	return (
		<motion.a
			href={href}
			className="mb-6 text-dark-blue p-3 dark:text-champagne lg:mb-0 lg:p-2"
			variants={variants}
			initial="initial"
			whileHover="hover"
			whileTap="tap"
		>
			{children}
		</motion.a>
	);
};

export default NavigationLink;

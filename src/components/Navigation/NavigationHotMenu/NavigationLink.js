import React from 'react';
import { motion } from 'framer-motion';

const NavigationLink = ({ children, current, href }) => {
	if (current) {
		return (
			<a href={href} className="mb-6 text-dark-blue p-3 dark:text-champagne">
				{children}
			</a>
		);
	}

	const variants = {
		default: { opacity: 0.2 },
		hover: { opacity: 1, x: 5 },
		tap: { x: 0 }
	};

	return (
		<motion.a
			href={href}
			className="mb-6 text-dark-blue p-3 dark:text-champagne"
			variants={variants}
			initial="default"
			whileHover="hover"
			whileTap="tap"
		>
			{children}
		</motion.a>
	);
};

export default NavigationLink;

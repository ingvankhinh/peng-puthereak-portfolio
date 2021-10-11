import React from 'react';
import { motion } from 'framer-motion';

const Button = (props) => {
	const { children, className } = props;

	return (
		<motion.button
			{...props}
			whileHover={{ y: -2 }}
			whileTap={{ y: 1 }}
			className={`w-max px-4 py-2 border-dark-blue border-1 border-opacity-40 dark:border-champagne lg:w-full text-opacity-60 text-dark-blue dark:text-champagne ${className}`}
		>
			{children}
		</motion.button>
	);
};

export default Button;

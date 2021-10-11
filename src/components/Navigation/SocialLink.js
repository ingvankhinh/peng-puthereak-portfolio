import React from 'react';
import { motion } from 'framer-motion';

const variants = {
	hover: {
		scale: 1.1,
		y: -0.5
	},
	tap: { scale: 0.9, y: 0 }
};

const SocialLink = ({ href, children }) => {
	return (
		<motion.a
			href={href}
			className="text-dark-blue text-opacity-40 dark:text-champagne hover:text-opacity-80"
			target="_blank"
			variants={variants}
			whileHover="hover"
			whileTap="tap"
		>
			{children}
		</motion.a>
	);
};

export default SocialLink;

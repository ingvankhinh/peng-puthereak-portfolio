import React from 'react';
import { motion } from 'framer-motion';

const SocialLink = ({ href, children }) => {
	return (
		<motion.a
			href={href}
			className="text-dark-blue text-opacity-40 dark:text-champagne hover:text-opacity-80"
			target="_blank"
			whileHover={{ scale: 1.1, y: -0.5 }}
			whileTap={{ scale: 0.9, y: 0 }}
		>
			{children}
		</motion.a>
	);
};

export default SocialLink;

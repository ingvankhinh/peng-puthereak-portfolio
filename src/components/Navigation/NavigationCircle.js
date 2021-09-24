import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const NavigationCircle = ({ active, top, left }) => {
	const control = useAnimation();

	useEffect(
		() => {
			if (active) {
				const { clientWidth, clientHeight } = window.document.body;
				const base = clientWidth > clientHeight ? clientWidth : clientHeight;
				control.start({ opacity: 1, scale: base / (64 / 2.2) });
			} else {
				control.stop();
				control.start({ opacity: 0, scale: 1 });
			}
		},
		[ active, control ]
	);

	return (
		<motion.div
			style={{ top, left, zIndex: '-1' }}
			className="absolute bg-champagne rounded-full w-16 h-16 dark:bg-dark-blue-light"
			animate={control}
			initial={{ opacity: 0 }}
			transition={{ duration: 1.4, ease: 'anticipate' }}
		/>
	);
};

export default NavigationCircle;

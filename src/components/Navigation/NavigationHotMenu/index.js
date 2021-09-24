import React, { useEffect } from 'react';
import NavigationLink from './NavigationLink';
import { motion, useAnimation } from 'framer-motion';

const NavigationHotMenu = ({ active }) => {
	const control = useAnimation();

	useEffect(
		() => {
			const controlAnimation = async () => {
				if (active) {
					await control.set({ display: '' });
					await control.start({ opacity: 1, x: [ -60, 0 ] });
				} else {
					await control.stop();
					await control.start({ opacity: 0, x: [ 0, -60 ] });
					await control.set({ display: 'none' });
				}
			};
			controlAnimation();
		},
		[ control, active ]
	);

	return (
		<div className="flex w-full h-full items-center px-28 py-10">
			<motion.div
				animate={control}
				initial={{ opacity: 0, display: 'none' }}
				transition={{ delay: 0.3, duration: 0.8, ease: 'anticipate' }}
				className="mr-32 text-4xl font-medium flex flex-col relative"
				style={{ top: '-15%' }}
			>
				<NavigationLink href="#" current>
					Home
				</NavigationLink>
				<NavigationLink href="#">Works</NavigationLink>
				<NavigationLink href="#">Credentials</NavigationLink>
				<NavigationLink href="#">Randoms</NavigationLink>
			</motion.div>

			<motion.div
				animate={control}
				className="h-full text-dark-blue text-opacity-80 relative flex-grow dark:text-champagne"
				style={{ top: '10%' }}
				initial={{ opacity: 0, display: 'none' }}
				transition={{ delay: 0.4, duration: 0.8, ease: 'anticipate' }}
			>
				<div className="mb-14">
					<h3 className="text-4xl font-semibold mb-8">Info</h3>
					<p className="mb-4">
						<i className="fas fa-phone-alt mr-2" />
						<span>0968435508</span>
					</p>
					<p className="mb-4">
						<i className="fas fa-home mr-2" />
						<span>Kirirom Institute Of Technology, Cambodia</span>
					</p>
					<p className="mb-4">
						<i className="fas fa-envelope mr-2" />
						<span>pengputhereak18@kit.edu.kh</span>
					</p>
				</div>
				<div className="w-2/5">
					<h3 className="text-4xl font-semibold mb-8">Contact</h3>
					<form className="flex flex-col">
						<input
							className="mb-4 border-dark-blue border-1 border-opacity-40 bg-transparent px-3 py-2 outline-none dark:border-champagne"
							placeholder="Name"
							type="text"
						/>
						<input
							className="mb-4 border-dark-blue border-1 border-opacity-40 bg-transparent px-3 py-2 outline-none dark:border-champagne"
							placeholder="Email"
							type="email"
						/>
						<textarea
							className="mb-4 border-dark-blue border-1 border-opacity-40 bg-transparent px-3 py-2 outline-none dark:border-champagne"
							placeholder="Subject"
							rows="5"
						/>
						<motion.button
							whileHover={{ y: -2 }}
							whileTap={{ y: 1 }}
							className="w-max px-4 py-2 border-dark-blue border-1 border-opacity-40 dark:border-champagne"
						>
							<i className="fas fa-arrow-up mr-2" />Submit
						</motion.button>
					</form>
				</div>
			</motion.div>
		</div>
	);
};

export default NavigationHotMenu;

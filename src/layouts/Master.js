import React from 'react';
import Navigation from '../components/Navigation';

const HypotheticalSetting = () => {
	return (
		<div>
			<button
				onClick={() => window.document.documentElement.classList.add('dark')}
				className="px-4 py-2 bg-dark-blue text-champagne rounded mr-2 dark:text-dark-blue dark:bg-champagne"
			>
				Dark mode
			</button>
			<button className="px-4 py-2 bg-dark-blue text-champagne rounded dark:text-dark-blue dark:bg-champagne">
				Setting
			</button>
		</div>
	);
};

const Master = ({ children }) => {
	return (
		<div className="min-h-screen bg-champagne bg-opacity-20 flex relative dark:bg-dark-blue dark:bg-opacity-100 overflow-hidden">
			<div className="h-full sticky top-0 left-0" style={{ zIndex: '500' }}>
				<Navigation />
			</div>
			<div className="flex-grow px-28 py-10 relative">
				<div className="fixed right-10" style={{ zIndex: '501' }}>
					<HypotheticalSetting />
				</div>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default Master;

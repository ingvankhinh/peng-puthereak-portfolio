import React from 'react';
import LanguageSelector from './LanguageSelector';
import ModeToggler from './ModeToggler';

const QuickSetting = () => {
	return (
		<div className="flex items-center">
			<div className="mr-2">
				<LanguageSelector />
			</div>
			<div>
				<ModeToggler />
			</div>
		</div>
	);
};

export default QuickSetting;

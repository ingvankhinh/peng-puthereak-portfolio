import React, { useState } from 'react';
import SocialLink from './SocialLink';
import NavigationCircle from './NavigationCircle';
import NavigationHotMenu from './NavigationHotMenu';

const iconClassNames = 'text-dark-blue text-opacity-40 dark:text-champagne hover:text-opacity-80';

const Navigation = () => {
	const [ active, setActive ] = useState(false);

	const onHamburgerClick = (event) => {
		const button = event.currentTarget;

		if (!button.disabled) {
			const icon = event.currentTarget.children[0];
			icon.classList.toggle('fa-bars');
			icon.classList.toggle('fa-times');
			setActive(!active);
			button.disabled = true;
			setTimeout(() => {
				button.disabled = false;
			}, 1000);
		}
	};

	return (
		<div className="relative">
			<div className="h-screen px-5 py-10 w-max border-r-1 border-dark-blue border-opacity-20 flex flex-col justify-between dark:border-champagne">
				<div />
				<div className="relative">
					<NavigationCircle active={active} top="-15px" left="-120%" />
					<button className="absolute" onClick={onHamburgerClick}>
						<i className={`fas fa-bars text-2xl ${iconClassNames}`} />
					</button>
				</div>
				<div className="flex flex-col items-center">
					<SocialLink href="#">
						<i className="fab fa-twitter mb-4" />
					</SocialLink>
					<SocialLink href="#">
						<i className="fab fa-instagram mb-4" />
					</SocialLink>
					<SocialLink href="#">
						<i className="fab fa-youtube mb-4" />
					</SocialLink>
					<SocialLink href="#">
						<i className="fab fa-facebook" />
					</SocialLink>
				</div>
			</div>
			<div
				className="absolute top-0 h-full"
				style={{ left: '58px', width: window.document.body.clientWidth - 58 }}
			>
				<NavigationHotMenu active={active} />
			</div>
		</div>
	);
};

export default Navigation;

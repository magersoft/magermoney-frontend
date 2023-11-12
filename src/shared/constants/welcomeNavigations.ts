export interface WelcomeNavigation {
	title: string;
	icon: string;
	path: string;
}

export const welcomeNavigations: WelcomeNavigation[] = [
	{
		title: 'Dashboard',
		icon: 'home-o',
		path: '/login'
	},
	{
		title: 'Settings',
		icon: 'setting-o',
		path: '/settings'
	}
];

export interface Navigation {
	title: string;
	icon: string;
	path: string;
}

export const loginNavigations: Navigation[] = [
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

export const mainNavigations: Navigation[] = [
	{
		title: 'Dashboard',
		icon: 'home-o',
		path: '/'
	},
	{
		title: 'Settings',
		icon: 'setting-o',
		path: '/settings'
	}
];

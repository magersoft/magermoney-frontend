import { AppPopups } from '@/app/popups';

export interface Navigation {
	title: string;
	icon: string;
	path?: string;
	children?: NavigationChildren[];
}

export interface NavigationChildren extends Navigation {
	popup?: AppPopups;
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
		title: 'History',
		icon: 'balance-list-o',
		path: '/history'
	},
	{
		title: 'Add',
		icon: 'plus',
		children: [
			{
				title: 'Income',
				icon: 'pending-payment',
				popup: AppPopups.AddIncome
			},
			{
				title: 'Expense',
				icon: 'paid',
				popup: AppPopups.AddExpense
			}
		]
	},
	{
		title: 'Transfer',
		icon: 'exchange',
		path: '/transfer'
	},
	{
		title: 'Settings',
		icon: 'setting-o',
		path: '/settings'
	}
];

import { Navigation } from '@/app/layouts/types';
import { AppPopups } from '@/app/popups';

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

import { RouteRecordRaw } from 'vue-router';

import { AppRoutes } from '@/app/router/constants';
import { authMiddleware, loginMiddleware } from '@/modules/auth';
import { welcomeMiddleware } from '@/modules/welcome';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: AppRoutes.Dashboard,
		meta: {
			middleware: [welcomeMiddleware, authMiddleware]
		},
		component: () =>
			import('@/modules/dashboard/ui/views/DashboardView/DashboardView.vue')
	},
	{
		path: '/login',
		name: AppRoutes.Login,
		meta: { layout: 'Login', middleware: loginMiddleware },
		component: () => import('@/modules/auth/ui/views/LoginView/LoginView.vue')
	},
	{
		path: '/welcome',
		name: AppRoutes.Welcome,
		meta: { middleware: [authMiddleware] },
		component: () =>
			import('@/modules/welcome/ui/views/WelcomeView/WelcomeView.vue')
	},
	{
		path: '/wallets',
		name: AppRoutes.Wallets,
		meta: { middleware: [authMiddleware] },
		component: () =>
			import('@/modules/wallets/ui/views/WalletsView/WalletsView.vue')
	},
	{
		path: '/wallets/:id',
		name: AppRoutes.Wallet,
		meta: { middleware: [authMiddleware] },
		component: () =>
			import('@/modules/wallets/ui/views/WalletView/WalletView.vue')
	},
	{
		path: '/incomes',
		name: AppRoutes.Incomes,
		meta: { middleware: [authMiddleware] },
		component: () =>
			import('@/modules/incomes/ui/views/IncomesView/IncomesView.vue')
	},
	{
		path: '/expenses',
		name: AppRoutes.Expenses,
		meta: { middleware: [authMiddleware] },
		component: () =>
			import('@/modules/expenses/ui/views/ExpensesView/ExpensesView.vue')
	},
	{
		path: '/history',
		name: AppRoutes.History,
		meta: { middleware: [authMiddleware] },
		component: () =>
			import('@/modules/history/ui/views/HistoryView/HistoryView.vue')
	},
	{
		path: '/settings',
		name: AppRoutes.Settings,
		component: () =>
			import('@/modules/settings/ui/views/SettingsView/SettingsView.vue')
	},
	{
		path: '/settings/income-sources',
		name: AppRoutes.IncomeSources,
		component: () =>
			import(
				'@/modules/incomeSources/ui/views/IncomeSourcesView/IncomeSourcesView.vue'
			)
	},
	{
		path: '/settings/expense-sources',
		name: AppRoutes.ExpenseSources,
		component: () =>
			import(
				'@/modules/expenseSources/ui/views/ExpenseSourcesView/ExpenseSourcesView.vue'
			)
	},
	{
		path: '/settings/saved-funds',
		name: AppRoutes.SavedFunds,
		component: () =>
			import('@/modules/savedFunds/ui/views/SavedFundsView/SavedFundsView.vue')
	},
	{
		path: '/settings/accumulation-funds',
		name: AppRoutes.AccumulationFunds,
		component: () =>
			import(
				'@/modules/accumulationFunds/ui/views/AccumulationFundsView/AccumulationFundsView.vue'
			)
	},
	{
		path: '/internal-server-error',
		name: AppRoutes.InternalServerError,
		component: () =>
			import(
				'@/shared/ui/views/InternalServerErrorView/InternalServerErrorView.vue'
			)
	},
	{
		path: '/:catchAll(.*)*',
		name: AppRoutes.NotFound,
		component: () => import('@/shared/ui/views/NotFoundView/NotFoundView.vue')
	}
];

export default routes;

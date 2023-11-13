import { RouteRecordRaw } from 'vue-router';

import { authMiddleware, loginMiddleware } from '@/app/auth';
import { AppRoutes } from '@/router/constants';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: AppRoutes.Dashboard,
		meta: {
			middleware: authMiddleware
		},
		component: () =>
			import('@/app/dashboard/ui/views/DashboardView/DashboardView.vue')
	},
	{
		path: '/login',
		name: AppRoutes.Login,
		meta: { layout: 'Welcome', middleware: loginMiddleware },
		component: () => import('@/app/auth/ui/views/LoginView/LoginView.vue')
	},
	{
		path: '/settings',
		name: AppRoutes.Settings,
		meta: { layout: 'Welcome' },
		component: () =>
			import('@/app/settings/ui/views/SettingsView/SettingsView.vue')
	}
];

export default routes;

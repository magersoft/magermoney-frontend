import { RouteRecordRaw } from 'vue-router';

import { authMiddleware, loginMiddleware } from '@/app/auth';
import { welcomeMiddleware } from '@/app/welcome';
import { AppRoutes } from '@/router/constants';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: AppRoutes.Dashboard,
		meta: {
			middleware: [welcomeMiddleware, authMiddleware]
		},
		component: () =>
			import('@/app/dashboard/ui/views/DashboardView/DashboardView.vue')
	},
	{
		path: '/login',
		name: AppRoutes.Login,
		meta: { layout: 'Login', middleware: loginMiddleware },
		component: () => import('@/app/auth/ui/views/LoginView/LoginView.vue')
	},
	{
		path: '/welcome',
		name: AppRoutes.Welcome,
		meta: { middleware: [authMiddleware] },
		component: () =>
			import('@/app/welcome/ui/views/WelcomeView/WelcomeView.vue')
	},
	{
		path: '/settings',
		name: AppRoutes.Settings,
		component: () =>
			import('@/app/settings/ui/views/SettingsView/SettingsView.vue')
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
		path: '/:catchAll(.*)',
		name: AppRoutes.NotFound,
		component: () => import('@/shared/ui/views/NotFoundView/NotFoundView.vue')
	}
];

export default routes;

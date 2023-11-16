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
		path: '/settings',
		name: AppRoutes.Settings,
		component: () =>
			import('@/modules/settings/ui/views/SettingsView/SettingsView.vue')
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

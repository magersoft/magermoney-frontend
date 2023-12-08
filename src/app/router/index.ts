import { createRouter, createWebHistory } from 'vue-router';

import { registerRouterLoader } from '@/app/router/routerLoader';
import { registerRouterMiddleware } from '@/app/router/routerMiddleware';

import routes from './routes';

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		return { top: 0 };
	}
});

registerRouterMiddleware(router);
registerRouterLoader(router);

export default router;

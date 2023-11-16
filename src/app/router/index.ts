import { createRouter, createWebHistory } from 'vue-router';

import { registerRouterLoader } from '@/app/router/routerLoader.ts';
import { registerRouterMiddleware } from '@/app/router/routerMiddleware.ts';

import routes from './routes.ts';

const router = createRouter({
	history: createWebHistory(),
	routes
});

registerRouterMiddleware(router);
registerRouterLoader(router);

export default router;

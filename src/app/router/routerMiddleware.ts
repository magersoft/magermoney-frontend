import { NavigationGuardNext, Router } from 'vue-router';

import { RouterContext } from '@/app/router/types';

export const registerRouterMiddleware = (router: Router) => {
	router.beforeEach((to, from, next) => {
		if (!to.meta.middleware) {
			return next();
		}

		const middleware = Array.isArray(to.meta.middleware)
			? to.meta.middleware
			: [to.meta.middleware];

		const context = {
			to,
			from,
			next,
			router
		};

		return middleware[0]({
			...context,
			next: nextFactory(context, middleware, 1)
		});
	});
};

function nextFactory(
	context: RouterContext,
	// eslint-disable-next-line no-unused-vars
	middleware: Array<(context: RouterContext) => NavigationGuardNext>,
	index: number
): NavigationGuardNext {
	const nextMiddleware = middleware[index];

	if (!nextMiddleware) {
		return context.next;
	}

	const nextPipeline = nextFactory(context, middleware, index + 1);
	return nextMiddleware({ ...context, next: nextPipeline });
}

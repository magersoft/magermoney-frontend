import { Router } from 'vue-router';

import { useRouterStore } from '@/router/store';

let initialized = false;

export const registerRouterLoader = (router: Router) => {
	router.beforeEach((_to, _from, next) => {
		const { setIsLoading } = useRouterStore();

		if (!initialized) {
			setIsLoading(true);
		}

		next();
	});

	router.afterEach(() => {
		const { setIsLoading } = useRouterStore();
		setIsLoading(false);
		initialized = true;
	});
};

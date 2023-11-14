import { Router } from 'vue-router';

import { useRouterStore } from '@/router/store';
import { useAppHeader } from '@/shared/ui/AppHeader/features';

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
		const { resetHeader } = useAppHeader();

		resetHeader();
		setIsLoading(false);
		initialized = true;
	});
};

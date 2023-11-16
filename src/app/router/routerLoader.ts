import { Router } from 'vue-router';

import { useRouterStore } from '@/app/router/store';
import { useAppHeader, useAppNav } from '@/shared/ui/components';

let initialized = false;

export const registerRouterLoader = (router: Router) => {
	router.beforeEach((_to, _from, next) => {
		const { setIsLoading } = useRouterStore();

		const { resetHeader } = useAppHeader();
		const { resetNav } = useAppNav();

		resetHeader();
		resetNav();

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

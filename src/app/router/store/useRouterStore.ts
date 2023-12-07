import { defineStore } from 'pinia';

import { RouterState } from '@/app/router/types';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const routerStore = defineStore('router', {
	state: (): RouterState => ({
		isLoading: false
	}),
	actions: {
		setIsLoading(value: boolean) {
			this.isLoading = value;
		}
	}
});

export const useRouterStore = () => useStoreAdapter(routerStore());

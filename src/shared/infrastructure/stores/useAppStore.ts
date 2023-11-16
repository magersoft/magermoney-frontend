import { defineStore } from 'pinia';

import {
	AppHeaderState,
	appInitialState,
	AppNavState,
	AppState
} from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const appStore = defineStore('app', {
	state: (): AppState => ({
		...appInitialState
	}),
	actions: {
		setHeader(header: AppHeaderState) {
			this.header = { ...this.header, ...header };
		},
		resetHeader() {
			this.header = { ...appInitialState.header };
		},
		setNav(nav: AppNavState) {
			this.nav = { ...this.nav, ...nav };
		},
		resetNav() {
			this.nav = { ...appInitialState.nav };
		}
	}
});

export const useAppStore = () => useStoreAdapter(appStore());

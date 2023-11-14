import { defineStore } from 'pinia';

import { appHeaderInitialState, AppHeaderState } from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const appHeaderStore = defineStore('appHeader', {
	state: (): AppHeaderState => ({
		...appHeaderInitialState
	}),
	actions: {
		setHeader(state: AppHeaderState) {
			this.title = state.title;
			this.textLeft = state.textLeft;
			this.isLeftArrow = state.isLeftArrow;
			this.isHidden = state.isHidden;

			this.onClickLeft = state.onClickLeft;
		}
	}
});

export const useAppHeaderStore = () => useStoreAdapter(appHeaderStore());

import { defineStore } from 'pinia';

import { AppPopups } from '@/app/popups';
import { PopupsState } from '@/app/popups/types';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const popupsStore = defineStore('popups', {
	state: (): PopupsState => ({
		popup: undefined,
		isShowed: false
	}),
	actions: {
		setShowed(value: boolean) {
			this.isShowed = value;
		},
		setPopup(popup: AppPopups) {
			this.popup = popup;
		},
		removePopup() {
			this.popup = undefined;
		}
	}
});

export const usePopupsStore = () => useStoreAdapter(popupsStore());

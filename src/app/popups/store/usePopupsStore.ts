import { defineStore } from 'pinia';

import { AppPopups } from '@/app/popups';
import { PopupOptions, PopupsState } from '@/app/popups/types';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const popupsStore = defineStore('popups', {
	state: (): PopupsState => ({
		popup: undefined,
		isShowed: false,
		options: null
	}),
	actions: {
		setShowed(value: boolean) {
			this.isShowed = value;
		},
		setPopup(popup: AppPopups, options?: PopupOptions) {
			this.popup = popup;
			this.options = options || null;
		},
		removePopup() {
			this.popup = undefined;
			this.options = null;
		}
	}
});

export const usePopupsStore = () => useStoreAdapter(popupsStore());

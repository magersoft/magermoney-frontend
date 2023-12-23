import { defineStore } from 'pinia';

import { NHistory } from '@/modules/history/domain';
import { fetchStateInitialState } from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const historyStore = defineStore('history', {
	state: (): NHistory.IState => ({
		...fetchStateInitialState,
		history: []
	}),
	actions: {
		setHistory(history: NHistory.IHistory[]) {
			this.history = history;
		},
		setIsLoading(value: boolean) {
			this.isLoading = value;
		},
		setError(error: NHistory.IError | null) {
			this.error = error;
		}
	}
});

export const useHistoryStore = () => useStoreAdapter(historyStore());

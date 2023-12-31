import { defineStore } from 'pinia';

import { NHistory } from '@/modules/history/domain';
import { fetchPaginatedStateInitialState } from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const historyStore = defineStore('history', {
	state: (): NHistory.IState => ({
		...fetchPaginatedStateInitialState,
		history: []
	}),
	actions: {
		setHistory(history: NHistory.IHistory[]) {
			this.history = history;
		},
		setIsLoading(value: boolean) {
			this.isLoading = value;
		},
		setIsFinished(value: boolean) {
			this.isFinished = value;
		},
		setPage(value: number) {
			this.page = value;
		},
		setPageSize(value: number) {
			this.pageSize = value;
		},
		setError(error: NHistory.IError | null) {
			this.error = error;
		}
	}
});

export const useHistoryStore = () => useStoreAdapter(historyStore());

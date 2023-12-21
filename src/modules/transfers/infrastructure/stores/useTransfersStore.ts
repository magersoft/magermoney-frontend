import { defineStore } from 'pinia';

import { NTransfers } from '@/modules/transfers/domain';
import { fetchStateInitialState } from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const transfersStore = defineStore('transfers', {
	state: (): NTransfers.IState => ({
		...fetchStateInitialState,
		transfers: [],
		transfer: null
	}),
	actions: {
		setTransfers(transfers: NTransfers.ITransfer[]) {
			this.transfers = transfers;
		},
		setTransfer(transfer: NTransfers.ITransfer) {
			this.transfer = transfer;
		},
		setIsLoading(value: boolean) {
			this.isLoading = value;
		},
		setError(error: NTransfers.IError | null) {
			this.error = error;
		}
	}
});

export const useTransfersStore = () => useStoreAdapter(transfersStore());

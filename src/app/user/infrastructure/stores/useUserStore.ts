import { defineStore } from 'pinia';

import { NUser, userInitialState } from '@/app/user/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const userStore = defineStore('user', {
	state: (): NUser.IState => ({
		...userInitialState
	}),
	actions: {
		setUser(user: NUser.IUser) {
			this.user = user;
		},
		setIsLoading(value: boolean) {
			this.isLoading = value;
		},
		setError(error: NUser.IError | null) {
			this.error = error;
		}
	}
});

export const useUserStore = () => useStoreAdapter(userStore());

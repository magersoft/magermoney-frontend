import { defineStore } from 'pinia';

import { NUsers, userInitialState } from '@/modules/users/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const usersStore = defineStore('users', {
	state: (): NUsers.IState => ({
		...userInitialState
	}),
	actions: {
		setUser(user: NUsers.IUser) {
			this.user = user;
		},
		setIsLoading(value: boolean) {
			this.isLoading = value;
		},
		setError(error: NUsers.IError | null) {
			this.error = error;
		}
	}
});

export const useUsersStore = () => useStoreAdapter(usersStore());

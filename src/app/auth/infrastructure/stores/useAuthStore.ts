import { defineStore } from 'pinia';

import { useStoreAdapter } from '@/shared/infrastructure/adapters';

import { NAuth } from '../../domain';

const authStore = defineStore('auth', {
	state: (): NAuth.IState => ({
		isAuthorization: false
	})
});

export const useAuthStore = () => useStoreAdapter(authStore());

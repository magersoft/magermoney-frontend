import { defineStore } from 'pinia';

import { useStoreAdapter } from '@/shared/infrastructure/adapters';

import { NAuth } from '../../domain';

const authStore = defineStore('auth', {
	persist: {
		paths: ['accessToken', 'expireDate', 'isAuthorization', 'user']
	},
	state: (): NAuth.IState => ({
		isLoading: false,
		isAuthorization: false,
		accessToken: '',
		expireDate: 0,
		user: null,
		error: null
	}),
	getters: {
		getIsAccessTokenExpired(state: NAuth.IState) {
			return Date.now() < state.expireDate;
		}
	},
	actions: {
		setIsLoading(value: boolean) {
			this.isLoading = value;
		},
		setError(error: NAuth.IError | null) {
			this.error = error;
		},
		setUser(user: NAuth.IDetectUser) {
			this.user = user;
		},
		setAuthTokens(data: NAuth.IVerifyUser) {
			if (!data) return this.resetAuthState();

			const { accessToken } = data;

			this.accessToken = accessToken;

			if (accessToken) {
				this.isAuthorization = true;
			}
		},
		resetAuthState() {
			this.isAuthorization = false;
			this.accessToken = '';
			this.expireDate = 0;

			this.resetUser();
		},
		resetError() {
			this.error = null;
		},
		resetUser() {
			this.user = null;
		}
	}
});

export const useAuthStore = () => useStoreAdapter(authStore());

import { defineStore } from 'pinia';
import { ConfigProviderTheme } from 'vant';

import { appConfig } from '@/app/config';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

import { NSettings } from '../../domain';

const settingsStore = defineStore('settings', {
	persist: true,
	state: (): NSettings.IState => ({
		theme: appConfig.defaultTheme as ConfigProviderTheme,
		lang: appConfig.defaultLanguage,
		currency: appConfig.defaultCurrency
	}),
	actions: {
		setTheme(theme: ConfigProviderTheme) {
			this.theme = theme;
		},
		setLang(lang: string) {
			this.lang = lang;
		},
		setCurrency(currency: string) {
			this.currency = currency;
		}
	}
});

export const useSettingsStore = () => useStoreAdapter(settingsStore());

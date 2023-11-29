import type { ConfigProviderTheme } from 'vant';

export namespace NSettings {
	export interface IState {
		currency: string;
		theme: ConfigProviderTheme;
		lang: string;
	}
}

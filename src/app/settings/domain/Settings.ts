import type { ConfigProviderTheme } from 'vant';

export namespace NSettings {
	export interface IState {
		theme: ConfigProviderTheme;
		lang: string;
	}
}

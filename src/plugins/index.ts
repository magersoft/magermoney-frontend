import { App } from 'vue';

import router from '../router';
import i18n from './i18n.ts';
import pinia from './pinia.ts';
import vant from './vant.ts';

export function registerPlugins(app: App) {
	app.use(router);
	app.use(pinia);
	app.use(i18n);
	app.use(vant);
}

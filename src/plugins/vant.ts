import 'vant/es/toast/style';

import { useStorage } from '@vueuse/core/index';
import { ConfigProvider as vant, Locale } from 'vant';
import { default as enUSVant } from 'vant/es/locale/lang/en-US';
import { default as ruRuVant } from 'vant/es/locale/lang/ru-RU';

import { appConfig } from '@/shared/config';

export const vantLangs: Record<string, any> = {
	'en-US': enUSVant,
	'ru-RU': ruRuVant
};

const storage = useStorage('settings', {
	lang: appConfig.defaultLanguage
});

Locale.use(unref(storage).lang, vantLangs[unref(storage).lang]);

export default vant;

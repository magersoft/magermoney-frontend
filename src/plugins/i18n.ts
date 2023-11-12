import { useStorage } from '@vueuse/core';
import { default as enUSVant } from 'vant/es/locale/lang/en-US';
import { default as ruRuVant } from 'vant/es/locale/lang/ru-RU';
import { createI18n } from 'vue-i18n';

import enUS from '@/locales/en-US';
import ruRU from '@/locales/ru-RU';
import { appConfig } from '@/shared/config';

export const langFiles: Record<string, any> = {
	'en-US': enUS,
	'ru-RU': ruRU
};

export const vantLangs: Record<string, any> = {
	'en-US': enUSVant,
	'ru-RU': ruRuVant
};

const storage = useStorage('settings', {
	lang: appConfig.defaultLanguage
});

const i18n = createI18n({
	legacy: false,
	locale: unref(storage).lang,
	fallbackLocale: appConfig.fallbackLanguage,
	messages: langFiles
});

export default i18n;

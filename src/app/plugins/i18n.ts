import { useStorage } from '@vueuse/core';
import { createI18n } from 'vue-i18n';

import { appConfig } from '@/app/config';
import enUS from '@/app/locales/en-US';
import ruRU from '@/app/locales/ru-RU';

export const langFiles: Record<string, any> = {
	'en-US': enUS,
	'ru-RU': ruRU
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

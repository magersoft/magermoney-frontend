import { Locale } from 'vant';
import { useI18n } from 'vue-i18n';

import { useSettingsStore } from '@/app/settings/infrastructure/stores';
import { vantLangs } from '@/plugins/vant';
import { appConfig } from '@/shared/config';

export function useLanguage() {
	const { lang, setLang } = useSettingsStore();
	const { locale } = useI18n();

	const languages = appConfig.availableLanguages.map((lang) => ({
		text: lang.name,
		value: lang.code
	}));

	const changeLanguage = (lang: string) => {
		setLang(lang);
		locale.value = lang;
		Locale.use(lang, vantLangs[lang]);
	};

	return { languages, lang, changeLanguage };
}

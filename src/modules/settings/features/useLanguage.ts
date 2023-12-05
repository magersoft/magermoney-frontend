import { Locale } from 'vant';
import { useI18n } from 'vue-i18n';

import { appConfig } from '@/app/config';
import { vantLangs } from '@/app/plugins/vant';
import { useSettingsStore } from '@/modules/settings/infrastructure/stores';
import { useUser } from '@/modules/users';

export function useLanguage() {
	const { lang, setLang } = useSettingsStore();
	const { locale } = useI18n();
	const { user, updateUser } = useUser();

	const languages = appConfig.availableLanguages.map((lang) => ({
		text: lang.name,
		value: lang.code
	}));

	const updateSystemLanguage = async (lang: string) => {
		setLang(lang);
		locale.value = lang;
		Locale.use(lang, vantLangs[lang]);
	};

	const updateUserLanguage = async (lang: string) => {
		if (!unref(user)) return;

		await updateUser({ showError: true }, { language: lang });
	};

	const changeLanguage = async (lang: string) => {
		await updateSystemLanguage(lang);
		await updateUserLanguage(lang);
	};

	watch(
		user,
		() => {
			if (unref(user)) {
				updateSystemLanguage(unref(user)!.language || unref(lang));
			}
		},
		{ immediate: true }
	);

	return { languages, lang, changeLanguage };
}

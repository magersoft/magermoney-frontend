import { useUser } from '@/modules/users';

import { useSettingsStore } from '../infrastructure/stores';

export function useTheme() {
	const { theme, setTheme } = useSettingsStore();
	const { user, updateUser } = useUser();

	const isDark = computed(() => unref(theme) === 'dark');

	const updateUserDarkMode = async (darkMode: boolean) => {
		if (!unref(user)) return;

		await updateUser({ showError: true }, { darkMode });
	};

	const toggleTheme = async () => {
		setTheme(unref(isDark) ? 'light' : 'dark');
		await updateUserDarkMode(unref(isDark));
	};

	watch(
		user,
		() => {
			if (unref(user)) {
				setTheme(unref(user)!.darkMode ? 'dark' : 'light');
			}
		},
		{ immediate: true }
	);

	return {
		isDark,
		theme,
		toggleTheme
	};
}

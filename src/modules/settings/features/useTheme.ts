import { useSettingsStore } from '../infrastructure/stores';

export function useTheme() {
	const { theme, setTheme } = useSettingsStore();
	const isDark = computed(() => unref(theme) === 'dark');

	const toggleTheme = () => {
		unref(setTheme(unref(isDark) ? 'light' : 'dark'));
	};

	return {
		isDark,
		theme,
		toggleTheme
	};
}

export default {
	apiBaseUrl: import.meta.env.VITE_APP_API_URL || 'http://localhost:3000',
	defaultLayout: 'Main',
	defaultLanguage: 'ru-RU',
	fallbackLanguage: 'en-US',
	defaultCurrency: 'RUB',
	defaultTheme: 'dark',
	debounceDelay: 1000,
	defaultPaginationPageSize: 10,
	minDate: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
	maxDate: new Date(new Date().getFullYear(), new Date().getMonth() + 2, 0),
	availableLanguages: [
		{
			name: 'Русский',
			code: 'ru-RU'
		},
		{
			name: 'English',
			code: 'en-US'
		}
	]
};

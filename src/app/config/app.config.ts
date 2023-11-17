export default {
	apiBaseUrl: import.meta.env.VITE_APP_API_URL || 'http://localhost:3000',
	defaultLayout: 'Main',
	defaultLanguage: 'ru-RU',
	fallbackLanguage: 'en-US',
	defaultCurrency: 'RUB',
	defaultTheme: 'dark',
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

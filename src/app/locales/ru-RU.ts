export default {
	loading: 'Загрузка',
	back: 'Назад',
	addMore: 'Добавить еще',
	continue: 'Продолжить',
	add: 'Добавить',
	delete: 'Удалить',
	edit: 'Редактировать',
	save: 'Сохранить',
	removing: 'Удаление',
	cancel: 'Отмена',
	done: 'OK',
	removedSuccessfully: 'Удалено успешно',
	removedFailed: 'Не удалось удалить',
	confirmRemoveContent: 'Вы уверены, что хотите удалить {entityName}?',
	currency: 'Валюта',
	noData: 'Нет данных',
	totalBalance: 'Общий баланс',
	viewAll: 'Показать все',
	incomes: 'Доходы',
	expenses: 'Расходы',
	monthlyBudget: 'Ежемесячный бюджет',
	restMonthlyBudget:
		'осталось {restAmountFormatted} из {monthlyBudgetFormatted}',
	auth: {
		phone: 'Телефон',
		email: 'Почта',
		submit: 'Войти',
		emailOrPhone: 'Email или телефон',
		authCode: 'Введите код из {where}',
		authCodeFromSms: 'SMS',
		authCodeFromEmail: 'почты',
		logout: 'Выйти'
	},
	incomeSource: {
		title: 'Источники ежемесячного дохода',
		description:
			'Укажите ваши ежемесячные доходы, это может быть ваша зарплата, пенсия, вклады и т.д.',
		stepName: 'Доходы',
		source: 'Источник',
		selectIncome: 'Выберите источник дохода',
		name: 'Название',
		enterIncome: 'Введите название дохода',
		other: 'Другое',
		amount: 'Сумма',
		enterAmount: 'Введите сумму',
		sourceOfIncome: 'Источники дохода',
		sourceOfIncomeDescription: 'Вы можете удалять источники дохода свайпом',
		removeTitle: 'Удалить источник дохода'
	},
	savedFunds: {
		title: 'Накопленные средства',
		description:
			'Укажите ваши накопления, это могут быть ваши сбережения, вклады и т.д.',
		stepName: 'Накопления',
		source: 'Место',
		selectSaved: 'Выберите место хранения',
		name: 'Название',
		enterSaved: 'Введите название',
		other: 'Другое',
		amount: 'Сумма',
		enterAmount: 'Введите сумму',
		sourceOfSaved: 'Места хранения',
		sourceOfSavedDescription: 'Вы можете удалять места хранения свайпом',
		removeTitle: 'Удалить накопление'
	},
	accumulationFunds: {
		title: 'Сохранение',
		description:
			'Укажите процент или сумму, которую вы хотите откладывать каждый месяц',
		percent: 'Процент',
		percentPlaceholder: 'Процент от дохода',
		amount: 'Сумма',
		amountPlaceholder: 'Сумма от дохода',
		stepName: 'Сохранение',
		percentOfMonthlyIncome: 'Процент от ежемесячного дохода',
		balanceInMonth: 'Остаток средств',
		balanceAccumulationInMonth: 'Остаток накоплений',
		removeTitle: 'Удалить сохранение'
	},
	expenseSources: {
		title: 'Ежемесячные расходы',
		description:
			'Укажите ваши ежемесячные расходы, это может быть аренда, коммунальные платежи, питание и т.д.',
		expense: 'Расход',
		name: 'Название',
		enterName: 'Введите название расхода',
		amount: 'Сумма',
		enterAmount: 'Введите сумму',
		other: 'Другое',
		selectTitle: 'Выберите категорию расходов',
		titleOfExpenses: 'Категории расходов',
		titleOfExpensesDescription: 'Вы можете удалять категории расходов свайпом',
		stepName: 'Расходы',
		removeTitle: 'Удалить расход'
	},
	settings: {
		app: 'Настойки приложения',
		darkMode: 'Темная тема',
		language: 'Язык',
		currency: 'Валюта',
		changeLanguage: 'Сменить язык',
		changeCurrency: 'Сменить валюту'
	},
	routes: {
		Dashboard: 'Главная',
		Login: 'Вход и регистрация',
		Settings: 'Настройки',
		Welcome: 'Добро пожаловать',
		InternalServerError: 'Внутренняя ошибка сервера'
	},
	nav: {
		Dashboard: 'Главная',
		Settings: 'Настройки'
	},
	validation: {
		required: 'Поле обязательно для заполнения',
		isEmail: 'Введите корректный email',
		isPhone: 'Введите корректный номер телефона'
	},
	currenciesNames: {
		RUB: 'Российский рубль',
		USD: 'Доллар США',
		EUR: 'Евро',
		GBP: 'Фунт стерлингов',
		CHF: 'Швейцарский франк',
		JPY: 'Японская иена',
		CNY: 'Китайский юань',
		AUD: 'Австралийский доллар',
		CAD: 'Канадский доллар',
		NZD: 'Новозеландский доллар',
		MXN: 'Мексиканское песо',
		ILS: 'Израильский шекель',
		KRW: 'Южнокорейская вона',
		PLN: 'Польский злотый',
		TRY: 'Турецкая лира',
		BRL: 'Бразильский реал',
		INR: 'Индийская рупия'
	}
};

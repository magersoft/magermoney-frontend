export default {
	loading: 'Загрузка',
	back: 'Назад',
	addMore: 'Добавить еще',
	continue: 'Продолжить',
	add: 'Добавить',
	delete: 'Удалить',
	edit: 'Редактировать',
	change: 'Изменить',
	save: 'Сохранить',
	removing: 'Удаление',
	cancel: 'Отмена',
	done: 'OK',
	confirm: 'Подтвердить',
	Other: 'Другое',
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
	currentBalance: 'Текущий баланс',
	sort: 'Сортировка',
	apply: 'Применить',
	notFoundView:
		'Ууупс... Вы попали куда-то не туда. Раздел не существует или был удален.',
	internalServerError: 'Внутренняя ошибка сервера',
	reload: 'Перезагрузить',
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
	addIncomeForm: {
		title: 'Заявить о доходе',
		description:
			'Вы можете заявить о доходе из ваших ежемесячных источников дохода или заявить о разовом доходе',
		income: 'Доход',
		selectIncome: 'Выберите дохода',
		singleIncome: 'Разовый доход',
		savedFund: 'Кошелек',
		selectSavedFund: 'Выберите место хранения',
		category: 'Категория',
		selectCategory: 'Выберите категорию',
		name: 'Название',
		enterIncome: 'Введите название дохода',
		amount: 'Сумма',
		enterAmount: 'Введите сумму',
		dateOfIssue: 'Дата получения',
		declare: 'Заявить',
		removeTitle: 'Удалить доход',
		systemMessages: {
			success: 'Доход успешно заявлен',
			fail: 'Не удалось заявить доход'
		}
	},
	addExpenseForm: {
		title: 'Заявить о расходе',
		description:
			'Вы можете заявить о расходе из ваших ежемесячных источников расхода или заявить о разовом расходе',
		expense: 'Расход',
		selectExpense: 'Выберите расход',
		singleExpense: 'Разовый расход',
		savedFund: 'Кошелек',
		selectSavedFund: 'Выберите место списание',
		category: 'Категория',
		selectCategory: 'Выберите категорию',
		name: 'Название',
		enterExpense: 'Введите название расхода',
		amount: 'Сумма',
		enterAmount: 'Введите сумму',
		dateOfIssue: 'Дата списания',
		declare: 'Заявить',
		removeTitle: 'Удалить расход',
		systemMessages: {
			success: 'Расход успешно заявлен',
			fail: 'Не удалось заявить расход'
		}
	},
	expensesView: {
		expense: 'Расход',
		removeTitle: 'Удалить расход'
	},
	wallets: {
		countOfWallets: 'У вас {count} {declination}',
		wallet1: 'кошелек',
		wallet2: 'кошелька',
		wallet5: 'кошельков',
		edit: 'Редактирование кошелька',
		add: 'Добавление нового кошелька',
		appearance: 'Внешний вид',
		description: 'Настройте название, сумму, валюту и внешний вид кошелька',
		titleEdit: 'Редактирование суммы',
		confirmEdit:
			'Вы уверены, что хотите изменить сумму кошелька? Это повлияет на учет ваших доходов и расходов',
		empty: 'У вас нет кошельков. Добавьте их, чтобы увидеть здесь список.',
		systemMessages: {
			success: 'Кошелек успешно сохранен',
			fail: 'Не удалось сохранить кошелек'
		}
	},
	settings: {
		app: 'Настойки приложения',
		darkMode: 'Темная тема',
		language: 'Язык',
		currency: 'Валюта',
		changeLanguage: 'Сменить язык',
		changeCurrency: 'Сменить валюту',
		editProfile: 'Редактирование профиля'
	},
	routes: {
		Dashboard: 'Главная',
		Login: 'Вход и регистрация',
		Settings: 'Настройки',
		Welcome: 'Добро пожаловать',
		Wallets: 'Кошельки',
		Wallet: 'Кошелек',
		History: 'История',
		Incomes: 'Доходы',
		Expenses: 'Расходы',
		IncomeSources: 'Источники дохода',
		ExpenseSources: 'Источники расхода',
		SavedFunds: 'Накопленные средства',
		AccumulationFunds: 'Процент накопления',
		NotFound: 'Поворот не туда',
		InternalServerError: 'Внутренняя ошибка сервера'
	},
	nav: {
		Dashboard: 'Главная',
		Settings: 'Настройки',
		Add: 'Добавить',
		Income: 'Доход',
		Expense: 'Расход',
		History: 'История',
		Transfer: 'Перевод'
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

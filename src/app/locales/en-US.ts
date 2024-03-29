export default {
	loading: 'Loading',
	back: 'Back',
	addMore: 'Add one more',
	continue: 'Continue',
	add: 'Add',
	delete: 'Delete',
	edit: 'Edit',
	save: 'Save',
	change: 'Edit',
	confirm: 'Confirm',
	removing: 'Removing',
	cancel: 'Cancel',
	done: 'Done',
	Other: 'Other',
	removedSuccessfully: 'Removed successfully',
	removedFailed: 'Removed failed',
	confirmRemoveContent: 'Are you sure you want to delete {entityName}?',
	currency: 'Currency',
	noData: 'No data',
	totalBalance: 'Total balance',
	viewAll: 'View all',
	incomes: 'Incomes',
	expenses: 'Expenses',
	wallet: 'Wallet',
	monthlyBudget: 'Monthly budget',
	currentBalance: 'Current balance',
	sort: 'Sort',
	apply: 'Apply',
	transferFunds: 'Transfer funds',
	notFoundView:
		'Oops... You got somewhere wrong. The section does not exist or has been deleted.',
	internalServerError: 'Internal server error',
	reload: 'Reload',
	restMonthlyBudget: '{restAmountFormatted} spent of {monthlyBudgetFormatted}',
	currencies: 'Currencies',
	month: 'Month',
	year: 'Year',
	day: 'Day',
	range: 'Range',
	selectRange: 'Select range',
	auth: {
		phone: 'Phone',
		email: 'Email',
		submit: 'Login',
		emailOrPhone: 'Email or phone',
		authCode: 'Enter code from {where}',
		authCodeFromSms: 'SMS',
		authCodeFromEmail: 'email',
		logout: 'Logout'
	},
	incomeSource: {
		title: 'Sources of monthly income',
		description:
			'Indicate your monthly income, this could be your salary, pension, deposits, etc.',
		stepName: 'Income',
		source: 'Source',
		selectIncome: 'Select source of income',
		name: 'Name',
		enterIncome: 'Enter name of income',
		other: 'Other',
		amount: 'Amount',
		enterAmount: 'Enter amount',
		sourceOfIncome: 'Source of income',
		sourceOfIncomeDescription:
			'You can edit or delete income sources by swiping',
		removeTitle: 'Remove income source'
	},
	savedFunds: {
		title: 'Saved funds',
		description:
			'Indicate your savings, this could be your savings, deposits, etc.',
		stepName: 'Saved',
		source: 'Storage',
		selectSaved: 'Select storage of fund',
		name: 'Name',
		enterSaved: 'Enter name of fund',
		other: 'Other',
		amount: 'Amount',
		enterAmount: 'Enter amount',
		sourceOfSaved: 'Storage of fund',
		sourceOfSavedDescription: 'You can delete storage of funds by swiping',
		removeTitle: 'Remove saved fund'
	},
	accumulationFunds: {
		title: 'Accumulation funds',
		description:
			'Specify the percentage or amount that you want to save each month',
		percent: 'Percent',
		percentPlaceholder: 'Percent of income',
		amount: 'Amount',
		amountPlaceholder: 'Amount of income',
		stepName: 'Percent',
		percentOfMonthlyIncome: 'Percent of monthly income',
		balanceInMonth: 'Balance',
		balanceAccumulationInMonth: 'Balance accumulation',
		removeTitle: 'Remove accumulation fund'
	},
	expenseSources: {
		title: 'Monthly expenses',
		description:
			'Specify your monthly expenses, it can be rent, utilities, food, etc.',
		expense: 'Expense',
		selectTitle: 'Select expense',
		name: 'Name',
		enterName: 'Enter name of expense',
		amount: 'Amount',
		enterAmount: 'Enter amount',
		other: 'Other',
		titleOfExpenses: 'Expenses',
		titleOfExpensesDescription: 'You can delete expenses by swiping',
		stepName: 'Expenses',
		removeTitle: 'Remove expense'
	},
	addIncomeForm: {
		title: 'Declare income',
		description:
			'You can declare income from your monthly income sources or declare a one-time income',
		income: 'Income',
		selectIncome: 'Select income',
		singleIncome: 'One-time income',
		monthlyIncome: 'Monthly income',
		savedFund: 'Wallet',
		selectSavedFund: 'Select wallet',
		category: 'Category',
		selectCategory: 'Select category',
		enterCategory: 'Enter name of category',
		name: 'Name',
		enterIncome: 'Enter name of income',
		amount: 'Amount',
		enterAmount: 'Enter amount',
		dateOfIssue: 'Date of issue',
		declare: 'Declare',
		removeTitle: 'Remove income',
		systemMessages: {
			success: 'Income declared successfully',
			fail: 'Income declaration failed'
		}
	},
	addExpenseForm: {
		title: 'Declare expense',
		description:
			'You can declare expenses from your monthly expenses sources or declare a one-time expense',
		expense: 'Expense',
		selectExpense: 'Select expense',
		singleExpense: 'One-time expense',
		monthlyExpense: 'Monthly expense',
		savedFund: 'Wallet',
		selectSavedFund: 'Select debit',
		category: 'Category',
		selectCategory: 'Select category',
		enterCategory: 'Enter name of category',
		name: 'Name',
		enterExpense: 'Enter name of expense',
		amount: 'Amount',
		enterAmount: 'Enter amount',
		dateOfIssue: 'Date of issue',
		declare: 'Declare',
		removeTitle: 'Remove expense',
		systemMessages: {
			success: 'Expense declared successfully',
			fail: 'Expense declaration failed'
		}
	},
	incomesView: {
		income: 'Income',
		removeTitle: 'Remove income',
		empty: 'You have no incomes. Add them to see the list here.'
	},
	expensesView: {
		expense: 'Expense',
		removeTitle: 'Remove expense',
		empty: 'You have no expenses. Add them to see the list here.'
	},
	currenciesView: {
		stepName: 'Currency',
		title: 'Select currencies',
		description: 'Select currencies that you want to use in your accounting',
		systemMessages: {
			success: 'Currencies saved successfully',
			fail: 'Failed to save currencies'
		}
	},
	categoriesView: {
		title: 'Edit categories',
		description: 'You can add, edit or delete your categories',
		category: 'Category',
		removeTitle: 'Remove category',
		empty: 'You have no categories. Add them to see the list here.'
	},
	categorySaveForm: {
		edit: 'Edit category',
		add: 'Add new category',
		name: 'Name',
		enterCategoryName: 'Enter category name'
	},
	monthlyBudgetView: {
		availableInDay: 'Available in day',
		saved: 'Saved'
	},
	historyView: {
		empty: 'You have no history. Add them to see the list here.'
	},
	wallets: {
		countOfWallets: 'You have {count} {declination}',
		wallet1: 'wallet',
		wallet2: 'wallets',
		wallet5: 'wallets',
		edit: 'Edit wallet',
		add: 'Add wallet',
		appearance: 'Appearance',
		description: 'Setup title, amount, currency and appearance of your wallet',
		titleEdit: 'Edit amount',
		confirmEdit:
			'Are you sure you want to change the amount of the wallet? This will affect the accounting of your income and expenses',
		empty: 'You have no wallets. Add them to see the list here.',
		systemMessages: {
			success: 'Wallet saved successfully',
			fail: 'Failed to save wallet'
		}
	},
	transfers: {
		title: 'Transfer money',
		description: 'You can transfer money between your wallets',
		from: 'From',
		to: 'To',
		selectFrom: 'Select debit wallet',
		selectTo: 'Select deposit wallet',
		amount: 'Amount',
		enterAmount: 'Enter amount',
		outcome: 'Outcome',
		income: 'Income',
		rate: 'Rate',
		submit: 'Transfer'
	},
	settings: {
		app: 'Application settings',
		darkMode: 'Dark mode',
		language: 'Language',
		currency: 'Currency',
		changeLanguage: 'Change language',
		changeCurrency: 'Change currency',
		editProfile: 'Edit profile'
	},
	routes: {
		Dashboard: 'Dashboard',
		Login: 'Sign in/Sign up',
		Settings: 'Settings',
		Welcome: 'Welcome',
		Wallets: 'Wallets',
		Wallet: 'Wallet',
		History: 'History',
		Incomes: 'Incomes',
		Expenses: 'Expenses',
		Transfers: 'Transfers',
		IncomeSources: 'Income sources',
		ExpenseSources: 'Expense sources',
		MonthlyBudget: 'Monthly budget',
		SavedFunds: 'Saved funds',
		AccumulationFunds: 'Percent of accumulation',
		Currencies: 'Currencies',
		Categories: 'Categories',
		NotFound: 'Not found',
		InternalServerError: 'Internal Server Error'
	},
	nav: {
		Dashboard: 'Home',
		Settings: 'Settings',
		Add: 'Add',
		Income: 'Income',
		Expense: 'Expense',
		History: 'History',
		Transfers: 'Transfers'
	},
	validation: {
		required: 'Field is required',
		isEmail: 'Field must be a valid email',
		isPhone: 'Field must be a valid phone number'
	}
};

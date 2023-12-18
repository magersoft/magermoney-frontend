export default {
	loading: 'Loading',
	back: 'Back',
	addMore: 'Add one more',
	continue: 'Continue',
	add: 'Add',
	delete: 'Delete',
	edit: 'Edit',
	save: 'Save',
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
	monthlyBudget: 'Monthly budget',
	currentBalance: 'Current balance',
	sort: 'Sort',
	apply: 'Apply',
	notFoundView:
		'Oops... You got somewhere wrong. The section does not exist or has been deleted.',
	internalServerError: 'Internal server error',
	reload: 'Reload',
	restMonthlyBudget: '{restAmountFormatted} spent of {monthlyBudgetFormatted}',
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
		stepName: 'Accumulation',
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
		savedFund: 'Saved fund',
		selectSavedFund: 'Select saved fund',
		category: 'Category',
		selectCategory: 'Select category',
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
		savedFund: 'Debit',
		selectSavedFund: 'Select debit',
		category: 'Category',
		selectCategory: 'Select category',
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
		IncomeSources: 'Income sources',
		ExpenseSources: 'Expense sources',
		SavedFunds: 'Saved funds',
		AccumulationFunds: 'Percent of accumulation',
		NotFound: 'Not found'
	},
	nav: {
		Dashboard: 'Home',
		Settings: 'Settings',
		Add: 'Add',
		Income: 'Income',
		Expense: 'Expense',
		History: 'History',
		Transfer: 'Transfer'
	},
	validation: {
		required: 'Field is required',
		isEmail: 'Field must be a valid email',
		isPhone: 'Field must be a valid phone number'
	}
};

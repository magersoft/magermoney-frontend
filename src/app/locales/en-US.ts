export default {
	loading: 'Loading',
	back: 'Back',
	addMore: 'Add one more',
	continue: 'Continue',
	add: 'Add',
	delete: 'Delete',
	edit: 'Edit',
	save: 'Save',
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
	incomesForm: {
		title: 'Declare income',
		description:
			'You can declare income from your monthly income sources or declare a one-time income',
		income: 'Income',
		selectIncome: 'Select income',
		singleIncome: 'One-time income',
		singleIncomeDescription: 'Select income category and enter amount',
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
	settings: {
		app: 'Application settings',
		darkMode: 'Dark mode',
		language: 'Language',
		currency: 'Currency',
		changeLanguage: 'Change language',
		changeCurrency: 'Change currency'
	},
	routes: {
		Dashboard: 'Dashboard',
		Login: 'Sign in/Sign up',
		Settings: 'Settings',
		Welcome: 'Welcome',
		AddIncome: 'Add income',
		InternalServerError: 'Internal server error'
	},
	nav: {
		Dashboard: 'Home',
		Settings: 'Settings',
		Add: 'Add',
		Income: 'Income',
		Expense: 'Expense'
	},
	validation: {
		required: 'Field is required',
		isEmail: 'Field must be a valid email',
		isPhone: 'Field must be a valid phone number'
	}
};

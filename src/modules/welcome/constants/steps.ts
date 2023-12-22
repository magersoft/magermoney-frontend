export enum WelcomeStepsType {
	CURRENCIES,
	INCOME_SOURCES,
	SAVED_FUNDS,
	ACCUMULATION_FUNDS,
	EXPENSE_SOURCES,
	FINISHED
}

export const welcomeSteps = [
	{
		title: 'currenciesView.stepName',
		type: WelcomeStepsType.CURRENCIES
	},
	{
		title: 'incomeSource.stepName',
		type: WelcomeStepsType.INCOME_SOURCES
	},
	{
		title: 'savedFunds.stepName',
		type: WelcomeStepsType.SAVED_FUNDS
	},
	{
		title: 'accumulationFunds.stepName',
		type: WelcomeStepsType.ACCUMULATION_FUNDS
	},
	{
		title: 'expenseSources.stepName',
		type: WelcomeStepsType.EXPENSE_SOURCES
	}
];

export const stepsComponents: Record<WelcomeStepsType, any> = {
	[WelcomeStepsType.CURRENCIES]: defineAsyncComponent(
		() =>
			import(
				'@/modules/welcome/ui/components/WelcomeCurrenciesStep/WelcomeCurrenciesStep.vue'
			)
	),
	[WelcomeStepsType.INCOME_SOURCES]: defineAsyncComponent(
		() =>
			import(
				'@/modules/welcome/ui/components/WelcomeIncomeSourceStep/WelcomeIncomeSourceStep.vue'
			)
	),
	[WelcomeStepsType.SAVED_FUNDS]: defineAsyncComponent(
		() =>
			import(
				'@/modules/welcome/ui/components/WelcomeSavedFundsStep/WelcomeSavedFundsStep.vue'
			)
	),
	[WelcomeStepsType.ACCUMULATION_FUNDS]: defineAsyncComponent(
		() =>
			import(
				'@/modules/welcome/ui/components/WelcomeAccumulationFundsStep/WelcomeAccumulationFundsStep.vue'
			)
	),
	[WelcomeStepsType.EXPENSE_SOURCES]: defineAsyncComponent(
		() =>
			import(
				'@/modules/welcome/ui/components/WelcomeExpenseSourcesStep/WelcomeExpenseSourcesStep.vue'
			)
	),
	[WelcomeStepsType.FINISHED]: defineAsyncComponent(
		() =>
			import(
				'@/modules/welcome/ui/components/WelcomeFinishedStep/WelcomeFinishedStep.vue'
			)
	)
};

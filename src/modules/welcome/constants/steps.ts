export enum WelcomeStepsType {
	INCOME_SOURCES,
	SAVED_FUNDS,
	ACCUMULATION_FUNDS,
	MONTHLY_EXPENSES,
	FINISHED
}

export const welcomeSteps = [
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
	{ title: 'monthlyExpenses.stepName', type: WelcomeStepsType.MONTHLY_EXPENSES }
];

export const stepsComponents: Record<WelcomeStepsType, any> = {
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
	[WelcomeStepsType.MONTHLY_EXPENSES]: defineAsyncComponent(
		() =>
			import(
				'@/modules/welcome/ui/components/WelcomeMonthlyExpensesStep/WelcomeMonthlyExpensesStep.vue'
			)
	),
	[WelcomeStepsType.FINISHED]: defineAsyncComponent(
		() =>
			import(
				'@/modules/welcome/ui/components/WelcomeFinishedStep/WelcomeFinishedStep.vue'
			)
	)
};

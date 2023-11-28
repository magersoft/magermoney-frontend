export enum WelcomeStepsType {
	INCOME_SOURCES,
	SAVED_FUNDS,
	ACCUMULATION_FUNDS
}

export const welcomeSteps = [
	{
		title: 'welcome.incomeSource.stepName',
		type: WelcomeStepsType.INCOME_SOURCES
	},
	{
		title: 'welcome.savedFunds.stepName',
		type: WelcomeStepsType.SAVED_FUNDS
	},
	{
		title: 'welcome.accumulationFunds.stepName',
		type: WelcomeStepsType.ACCUMULATION_FUNDS
	},
	{ title: 'welcome.monthlyExpense.stepName', type: 3 }
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
	)
};

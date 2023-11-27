export enum WelcomeStepsType {
	INCOME_SOURCES,
	ACCUMULATED_FUNDS,
	ACCUMULATION_FUNDS
}

export const welcomeSteps = [
	{
		title: 'welcome.incomeSource.stepName',
		type: WelcomeStepsType.INCOME_SOURCES
	},
	{
		title: 'welcome.accumulatedFunds.stepName',
		type: WelcomeStepsType.ACCUMULATED_FUNDS
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
	[WelcomeStepsType.ACCUMULATED_FUNDS]: defineAsyncComponent(
		() =>
			import(
				'@/modules/welcome/ui/components/WelcomeAccumulatedFundsStep/WelcomeAccumulatedFundsStep.vue'
			)
	),
	[WelcomeStepsType.ACCUMULATION_FUNDS]: defineAsyncComponent(
		() =>
			import(
				'@/modules/welcome/ui/components/WelcomeAccumulationFundsStep/WelcomeAccumulationFundsStep.vue'
			)
	)
};

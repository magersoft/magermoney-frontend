export enum WelcomeStepsType {
	INCOME_SOURCES,
	ACCUMULATED_FUNDS
}

export const welcomeSteps = [
	{ title: 'Доходы', type: WelcomeStepsType.INCOME_SOURCES },
	{ title: 'Накопления', type: WelcomeStepsType.ACCUMULATED_FUNDS },
	{ title: 'Откладывания', type: 2 },
	{ title: 'Расходы', type: 3 }
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
	)
};

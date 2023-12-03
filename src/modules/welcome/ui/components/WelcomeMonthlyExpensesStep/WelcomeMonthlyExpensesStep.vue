<script setup lang="ts">
import {
	MonthlyExpensesForm,
	MonthlyExpensesList
} from '@/modules/monthlyExpenses/ui/components';
import { useWelcomeSteps } from '@/modules/welcome';
import { WelcomeStepsType } from '@/modules/welcome/constants';
import { useWelcomeMonthlyExpensesStep } from '@/modules/welcome/ui/components/WelcomeMonthlyExpensesStep/features';

const { isLoading, onRefresh } = useWelcomeMonthlyExpensesStep();
const { setStep } = useWelcomeSteps();
</script>

<template>
	<van-pull-refresh :model-value="isLoading" @refresh="onRefresh">
		<monthly-expenses-form
			has-add-button
			has-back-button
			has-submit-button
			@click:back="setStep(WelcomeStepsType.ACCUMULATION_FUNDS)"
		/>
		<monthly-expenses-list />
	</van-pull-refresh>
</template>

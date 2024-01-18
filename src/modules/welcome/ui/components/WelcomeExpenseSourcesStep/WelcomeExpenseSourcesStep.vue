<script setup lang="ts">
import {
	ExpenseSourcesForm,
	ExpenseSourcesList,
	useExpenseSources
} from '@/modules/expenseSources';
import { useWelcomeSteps } from '@/modules/welcome';
import { WelcomeStepsType } from '@/modules/welcome/constants';

const { isLoading, fetchExpenseSources } = useExpenseSources();
const { setStep, handleFinished } = useWelcomeSteps();
</script>

<template>
	<van-pull-refresh
		:model-value="isLoading"
		@refresh="fetchExpenseSources({ force: true })"
	>
		<expense-sources-form
			has-add-button
			has-back-button
			has-submit-button
			@click:back="setStep(WelcomeStepsType.ACCUMULATION_FUNDS)"
			@click:submit="handleFinished"
		/>
		<expense-sources-list />
	</van-pull-refresh>
</template>

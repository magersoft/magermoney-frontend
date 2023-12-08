<script setup lang="ts">
import {
	ExpenseSourcesForm,
	ExpenseSourcesList
} from '@/modules/expenseSources/ui/components';
import { useWelcomeSteps } from '@/modules/welcome';
import { WelcomeStepsType } from '@/modules/welcome/constants';
import { useWelcomeExpenseSourcesStep } from '@/modules/welcome/ui/components/WelcomeExpenseSourcesStep/features';

const { isLoading, onRefresh } = useWelcomeExpenseSourcesStep();
const { setStep } = useWelcomeSteps();
</script>

<template>
	<van-pull-refresh :model-value="isLoading" @refresh="onRefresh">
		<expense-sources-form
			has-add-button
			has-back-button
			has-submit-button
			@click:back="setStep(WelcomeStepsType.ACCUMULATION_FUNDS)"
			@click:submit="setStep(WelcomeStepsType.FINISHED)"
		/>
		<expense-sources-list />
	</van-pull-refresh>
</template>

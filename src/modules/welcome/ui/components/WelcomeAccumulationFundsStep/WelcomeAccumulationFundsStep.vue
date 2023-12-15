<script setup lang="ts">
import {
	AccumulationFundsBalance,
	AccumulationFundsCircle,
	AccumulationFundsForm,
	useInitAccumulationFunds
} from '@/modules/accumulationFunds';
import { useWelcomeSteps } from '@/modules/welcome';
import { WelcomeStepsType } from '@/modules/welcome/constants';

const { isLoading, fetchInitAccumulationFunds } = useInitAccumulationFunds();
const { setStep } = useWelcomeSteps();
</script>

<template>
	<van-pull-refresh
		:model-value="isLoading"
		@refresh="fetchInitAccumulationFunds"
	>
		<accumulation-funds-form
			has-submit-button
			has-back-button
			@click:back="setStep(WelcomeStepsType.SAVED_FUNDS)"
			@click:submit="setStep(WelcomeStepsType.EXPENSE_SOURCES)"
		/>
		<accumulation-funds-circle />
		<accumulation-funds-balance />
	</van-pull-refresh>
</template>

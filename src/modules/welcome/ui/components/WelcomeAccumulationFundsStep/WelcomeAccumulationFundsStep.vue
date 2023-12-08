<script setup lang="ts">
import {
	AccumulationFundsBalance,
	AccumulationFundsCircle,
	AccumulationFundsForm
} from '@/modules/accumulationFunds/ui/components';
import { useWelcomeSteps } from '@/modules/welcome';
import { WelcomeStepsType } from '@/modules/welcome/constants';
import { useWelcomeAccumulationFundsStep } from '@/modules/welcome/ui/components/WelcomeAccumulationFundsStep/features';

const { isLoading, onRefresh } = useWelcomeAccumulationFundsStep();
const { setStep } = useWelcomeSteps();
</script>

<template>
	<van-pull-refresh :model-value="isLoading" @refresh="onRefresh">
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

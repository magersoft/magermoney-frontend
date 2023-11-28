<script setup lang="ts">
import {
	SavedFundsForm,
	SavedFundsList
} from '@/modules/savedFunds/ui/components';
import { useWelcomeSteps } from '@/modules/welcome';
import { WelcomeStepsType } from '@/modules/welcome/constants';
import { useWelcomeSavedFundsStep } from '@/modules/welcome/ui/components/WelcomeSavedFundsStep/features';

const { isLoading, onRefresh } = useWelcomeSavedFundsStep();
const { setStep } = useWelcomeSteps();
</script>

<template>
	<van-pull-refresh :model-value="isLoading" @refresh="onRefresh">
		<saved-funds-form
			has-add-button
			has-submit-button
			has-back-button
			@click:back="setStep(WelcomeStepsType.INCOME_SOURCES)"
			@click:submit="setStep(WelcomeStepsType.ACCUMULATION_FUNDS)"
		/>
		<saved-funds-list />
	</van-pull-refresh>
</template>

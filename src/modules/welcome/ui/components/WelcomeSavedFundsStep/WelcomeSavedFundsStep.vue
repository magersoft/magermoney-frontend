<script setup lang="ts">
import {
	SavedFundsForm,
	SavedFundsList,
	useSavedFunds
} from '@/modules/savedFunds';
import { useWelcomeSteps } from '@/modules/welcome';
import { WelcomeStepsType } from '@/modules/welcome/constants';

const { isLoading, fetchSavedFunds } = useSavedFunds();
const { setStep } = useWelcomeSteps();
</script>

<template>
	<van-pull-refresh
		:model-value="isLoading"
		@refresh="fetchSavedFunds({ force: true })"
	>
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

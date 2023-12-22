<script setup lang="ts">
import {
	IncomeSourceForm,
	IncomeSourcesList,
	useIncomeSources
} from '@/modules/incomeSources';
import { useWelcomeSteps } from '@/modules/welcome';
import { WelcomeStepsType } from '@/modules/welcome/constants';

const { isLoading, fetchIncomeSources } = useIncomeSources();
const { setStep } = useWelcomeSteps();
</script>

<template>
	<van-pull-refresh
		:model-value="isLoading"
		@refresh="fetchIncomeSources({ force: true })"
	>
		<income-source-form
			has-add-button
			has-submit-button
			has-back-button
			@click:submit="setStep(WelcomeStepsType.SAVED_FUNDS)"
			@click:back="setStep(WelcomeStepsType.CURRENCIES)"
		/>
		<income-sources-list />
	</van-pull-refresh>
</template>

<script setup lang="ts">
import AccumulationFundsForm from '@/modules/accumulationFunds/ui/components/AccumulationFundsForm/AccumulationFundsForm.vue';
import { useWelcomeSteps } from '@/modules/welcome';
import { WelcomeStepsType } from '@/modules/welcome/constants';

const { setStep } = useWelcomeSteps();
</script>

<template>
	<van-pull-refresh>
		<accumulation-funds-form
			has-add-button
			has-submit-button
			has-back-button
			@click:back="setStep(WelcomeStepsType.SAVED_FUNDS)"
		/>
	</van-pull-refresh>
</template>

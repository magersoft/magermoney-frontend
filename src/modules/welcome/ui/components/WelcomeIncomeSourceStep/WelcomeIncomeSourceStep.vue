<script setup lang="ts">
import { IncomeSourceForm, IncomeSourcesList } from '@/modules/incomeSources';
import { useWelcomeSteps } from '@/modules/welcome';
import { WelcomeStepsType } from '@/modules/welcome/constants';
import { useWelcomeIncomeSourceStep } from '@/modules/welcome/ui/components/WelcomeIncomeSourceStep/features';

const { isLoading, onRefresh } = useWelcomeIncomeSourceStep();
const { setStep } = useWelcomeSteps();
</script>

<template>
	<van-pull-refresh :model-value="isLoading" @refresh="onRefresh">
		<income-source-form
			has-add-button
			has-submit-button
			@click:submit="setStep(WelcomeStepsType.SAVED_FUNDS)"
		/>
		<income-sources-list />
	</van-pull-refresh>
</template>

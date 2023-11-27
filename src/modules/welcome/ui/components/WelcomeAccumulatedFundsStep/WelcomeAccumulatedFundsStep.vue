<script setup lang="ts">
import {
	AccumulatedFundsForm,
	AccumulatedFundsList
} from '@/modules/accumulatedFunds/ui/components';
import { useWelcomeAccumulatedFundsStep } from '@/modules/welcome/ui/components/WelcomeAccumulatedFundsStep/features';

const { isLoading, onRefresh } = useWelcomeAccumulatedFundsStep();
</script>

<template>
	<van-pull-refresh :model-value="isLoading" @refresh="onRefresh">
		<accumulated-funds-form continue-button />
		<accumulated-funds-list />
	</van-pull-refresh>
</template>

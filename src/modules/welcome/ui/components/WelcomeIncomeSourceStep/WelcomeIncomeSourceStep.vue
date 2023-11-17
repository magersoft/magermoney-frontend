<script setup lang="ts">
import { IncomeSourceForm, IncomeSourcesList } from '@/modules/incomeSource';
import { useWelcomeIncomeSourceStep } from '@/modules/welcome/ui/components/WelcomeIncomeSourceStep/features';

const { isLoading, onRefresh } = useWelcomeIncomeSourceStep();
</script>

<template>
	<van-pull-refresh :model-value="isLoading" @refresh="onRefresh">
		<income-source-form continue-button />
		<income-sources-list />
	</van-pull-refresh>
</template>

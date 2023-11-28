<script setup lang="ts">
import {
	SavedFundsForm,
	SavedFundsList
} from '@/modules/savedFunds/ui/components';
import { useWelcomeSavedFundsStep } from '@/modules/welcome/ui/components/WelcomeSavedFundsStep/features';

const { isLoading, onRefresh } = useWelcomeSavedFundsStep();
</script>

<template>
	<van-pull-refresh :model-value="isLoading" @refresh="onRefresh">
		<saved-funds-form continue-button />
		<saved-funds-list />
	</van-pull-refresh>
</template>

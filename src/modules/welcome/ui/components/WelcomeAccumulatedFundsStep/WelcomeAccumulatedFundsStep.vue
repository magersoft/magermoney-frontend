<script setup lang="ts">
import { AccumulatedFundsForm } from '@/modules/accumulatedFunds/ui/components';
</script>

<template>
	<van-pull-refresh>
		<accumulated-funds-form continue-button />
	</van-pull-refresh>
</template>

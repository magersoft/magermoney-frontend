<script setup lang="ts">
import { HistoryList } from '@/modules/history';

interface WalletHistoryProps {
	savedFundId?: number;
	isRefreshLoading?: boolean;
}

defineProps<WalletHistoryProps>();
</script>

<template>
	<history-list
		:saved-fund-id="savedFundId"
		:is-refresh-loading="isRefreshLoading"
		:class="$style['wallet-history']"
	/>
</template>

<style module lang="scss">
@import './styles/WalletHistory.module';
</style>

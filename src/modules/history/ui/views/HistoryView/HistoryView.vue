<script setup lang="ts">
import { HistoryFilters, HistoryList } from '@/modules/history/ui/components';
import { useHistoryList } from '@/modules/history/ui/components/HistoryList/features';

const { isLoading, isRefreshLoading, handleRefresh } = useHistoryList();

const disabledPullRefresh = ref(false);
</script>

<template>
	<van-pull-refresh
		:model-value="isRefreshLoading"
		:disabled="disabledPullRefresh || isLoading"
		:class="$style['history-view']"
		@refresh="handleRefresh"
	>
		<history-filters
			@calendar:opened="disabledPullRefresh = true"
			@calendar:closed="disabledPullRefresh = false"
		/>
		<history-list :is-refresh-loading="isRefreshLoading" />
	</van-pull-refresh>
</template>

<style module lang="scss">
@import './styles/HistoryView.module';
</style>

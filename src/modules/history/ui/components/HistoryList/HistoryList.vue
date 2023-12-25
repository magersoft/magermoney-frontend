<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useCurrencyFormat } from '@/modules/currencies';
import { useHistoryList } from '@/modules/history/ui/components/HistoryList/features';
import { AppCellTitle } from '@/shared/ui/components';

const {
	groupedHistory,
	isLoading,
	isRefreshLoading,
	isFinished,
	historyIcons,
	initialFetchData,
	handleRefresh,
	handleLoadMore
} = useHistoryList();

const { formatAmountWithCurrency } = useCurrencyFormat();
const { locale } = useI18n();

initialFetchData();
</script>

<template>
	<van-pull-refresh
		:model-value="isRefreshLoading"
		:class="$style['history-list']"
		@refresh="handleRefresh"
	>
		<van-list
			:loading="isLoading"
			:finished="isFinished"
			@load="handleLoadMore"
		>
			<div v-for="(item, idx) in groupedHistory" :key="idx + item.group">
				<app-cell-title :text="item.group.toUpperCase()" />
				<van-cell
					v-for="(history, historyIdx) in item.data"
					:key="historyIdx + history.dateOfIssue"
					:icon="historyIcons[history.type]"
					:title="history.title"
					:label="new Date(history.dateOfIssue).toLocaleDateString(locale)"
					:value="
						formatAmountWithCurrency(history.amount, history.currency.code)
					"
					:class="[
						$style['history-list__item'],
						$style[`history-list__item--${history.type}`]
					]"
				/>
			</div>
		</van-list>
	</van-pull-refresh>
</template>

<style module lang="scss">
@import './styles/HistoryList.module';
</style>

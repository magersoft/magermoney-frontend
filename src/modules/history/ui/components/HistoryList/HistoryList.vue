<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useCurrencyFormat } from '@/modules/currencies';
import { useHistoryList } from '@/modules/history/ui/components/HistoryList/features';
import {
	AppCellItem,
	AppCellSkeleton,
	AppCellTitle
} from '@/shared/ui/components';

interface HistoryListProps {
	savedFundId?: number;
	isRefreshLoading?: boolean;
}

const props = defineProps<HistoryListProps>();

const {
	groupedHistory,
	isLoading,
	isFinished,
	initialFetchData,
	handleLoadMore
} = useHistoryList({ savedFundId: props.savedFundId });

const { formatAmountWithCurrency } = useCurrencyFormat();
const { t, locale } = useI18n();

initialFetchData();
</script>

<template>
	<van-list
		:loading="isLoading"
		:finished="isFinished"
		:disabled="isRefreshLoading"
		:class="$style['history-list']"
		@load="handleLoadMore"
	>
		<div v-for="(item, idx) in groupedHistory" :key="idx + item.group">
			<app-cell-title :text="item.group.toUpperCase()" />
			<app-cell-item
				v-for="(history, historyIdx) in item.data"
				:key="historyIdx + history.dateOfIssue"
				:type="history.type"
				:title="history.title"
				:label="history.category.name"
				:description="`${history.source} - ${new Date(
					history.dateOfIssue
				).toLocaleDateString(locale)}`"
				:value="formatAmountWithCurrency(history.amount, history.currency.code)"
				show-icon
			/>
		</div>
		<app-cell-skeleton
			v-if="isRefreshLoading || isLoading"
			title
			row="10"
			:style="{ height: '66px' }"
		/>
		<van-empty
			v-if="!isRefreshLoading && !isLoading && !groupedHistory.length"
			image="search"
			:description="t('historyView.empty')"
		/>
	</van-list>
</template>

<style module lang="scss">
@import './styles/HistoryList.module';
</style>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useCurrencyFormat } from '@/modules/currencies';
import { useIncomesList } from '@/modules/incomes/ui/components/IncomesList/features';
import {
	AppCellItem,
	AppCellSkeleton,
	AppCellTitle
} from '@/shared/ui/components';

interface IncomesListProps {
	isRefreshLoading?: boolean;
}

defineProps<IncomesListProps>();

const { t, locale } = useI18n();
const { formatAmountWithCurrency } = useCurrencyFormat();

const {
	groupedIncomes,
	isLoading,
	isFinished,
	initialFetchData,
	handleLoadMore,
	handleRemove
} = useIncomesList();

initialFetchData();
</script>

<template>
	<van-list
		:loading="isLoading"
		:finished="isFinished"
		:disabled="isRefreshLoading"
		:class="$style['incomes-list']"
		@load="handleLoadMore"
	>
		<div v-for="(item, idx) in groupedIncomes" :key="idx + item.group">
			<app-cell-title :text="item.group.toUpperCase()" />
			<app-cell-item
				v-for="income in item.data"
				:key="income.id"
				type="income"
				:title="income.category.name"
				:label="income.category.name"
				:description="`${income.savedFund.source} - ${new Date(
					income.dateOfIssue
				).toLocaleDateString(locale)}`"
				:value="formatAmountWithCurrency(income.amount, income.currency.code)"
				removable
				@remove="() => handleRemove(income)"
			/>
		</div>
		<app-cell-skeleton
			v-if="isRefreshLoading || isLoading"
			title
			row="10"
			:style="{ height: '66px' }"
		/>
		<van-empty
			v-if="!isLoading && !groupedIncomes.length"
			image="search"
			:description="t('incomesView.empty')"
		/>
	</van-list>
</template>

<style module lang="scss">
@import './styles/IncomesList.module';
</style>

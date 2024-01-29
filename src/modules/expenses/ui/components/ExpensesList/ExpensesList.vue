<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useCurrencyFormat } from '@/modules/currencies';
import { useExpensesList } from '@/modules/expenses/ui/components/ExpensesList/features';
import {
	AppCellItem,
	AppCellSkeleton,
	AppCellTitle
} from '@/shared/ui/components';

interface ExpensesListProps {
	isRefreshLoading?: boolean;
}

defineProps<ExpensesListProps>();

const { t, locale } = useI18n();
const { formatAmountWithCurrency } = useCurrencyFormat();

const {
	groupedExpenses,
	isLoading,
	isFinished,
	initialFetchData,
	handleLoadMore,
	handleRemove
} = useExpensesList();

initialFetchData();
</script>

<template>
	<van-list
		:loading="isLoading"
		:finished="isFinished"
		:disabled="isRefreshLoading"
		:class="$style['expenses-list']"
		@load="handleLoadMore"
	>
		<div v-for="(item, idx) in groupedExpenses" :key="idx + item.group">
			<app-cell-title :text="item.group.toUpperCase()" />
			<app-cell-item
				v-for="expense in item.data"
				:key="expense.id"
				type="expense"
				:title="expense.title"
				:label="expense.category.name"
				:description="`${expense.savedFund.source} - ${new Date(
					expense.dateOfIssue
				).toLocaleDateString(locale)}`"
				:value="formatAmountWithCurrency(expense.amount, expense.currency.code)"
				removable
				@remove="() => handleRemove(expense)"
			/>
		</div>
		<app-cell-skeleton
			v-if="isRefreshLoading || isLoading"
			title
			row="10"
			:style="{ height: '66px' }"
		/>
		<van-empty
			v-if="!isRefreshLoading && !isLoading && !groupedExpenses.length"
			image="search"
			:description="t('expensesView.empty')"
		/>
	</van-list>
</template>

<style module lang="scss">
@import './styles/ExpensesList.module';
</style>

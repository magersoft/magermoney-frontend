<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useCurrencyFormat } from '@/modules/currencies';
import { useExpensesList } from '@/modules/expenses/ui/components/ExpensesList/features';
import { AppCellSkeleton, AppCellTitle } from '@/shared/ui/components';

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
			<van-swipe-cell v-for="expense in item.data" :key="expense.id">
				<van-cell
					:title="expense.category.name"
					:label="`${new Date(expense.dateOfIssue).toLocaleDateString(
						locale
					)} - ${expense.savedFund.source}`"
					:value="
						formatAmountWithCurrency(expense.amount, expense.currency.code)
					"
					:class="$style['expenses-list__item']"
				/>
				<template #right>
					<van-button
						square
						type="danger"
						:text="t('delete')"
						:style="{ height: '100%' }"
						@click="() => handleRemove(expense)"
					/>
				</template>
			</van-swipe-cell>
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

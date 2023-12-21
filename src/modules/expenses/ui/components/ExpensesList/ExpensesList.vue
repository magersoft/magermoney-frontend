<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useCurrencyFormat } from '@/modules/currencies';
import { useExpensesList } from '@/modules/expenses/ui/components/ExpensesList/features';
import { AppCellTitle } from '@/shared/ui/components';

const { t, locale } = useI18n();
const { formatAmountWithCurrency } = useCurrencyFormat();

const {
	groupedExpenses,
	isLoading,
	isFinished,
	isRefreshLoading,
	initialFetchData,
	handleLoadMore,
	handleRefresh,
	handleRemove
} = useExpensesList();

initialFetchData();
</script>

<template>
	<van-pull-refresh
		:model-value="isRefreshLoading"
		:class="$style['expenses-list']"
		@refresh="handleRefresh"
	>
		<van-list
			:loading="isLoading"
			:finished="isFinished"
			@load="handleLoadMore"
		>
			<div v-for="(item, idx) in groupedExpenses" :key="idx + item.group">
				<app-cell-title :text="item.group.toUpperCase()" />
				<van-swipe-cell v-for="expense in item.data" :key="expense.id">
					<van-cell
						:title="expense.title"
						:label="new Date(expense.dateOfIssue).toLocaleDateString(locale)"
						:value="
							formatAmountWithCurrency(expense.amount, expense.currency.code)
						"
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
			<van-empty
				v-if="!isLoading && !groupedExpenses.length"
				image="search"
				:description="t('expensesView.empty')"
			/>
		</van-list>
	</van-pull-refresh>
</template>

<style module lang="scss">
@import './styles/ExpensesList.module';
</style>

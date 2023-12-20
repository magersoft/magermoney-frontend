<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useCurrencyFormat } from '@/modules/currencies';
import { useIncomesList } from '@/modules/incomes/ui/components/IncomesList/features';
import { AppCellTitle } from '@/shared/ui/components';

const { t, locale } = useI18n();
const { formatAmountWithCurrency } = useCurrencyFormat();

const {
	groupedIncomes,
	isLoading,
	isFinished,
	isRefreshLoading,
	initialFetchData,
	handleLoadMore,
	handleRefresh,
	handleRemove
} = useIncomesList();

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
			<div v-for="(item, idx) in groupedIncomes" :key="idx + item.group">
				<app-cell-title :text="item.group.toUpperCase()" />
				<van-swipe-cell v-for="income in item.data" :key="income.id">
					<van-cell
						:title="income.title"
						:label="new Date(income.dateOfIssue).toLocaleDateString(locale)"
						:value="
							formatAmountWithCurrency(income.amount, income.currency.code)
						"
					/>
					<template #right>
						<van-button
							square
							type="danger"
							:text="t('delete')"
							:style="{ height: '100%' }"
							@click="() => handleRemove(income)"
						/>
					</template>
				</van-swipe-cell>
			</div>
		</van-list>
	</van-pull-refresh>
</template>

<style module lang="scss">
@import './styles/IncomesList.module';
</style>

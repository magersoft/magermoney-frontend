<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useCurrencyFormat } from '@/modules/currencies';
import { useIncomesList } from '@/modules/incomes/ui/components/IncomesList/features';
import { AppCellSkeleton, AppCellTitle } from '@/shared/ui/components';

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
			<van-swipe-cell v-for="income in item.data" :key="income.id">
				<van-cell
					:title="income.category.name"
					:label="`${new Date(income.dateOfIssue).toLocaleDateString(
						locale
					)} - ${income.savedFund.source}`"
					:value="formatAmountWithCurrency(income.amount, income.currency.code)"
					:class="$style['incomes-list__item']"
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

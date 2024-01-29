<script setup lang="ts">
import { useIncomesSummary } from '@/modules/incomes/ui/components/IncomesSummary/features';
import { AppSummaryWidget } from '@/shared/ui/components';

const {
	summaryIncomesByCategories,
	hasSummaryIncomesByCategories,
	totalIncomes,
	isLoading,
	initialFetchData
} = useIncomesSummary();

initialFetchData();
</script>

<template>
	<app-summary-widget
		v-if="hasSummaryIncomesByCategories || isLoading"
		type="income"
		:data="summaryIncomesByCategories"
		:total="totalIncomes?.amount"
		:currency="totalIncomes?.currency"
		:loading="isLoading"
	/>
</template>

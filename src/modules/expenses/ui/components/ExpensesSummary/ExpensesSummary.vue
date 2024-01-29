<script setup lang="ts">
import { useExpensesSummary } from '@/modules/expenses/ui/components/ExpensesSummary/features';
import { AppSummaryWidget } from '@/shared/ui/components';

const {
	summaryExpensesByCategories,
	hasSummaryExpensesByCategories,
	totalExpenses,
	isLoading,
	initialFetchData
} = useExpensesSummary();

initialFetchData();
</script>

<template>
	<app-summary-widget
		v-if="hasSummaryExpensesByCategories || isLoading"
		type="expense"
		:data="summaryExpensesByCategories"
		:total="totalExpenses?.amount"
		:currency="totalExpenses?.currency"
		:loading="isLoading"
	/>
</template>

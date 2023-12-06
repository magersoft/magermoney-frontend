<script setup lang="ts">
import {
	DashboardHeader,
	ExpensesWidget,
	IncomesWidget,
	MonthlyBudgetWidget,
	SavedFundsWidget,
	TotalBalanceWidget
} from '@/modules/dashboard/ui/components';
import { useInitDashboardView } from '@/modules/dashboard/ui/views/DashboardView/features';
import { useAppHeader } from '@/shared/ui/components';

const { setHeader } = useAppHeader();

setHeader({
	isHidden: true
});

const { fetchDashboard, isLoading } = useInitDashboardView();
</script>

<template>
	<div :class="$style['dashboard-view']">
		<dashboard-header />
		<van-pull-refresh :model-value="isLoading" @refresh="fetchDashboard">
			<total-balance-widget />
			<saved-funds-widget />

			<div :class="$style['dashboard-view__grid']">
				<incomes-widget :class="$style['dashboard-view__col']" />
				<expenses-widget :class="$style['dashboard-view__col']" />
				<monthly-budget-widget :class="$style['dashboard-view__col']" />
			</div>
		</van-pull-refresh>
	</div>
</template>

<style module lang="scss">
@import './styles/DashboardView.module';
</style>

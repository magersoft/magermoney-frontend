<script setup lang="ts">
import {
	DashboardHeader,
	ExchangeRatesWidget,
	MonthlyBudgetWidget,
	MonthlyExpensesWidget,
	MonthlyIncomesWidget,
	SavedFundsWidget,
	TotalBalanceWidget
} from '@/modules/dashboard/ui/components';
import { useInitDashboardView } from '@/modules/dashboard/ui/views/DashboardView/features';
import { useAppHeader } from '@/shared/ui/components';

const { setHeader } = useAppHeader();

setHeader({
	isVisible: false
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
				<monthly-incomes-widget :class="$style['dashboard-view__col']" />
				<monthly-expenses-widget :class="$style['dashboard-view__col']" />
				<monthly-budget-widget :class="$style['dashboard-view__col']" />
			</div>

			<exchange-rates-widget :class="$style['dashboard-view__wrapper']" />
		</van-pull-refresh>
	</div>
</template>

<style module lang="scss">
@import './styles/DashboardView.module';
</style>

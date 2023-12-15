<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useMonthlyExpensesWidget } from '@/modules/dashboard/ui/components/MonthlyExpensesWidget/features';

const { t } = useI18n();

const { totalMonthlyExpensesFormatted, isLoading, handleNavigateToExpenses } =
	useMonthlyExpensesWidget();
</script>

<template>
	<div
		:class="$style['monthly-expenses-widget']"
		@click="handleNavigateToExpenses"
	>
		<div :class="$style['monthly-expenses-widget__icon']">
			<van-icon name="down" size="12" />
		</div>
		<div :class="$style['monthly-expenses-widget__container']">
			<div :class="$style['monthly-expenses-widget__title']">
				{{ t('expenses') }}
			</div>
			<div :class="$style['monthly-expenses-widget__value']">
				<div :class="$style['monthly-expenses-widget__balance']">
					<van-skeleton-paragraph
						v-if="isLoading"
						:style="{ height: '25px' }"
					/>
					<span v-else>- {{ totalMonthlyExpensesFormatted }}</span>
				</div>
				<div :class="$style['monthly-expenses-widget__arrow']">
					<van-icon name="arrow" />
				</div>
			</div>
		</div>
	</div>
</template>

<style module lang="scss">
@import './styles/MonthlyExpensesWidget.module';
</style>

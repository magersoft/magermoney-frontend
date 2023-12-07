<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useMonthlyBudgetWidget } from '@/modules/dashboard/ui/components/MonthlyBudgetWidget/features';

const { t } = useI18n();

const {
	monthlyBudgetFormatted,
	restAmountFormatted,
	restAmountPercentage,
	spentAmountFormatted,
	isLoading
} = useMonthlyBudgetWidget();
</script>

<template>
	<div :class="$style['monthly-budget-widget']">
		<div :class="$style['monthly-budget-widget__circle']">
			<van-circle
				:current-rate="restAmountPercentage"
				:rate="30"
				:speed="100"
				layer-color="#ebedf0"
				color="var(--van-success-color)"
				:text="spentAmountFormatted"
			/>
		</div>
		<div :class="$style['monthly-budget-widget__container']">
			<div :class="$style['monthly-budget-widget__rest']">
				<van-skeleton-paragraph v-if="isLoading" />
				<span v-else>
					{{
						t('restMonthlyBudget', {
							restAmountFormatted,
							monthlyBudgetFormatted
						})
					}}
				</span>
			</div>
			<div :class="$style['monthly-budget-widget__title']">
				<van-skeleton-paragraph v-if="isLoading" />
				<span v-else>{{ t('monthlyBudget') }}</span>
			</div>
			<div :class="$style['monthly-budget-widget__value']">
				<div :class="$style['monthly-budget-widget__balance']">
					<van-skeleton-paragraph
						v-if="isLoading"
						:style="{ height: '25px' }"
					/>
					<span v-else>{{ monthlyBudgetFormatted }}</span>
				</div>
				<div :class="$style['monthly-budget-widget__arrow']">
					<van-icon name="arrow" />
				</div>
			</div>
		</div>
	</div>
</template>

<style module lang="scss">
@import './styles/MonthlyBudgetWidget.module';
</style>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useMonthlyBudget } from '@/modules/monthlyBudget/features';
import {
	useInitMonthlyBudgetSummary,
	useMonthlyBudgetSummary
} from '@/modules/monthlyBudget/ui/components/MonthlyBudgetSummary/features';

const { t } = useI18n();

const {
	spentAmountFormatted,
	monthlyBudgetFormatted,
	restAmountPercentageFormatted,
	accumulationFundAmountFormatted,
	availableAmountInDayFormatted,
	isLoading
} = useMonthlyBudget();

const { handleNavigateToAccumulationFunds } = useMonthlyBudgetSummary();

useInitMonthlyBudgetSummary();
</script>

<template>
	<div :class="$style['monthly-budget-summary']">
		<van-skeleton :loading="isLoading">
			<div :class="$style['monthly-budget-amounts']">
				<span :class="$style['monthly-budget-amounts__spent']">
					{{ spentAmountFormatted }}
				</span>
				<span :class="$style['monthly-budget-amounts__divider']">/</span>
				<span :class="$style['monthly-budget-amounts__rest']">
					{{ monthlyBudgetFormatted }}
				</span>
			</div>

			<template #template>
				<div :style="{ display: 'flex', width: '100%' }">
					<div :style="{ flex: 1 }">
						<van-skeleton-paragraph
							row-width="80%"
							:style="{ height: '33px' }"
						/>
					</div>
				</div>
			</template>
		</van-skeleton>

		<van-progress
			:percentage="restAmountPercentageFormatted"
			color="var(--van-success-color)"
			:class="$style['monthly-budget-progress']"
		/>

		<div :class="$style['monthly-budget-info']">
			<div :class="$style['monthly-budget-info__item']">
				<h5 :class="$style['monthly-budget-info__title']">
					{{ t('monthlyBudgetView.availableInDay') }}
				</h5>
				<van-field
					readonly
					:model-value="availableAmountInDayFormatted"
					:class="$style['monthly-budget-info__field']"
				/>
			</div>

			<div :class="$style['monthly-budget-info__item']">
				<h5 :class="$style['monthly-budget-info__title']">
					{{ t('monthlyBudgetView.saved') }}
				</h5>
				<van-field
					readonly
					right-icon="edit"
					:model-value="accumulationFundAmountFormatted"
					:class="$style['monthly-budget-info__field']"
					@click="handleNavigateToAccumulationFunds"
				/>
			</div>
		</div>
	</div>
</template>

<style module lang="scss">
@import './styles/MonthlyBudgetSummary.module';
</style>

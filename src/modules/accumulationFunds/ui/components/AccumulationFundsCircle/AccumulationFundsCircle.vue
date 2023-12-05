<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useCalculations } from '@/modules/calculations';
import { AppCellTitle } from '@/shared/ui/components';

const { t } = useI18n();

const { roundedPercentByAmount } = useCalculations();

const percent = computed(() =>
	unref(roundedPercentByAmount) ? Number(unref(roundedPercentByAmount)) : 0
);
</script>

<template>
	<div :class="$style['accumulation-funds-circle']">
		<app-cell-title :text="t('accumulationFunds.percentOfMonthlyIncome')" />

		<div :class="$style['accumulation-funds-circle__circle']">
			<van-circle
				:current-rate="percent"
				:rate="100"
				:speed="100"
				size="120px"
				:text="percent + '%'"
			/>
		</div>
	</div>
</template>

<style module lang="scss">
@import './styles/AccumulationFundsCircle.module';
</style>

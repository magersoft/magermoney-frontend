<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useAccumulationFundsBalance } from '@/modules/accumulationFunds/ui/components/AccumulationFundsBalance/features';

const { t } = useI18n();

const {
	hasBalance,
	balanceAccumulationAmountWithCurrency,
	balanceMinusAccumulationPercentWithCurrency
} = useAccumulationFundsBalance();
</script>

<template>
	<van-cell-group v-if="hasBalance">
		<van-cell
			:title="t('accumulationFunds.balanceInMonth')"
			:value="balanceMinusAccumulationPercentWithCurrency"
			:class="$style['accumulation-funds-balance']"
		/>
		<van-cell
			:title="t('accumulationFunds.balanceAccumulationInMonth')"
			:value="balanceAccumulationAmountWithCurrency"
		/>
	</van-cell-group>
</template>

<style module lang="scss">
@import './styles/AccumulationFundsBalance.module';
</style>

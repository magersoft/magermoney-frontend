<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useAccumulatedFundsList } from '@/modules/accumulatedFunds/ui/components/AccumulatedFundsList/features';

const { t } = useI18n();

const {
	accumulatedFunds,
	hasAccumulatedFunds,
	formatAmountWithCurrency,
	handleRemove
} = useAccumulatedFundsList();
</script>

<template>
	<van-list v-if="hasAccumulatedFunds">
		<h2 class="cell-title">
			{{ t('welcome.accumulatedFunds.sourceOfAccumulated') }}
		</h2>
		<p class="cell-description">
			{{ t('welcome.accumulatedFunds.sourceOfAccumulatedDescription') }}
		</p>
		<van-swipe-cell
			v-for="accumulatedFund of accumulatedFunds"
			:key="accumulatedFund.id"
		>
			<van-cell
				:title="accumulatedFund.source"
				:value="
					formatAmountWithCurrency(
						accumulatedFund.amount,
						accumulatedFund.currency
					)
				"
			/>
			<template #right>
				<van-button
					square
					type="danger"
					:text="t('delete')"
					@click="() => handleRemove(accumulatedFund)"
				/>
			</template>
		</van-swipe-cell>
	</van-list>
</template>

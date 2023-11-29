<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useSavedFundsList } from '@/modules/savedFunds/ui/components/SavedFundsList/features';

const { t } = useI18n();

const { savedFunds, hasSavedFunds, formatAmountWithCurrency, handleRemove } =
	useSavedFundsList();
</script>

<template>
	<van-list v-if="hasSavedFunds">
		<h2 class="cell-title">
			{{ t('savedFunds.sourceOfSaved') }}
		</h2>
		<p class="cell-description">
			{{ t('savedFunds.sourceOfSavedDescription') }}
		</p>
		<van-swipe-cell v-for="savedFund of savedFunds" :key="savedFund.id">
			<van-cell
				:title="savedFund.source"
				:value="formatAmountWithCurrency(savedFund.amount, savedFund.currency)"
			/>
			<template #right>
				<van-button
					square
					type="danger"
					:text="t('delete')"
					@click="() => handleRemove(savedFund)"
				/>
			</template>
		</van-swipe-cell>
	</van-list>
</template>

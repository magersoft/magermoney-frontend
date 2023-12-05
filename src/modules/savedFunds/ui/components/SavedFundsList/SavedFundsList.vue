<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useSavedFundsList } from '@/modules/savedFunds/ui/components/SavedFundsList/features';
import { AppCellDescription, AppCellTitle } from '@/shared/ui/components';

const { t } = useI18n();

const { savedFunds, hasSavedFunds, formatAmountWithCurrency, handleRemove } =
	useSavedFundsList();
</script>

<template>
	<van-list v-if="hasSavedFunds">
		<app-cell-title :text="t('savedFunds.sourceOfSaved')" />
		<app-cell-description :text="t('savedFunds.sourceOfSavedDescription')" />

		<van-swipe-cell v-for="savedFund of savedFunds" :key="savedFund.id">
			<van-cell
				:title="savedFund.source"
				:value="
					formatAmountWithCurrency(savedFund.amount, savedFund.currency.code)
				"
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

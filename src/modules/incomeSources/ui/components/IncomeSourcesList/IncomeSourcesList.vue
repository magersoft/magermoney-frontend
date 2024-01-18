<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useIncomeSourcesList } from '@/modules/incomeSources/ui/components/IncomeSourcesList/features';
import { AppCellDescription, AppCellTitle } from '@/shared/ui/components';

const { t } = useI18n();

const {
	incomeSourcesItems,
	hasIncomeSources,
	formatAmountWithCurrency,
	handleRemove
} = useIncomeSourcesList();
</script>

<template>
	<van-list v-if="hasIncomeSources">
		<app-cell-title :text="t('incomeSource.sourceOfIncome')" />
		<app-cell-description :text="t('incomeSource.sourceOfIncomeDescription')" />

		<van-swipe-cell
			v-for="incomeSource of incomeSourcesItems"
			:key="incomeSource.id"
		>
			<van-cell
				:title="incomeSource.category.name"
				:value="
					formatAmountWithCurrency(
						incomeSource.amount,
						incomeSource.currency.code
					)
				"
			/>
			<template #right>
				<van-button
					square
					type="danger"
					:text="t('delete')"
					@click="() => handleRemove(incomeSource)"
				/>
			</template>
		</van-swipe-cell>
	</van-list>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useIncomeSourcesList } from '@/modules/incomeSources/ui/components/IncomeSourcesList/features';

const { t } = useI18n();

const {
	incomeSources,
	hasIncomeSources,
	formatAmountWithCurrency,
	handleRemove
} = useIncomeSourcesList();
</script>

<template>
	<van-list v-if="hasIncomeSources">
		<h2 class="cell-title">{{ t('incomeSource.sourceOfIncome') }}</h2>
		<p class="cell-description">
			{{ t('incomeSource.sourceOfIncomeDescription') }}
		</p>
		<van-swipe-cell
			v-for="incomeSource of incomeSources"
			:key="incomeSource.id"
		>
			<van-cell
				:title="incomeSource.title"
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

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useIncomeSourcesList } from '@/modules/incomeSource/ui/components/IncomeSourcesList/features';

const { t } = useI18n();

const {
	incomeSources,
	hasIncomeSources,
	formatMoneyWithCurrency,
	handleRemove
} = useIncomeSourcesList();
</script>

<template>
	<van-list v-if="hasIncomeSources">
		<h2 class="cell-title">{{ t('welcome.incomeSource.sourceOfIncome') }}</h2>
		<p class="cell-description">
			{{ t('welcome.incomeSource.sourceOfIncomeDescription') }}
		</p>
		<van-swipe-cell
			v-for="incomeSource of incomeSources"
			:key="incomeSource.id"
		>
			<van-cell
				:border="false"
				:title="incomeSource.title"
				:value="
					formatMoneyWithCurrency(incomeSource.amount, incomeSource.currency)
				"
			/>
			<template #right>
				<van-button
					square
					type="danger"
					:text="t('delete')"
					@click="() => handleRemove(incomeSource)"
				/>
				<van-button square type="primary" :text="t('edit')" />
			</template>
		</van-swipe-cell>
	</van-list>
</template>

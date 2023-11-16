<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useIncomeSourcesList } from '@/app/incomeSource/ui/components/IncomeSourcesList/features';
import { formatMoney } from '@/shared/utils';

const { t } = useI18n();

const { incomeSources, handleRemove } = useIncomeSourcesList();
</script>

<template>
	<div>
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
				:value="formatMoney(incomeSource.amount, incomeSource.currency)"
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
	</div>
</template>

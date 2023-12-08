<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useExpenseSourcesList } from '@/modules/expenseSources/ui/components/ExpenseSourcesList/features';
import { AppCellDescription, AppCellTitle } from '@/shared/ui/components';

const { t } = useI18n();

const {
	expenseSources,
	hasExpenseSources,
	formatAmountWithCurrency,
	handleRemove
} = useExpenseSourcesList();
</script>

<template>
	<van-list v-if="hasExpenseSources">
		<app-cell-title :text="t('expenseSources.titleOfExpenses')" />
		<app-cell-description
			:text="t('expenseSources.titleOfExpensesDescription')"
		/>

		<van-swipe-cell
			v-for="expenseSource of expenseSources"
			:key="expenseSource.id"
		>
			<van-cell
				:title="expenseSource.title"
				:value="
					formatAmountWithCurrency(
						expenseSource.amount,
						expenseSource.currency.code
					)
				"
			/>
			<template #right>
				<van-button
					square
					type="danger"
					:text="t('delete')"
					@click="() => handleRemove(expenseSource)"
				/>
			</template>
		</van-swipe-cell>
	</van-list>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useMonthlyExpensesList } from '@/modules/monthlyExpenses/ui/components/MonthlyExpensesList/features';
import { AppCellDescription, AppCellTitle } from '@/shared/ui/components';

const { t } = useI18n();

const {
	monthlyExpenses,
	hasMonthlyExpenses,
	formatAmountWithCurrency,
	handleRemove
} = useMonthlyExpensesList();
</script>

<template>
	<van-list v-if="hasMonthlyExpenses">
		<app-cell-title :text="t('monthlyExpenses.titleOfExpenses')" />
		<app-cell-description
			:text="t('monthlyExpenses.titleOfExpensesDescription')"
		/>

		<van-swipe-cell
			v-for="monthlyExpense of monthlyExpenses"
			:key="monthlyExpense.id"
		>
			<van-cell
				:title="monthlyExpense.title"
				:value="
					formatAmountWithCurrency(
						monthlyExpense.amount,
						monthlyExpense.currency.code
					)
				"
			/>
			<template #right>
				<van-button
					square
					type="danger"
					:text="t('delete')"
					@click="() => handleRemove(monthlyExpense)"
				/>
			</template>
		</van-swipe-cell>
	</van-list>
</template>

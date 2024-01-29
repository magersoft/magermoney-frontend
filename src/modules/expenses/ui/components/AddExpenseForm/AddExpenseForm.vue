<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { appConfig } from '@/app/config';
import {
	useAddExpenseForm,
	useInitAddExpenseForm
} from '@/modules/expenses/ui/components/AddExpenseForm/features';
import {
	AppAmountInput,
	AppCellDescription,
	AppCellTitle,
	AppCombobox
} from '@/shared/ui/components';

const { t } = useI18n();

useInitAddExpenseForm();

const {
	formRef,
	expenseFormData,
	currenciesItems,
	savedFundsItems,
	expenseSourcesItems,
	expenseCategoriesItems,
	savedFundTitle,
	formattedDate,
	isMonthlyExpense,
	isLoading,
	isLoadingCurrencies,
	isLoadingCategories,
	showedDatePicker,
	showedExpenseSourcesPicker,
	getCurrencySymbol,
	handleShowDatePicker,
	handleUpdateCategoriesName,
	handleConfirmCategoriesPicker,
	handleConfirmExpenseSourcesPicker,
	handleShowExpenseSourcesPicker,
	handleConfirmDatePicker,
	handleConfirmSavedFundsPicker,
	handleSubmit
} = useAddExpenseForm();
</script>

<template>
	<van-form
		ref="formRef"
		:class="$style['add-expense-form']"
		@submit="handleSubmit"
	>
		<app-cell-title :text="t('addExpenseForm.title')" />
		<app-cell-description :text="t('addExpenseForm.description')" />

		<van-cell-group inset>
			<van-cell
				center
				:title="t('addExpenseForm.monthlyExpense')"
				:class="$style['add-expense-form__field']"
			>
				<template #right-icon>
					<van-switch v-model="isMonthlyExpense" :loading="isLoading" />
				</template>
			</van-cell>

			<app-amount-input
				v-if="isMonthlyExpense"
				v-model="expenseFormData.amount"
				name="amount"
				readonly
				:loading="isLoading"
				:disabled="isLoading"
				:label="t('addExpenseForm.expense')"
				:placeholder="t('addExpenseForm.selectExpense')"
				:rules="[{ required: true, message: t('validation.required') }]"
				:class="$style['add-expense-form__field']"
				@click="handleShowExpenseSourcesPicker"
			>
				<template v-if="expenseFormData.amount" #append>
					{{ getCurrencySymbol(expenseFormData.currency) }}
				</template>
			</app-amount-input>

			<van-field
				v-model="expenseFormData.title"
				name="title"
				:label="t('addExpenseForm.name')"
				:placeholder="t('addExpenseForm.enterExpense')"
				:disabled="isLoading"
				:rules="[{ required: true, message: t('validation.required') }]"
				:class="$style['add-expense-form__field']"
			/>

			<app-combobox
				v-if="!isMonthlyExpense"
				v-model="expenseFormData.customCategoryName"
				name="title"
				:label="t('addExpenseForm.category')"
				:placeholder="t('addExpenseForm.selectCategory')"
				:enter-label="t('addExpenseForm.category')"
				:enter-placeholder="t('addExpenseForm.enterCategory')"
				:custom-title="t('Other')"
				:disabled="isLoading || isLoadingCategories"
				:loading="isLoadingCategories"
				:rules="[{ required: true, message: t('validation.required') }]"
				:items="expenseCategoriesItems"
				:class="$style['add-expense-form__field']"
				@confirm="handleConfirmCategoriesPicker"
				@update:model-value="handleUpdateCategoriesName"
			/>

			<app-amount-input
				v-if="!isMonthlyExpense"
				v-model="expenseFormData.amount"
				v-model:currency="expenseFormData.currency"
				name="amount"
				:label="t('addExpenseForm.amount')"
				:placeholder="t('addExpenseForm.enterAmount')"
				:currencies="currenciesItems"
				:readonly="isLoading"
				:disabled="isLoading"
				:loading="isLoadingCurrencies"
				:rules="[{ required: true, message: t('validation.required') }]"
				:confirm-keyboard-button-text="t('done')"
				show-currencies
				enable-keyboard
				:class="[
					$style['add-expense-form__field'],
					$style['add-expense-form__field--currencies']
				]"
			/>

			<app-combobox
				v-model="savedFundTitle"
				name="savedFundId"
				:label="t('addExpenseForm.savedFund')"
				:placeholder="t('addExpenseForm.selectSavedFund')"
				:disabled="isLoading"
				:items="savedFundsItems"
				:rules="[{ required: true, message: t('validation.required') }]"
				:class="$style['add-expense-form__field']"
				@confirm="handleConfirmSavedFundsPicker"
			/>

			<van-cell
				:title="t('addExpenseForm.dateOfIssue')"
				:value="formattedDate"
				:class="$style['add-expense-form__field']"
				@click="handleShowDatePicker"
			/>
		</van-cell-group>

		<div :class="$style['add-expense-form__actions']">
			<van-button
				round
				block
				type="primary"
				native-type="submit"
				:loading="isLoading"
			>
				{{ t('addExpenseForm.declare') }}
			</van-button>
		</div>
	</van-form>

	<van-popup v-model:show="showedExpenseSourcesPicker" position="bottom">
		<van-picker
			:columns="expenseSourcesItems"
			@confirm="handleConfirmExpenseSourcesPicker"
			@cancel="showedExpenseSourcesPicker = false"
		/>
	</van-popup>

	<van-calendar
		v-model:show="showedDatePicker"
		:min-date="appConfig.minDate"
		:max-date="appConfig.maxDate"
		:first-day-of-week="appConfig.firstDayOfWeek"
		@confirm="handleConfirmDatePicker"
	/>
</template>

<style module lang="scss">
@import './styles/AddExpenseForm.module';
</style>

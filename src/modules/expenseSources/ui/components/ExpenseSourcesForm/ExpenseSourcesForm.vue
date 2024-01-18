<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import {
	useExpenseSourcesForm,
	useInitExpenseSourcesForm
} from '@/modules/expenseSources/ui/components/ExpenseSourcesForm/features';
import {
	AppAmountInput,
	AppCellDescription,
	AppCellTitle,
	AppCombobox,
	AppFormActionButtons
} from '@/shared/ui/components';
import { AppFormProps } from '@/shared/ui/composables';

interface ExpenseSourcesFormProps extends AppFormProps {}

interface ExpenseSourcesFormEvents {
	(event: 'click:add'): void;
	(event: 'click:submit'): void;
	(event: 'click:back'): void;
}

defineProps<ExpenseSourcesFormProps>();
const emit = defineEmits<ExpenseSourcesFormEvents>();

useInitExpenseSourcesForm();

const { t } = useI18n();

const {
	formRef,
	expenseSourcesFormData,
	hasExpenseSources,
	hasServerError,
	currenciesItems,
	categoriesItems,
	isLoading,
	isLoadingCurrencies,
	isLoadingCategories,
	handleConfirmExpenseSourcesPicker,
	handleUpdateExpenseSourcesTitle,
	handleSubmit,
	handleAddSubmit,
	handleBack
} = useExpenseSourcesForm({
	onAdd: () => emit('click:add'),
	onSubmit: () => emit('click:submit'),
	onBack: () => emit('click:back')
});
</script>

<template>
	<van-form
		ref="formRef"
		:class="$style['expense-sources-form']"
		@submit="handleSubmit"
	>
		<app-cell-title :text="t('expenseSources.title')" />
		<app-cell-description :text="t('expenseSources.description')" />

		<van-cell-group inset>
			<app-combobox
				v-model="expenseSourcesFormData.title"
				name="title"
				:label="t('expenseSources.expense')"
				:placeholder="t('expenseSources.selectTitle')"
				:enter-label="t('expenseSources.name')"
				:enter-placeholder="t('expenseSources.enterName')"
				:custom-title="t('expenseSources.other')"
				:error="hasServerError"
				:rules="[{ required: true, message: t('validation.required') }]"
				:disabled="isLoading || isLoadingCategories"
				:loading="isLoadingCategories"
				:items="categoriesItems"
				@confirm="handleConfirmExpenseSourcesPicker"
				@update:model-value="handleUpdateExpenseSourcesTitle"
			/>
			<app-amount-input
				v-model="expenseSourcesFormData.amount"
				v-model:currency="expenseSourcesFormData.currency"
				name="amount"
				:label="t('expenseSources.amount')"
				:placeholder="t('expenseSources.enterAmount')"
				:currencies="currenciesItems"
				:error="hasServerError"
				:rules="[{ required: true, message: t('validation.required') }]"
				:disabled="isLoading"
				:loading="isLoadingCurrencies"
				show-currencies
				enable-keyboard
				@add="handleAddSubmit"
			/>
		</van-cell-group>

		<app-form-action-buttons
			v-if="!hideFormActionButtons"
			:has-add-button="hasAddButton"
			:has-back-button="hasBackButton"
			:has-submit-button="hasSubmitButton && hasExpenseSources"
			:submit-text="t('continue')"
			@click:add="handleAddSubmit"
			@click:submit="handleSubmit"
			@click:back="handleBack"
		/>

		<slot />
	</van-form>
</template>

<style module lang="scss">
@import './styles/ExpenseSourcesForm.module';
</style>

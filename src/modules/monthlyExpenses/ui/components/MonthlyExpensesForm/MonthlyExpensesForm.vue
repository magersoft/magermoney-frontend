<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { monthlyExpensesTypesItems } from '@/modules/monthlyExpenses/constants';
import {
	useInitMonthlyExpensesForm,
	useMonthlyExpensesForm
} from '@/modules/monthlyExpenses/ui/components/MonthlyExpensesForm/features';
import {
	AppAmountInput,
	AppCombobox,
	AppFormActionButtons
} from '@/shared/ui/components';
import { AppFormProps } from '@/shared/ui/composables';

interface MonthlyExpensesFormProps extends AppFormProps {}

interface MonthlyExpensesFormEvents {
	(event: 'click:add'): void;
	(event: 'click:submit'): void;
	(event: 'click:back'): void;
}

defineProps<MonthlyExpensesFormProps>();
const emit = defineEmits<MonthlyExpensesFormEvents>();

useInitMonthlyExpensesForm();

const { t } = useI18n();

const {
	formRef,
	monthlyExpensesFormData,
	hasMonthlyExpenses,
	hasServerError,
	currenciesItems,
	isLoading,
	isLoadingCurrencies,
	handleSubmit,
	handleAddSubmit,
	handleBack
} = useMonthlyExpensesForm({
	onAdd: () => emit('click:add'),
	onSubmit: () => emit('click:submit'),
	onBack: () => emit('click:back')
});
</script>

<template>
	<van-form
		ref="formRef"
		:class="$style['monthly-expenses-form']"
		@submit="handleSubmit"
	>
		<h2 class="cell-title">{{ t('monthlyExpenses.title') }}</h2>
		<p class="cell-description">
			{{ t('monthlyExpenses.description') }}
		</p>

		<van-cell-group inset>
			<app-combobox
				v-model="monthlyExpensesFormData.title"
				name="title"
				:label="t('monthlyExpenses.expense')"
				:placeholder="t('monthlyExpenses.selectTitle')"
				:enter-label="t('monthlyExpenses.name')"
				:enter-placeholder="t('monthlyExpenses.enterName')"
				:custom-title="t('monthlyExpenses.other')"
				:error="hasServerError"
				:rules="[{ required: true, message: t('validation.required') }]"
				:readonly="isLoading"
				:items="monthlyExpensesTypesItems"
			/>
			<app-amount-input
				v-model="monthlyExpensesFormData.amount"
				v-model:currency="monthlyExpensesFormData.currency"
				name="amount"
				:label="t('monthlyExpenses.amount')"
				:placeholder="t('monthlyExpenses.enterAmount')"
				:currencies="currenciesItems"
				:error="hasServerError"
				:rules="[{ required: true, message: t('validation.required') }]"
				:readonly="isLoading"
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
			:has-submit-button="hasSubmitButton && hasMonthlyExpenses"
			:submit-text="t('continue')"
			@click:add="handleAddSubmit"
			@click:submit="handleSubmit"
			@click:back="handleBack"
		/>

		<slot />
	</van-form>
</template>

<style module lang="scss">
@import './styles/MonthlyExpensesForm.module';
</style>

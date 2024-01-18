<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import {
	useIncomeSourceForm,
	useInitIncomeSourcesForm
} from '@/modules/incomeSources/ui/components/IncomeSourceForm/features';
import {
	AppAmountInput,
	AppCellDescription,
	AppCellTitle,
	AppCombobox,
	AppFormActionButtons
} from '@/shared/ui/components';
import { AppFormEvents, AppFormProps } from '@/shared/ui/composables';

interface IncomeSourceFormProps extends AppFormProps {}

interface IncomeSourceFormEvents extends AppFormEvents {
	(event: 'click:add'): void;
	(event: 'click:submit'): void;
	(event: 'click:back'): void;
}

defineProps<IncomeSourceFormProps>();
const emit = defineEmits<IncomeSourceFormEvents>();

useInitIncomeSourcesForm();

const { t } = useI18n();

const {
	formRef,
	incomeSourceFormData,
	hasServerError,
	hasIncomeSources,
	currenciesItems,
	categoriesItems,
	isLoading,
	isLoadingCurrencies,
	isLoadingCategories,
	handleConfirmIncomeSourcesPicker,
	handleUpdateIncomeSourcesTitle,
	handleAddSubmit,
	handleSubmit,
	handleBack
} = useIncomeSourceForm({
	onAdd: () => emit('click:add'),
	onSubmit: () => emit('click:submit'),
	onBack: () => emit('click:back')
});
</script>

<template>
	<van-form
		ref="formRef"
		:class="$style['income-source-form']"
		@submit="handleSubmit"
	>
		<app-cell-title :text="t('incomeSource.title')" />
		<app-cell-description :text="t('incomeSource.description')" />

		<van-cell-group inset>
			<app-combobox
				v-model="incomeSourceFormData.title"
				name="title"
				:label="t('incomeSource.source')"
				:placeholder="t('incomeSource.selectIncome')"
				:enter-label="t('incomeSource.name')"
				:enter-placeholder="t('incomeSource.enterIncome')"
				:custom-title="t('incomeSource.other')"
				:error="hasServerError"
				:rules="[{ required: true, message: t('validation.required') }]"
				:disabled="isLoading || isLoadingCategories"
				:loading="isLoadingCategories"
				:items="categoriesItems"
				@confirm="handleConfirmIncomeSourcesPicker"
				@update:model-value="handleUpdateIncomeSourcesTitle"
			/>
			<app-amount-input
				v-model="incomeSourceFormData.amount"
				v-model:currency="incomeSourceFormData.currency"
				name="amount"
				:label="t('incomeSource.amount')"
				:placeholder="t('incomeSource.enterAmount')"
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
			:has-submit-button="hasSubmitButton && hasIncomeSources"
			:has-back-button="hasBackButton"
			:submit-text="t('continue')"
			:loading="isLoading"
			@click:add="handleAddSubmit"
			@click:submit="handleSubmit"
			@click:back="handleBack"
		/>

		<slot />
	</van-form>
</template>

<style module lang="scss">
@import './styles/IncomeSourceForm.module';
</style>

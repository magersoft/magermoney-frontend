<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { incomeSourcesTypes } from '@/modules/incomeSources/constants';
import {
	useIncomeSourceForm,
	useInitIncomeSourcesForm
} from '@/modules/incomeSources/ui/components/IncomeSourceForm/features';
import {
	AppAmountInput,
	AppCombobox,
	AppFormActionButtons
} from '@/shared/ui/components';
import { AppFormEvents, AppFormProps } from '@/shared/ui/composables';

interface IncomeSourceFormProps extends AppFormProps {}

interface IncomeSourceFormEvents extends AppFormEvents {
	(event: 'click:add'): void;
	(event: 'click:submit'): void;
}

defineProps<IncomeSourceFormProps>();
const emit = defineEmits<IncomeSourceFormEvents>();

useInitIncomeSourcesForm();

const { t } = useI18n();

const {
	formRef,
	incomeSourceFormData,
	hasServerError,
	errorMessages,
	hasIncomeSources,
	currenciesItems,
	isLoading,
	isLoadingCurrencies,
	addSubmitHandler,
	submitHandler
} = useIncomeSourceForm({
	onAdd: () => emit('click:add'),
	onSubmit: () => emit('click:submit')
});
</script>

<template>
	<van-form
		ref="formRef"
		:class="$style['income-source-form']"
		@submit="submitHandler"
	>
		<h2 class="cell-title">{{ t('incomeSource.title') }}</h2>
		<p class="cell-description">
			{{ t('incomeSource.description') }}
		</p>
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
				:error-message="errorMessages"
				:rules="[{ required: true, message: t('validation.required') }]"
				:disabled="isLoading"
				:items="incomeSourcesTypes"
			/>
			<app-amount-input
				v-model="incomeSourceFormData.amount"
				v-model:currency="incomeSourceFormData.currency"
				name="amount"
				:label="t('incomeSource.amount')"
				:placeholder="t('incomeSource.enterAmount')"
				:currencies="currenciesItems"
				:error="hasServerError"
				:error-message="errorMessages"
				:rules="[{ required: true, message: t('validation.required') }]"
				:readonly="isLoading"
				:loading="isLoadingCurrencies"
				show-currencies
				enable-keyboard
				@add="addSubmitHandler"
			/>
		</van-cell-group>

		<app-form-action-buttons
			v-if="!hideFormActionButtons"
			:has-add-button="hasAddButton"
			:has-submit-button="hasSubmitButton && hasIncomeSources"
			:submit-text="t('continue')"
			:loading="isLoading"
			@click:add="addSubmitHandler"
			@click:submit="submitHandler"
		/>

		<slot />
	</van-form>
</template>

<style module lang="scss">
@import './styles/IncomeSourceForm.module';
</style>

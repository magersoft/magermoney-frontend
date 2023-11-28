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
	AppFormNavigation
} from '@/shared/ui/components';

interface IncomeSourceFormProps {
	readonly hasSubmitButton?: boolean;
	readonly hasBackButton?: boolean;
	readonly hasAddButton?: boolean;
	readonly hideFormNavigation?: boolean;
}

interface IncomeSourceFormEvents {
	(event: 'click:add'): void;
	(event: 'click:submit'): void;
}

defineProps<IncomeSourceFormProps>();
const emit = defineEmits<IncomeSourceFormEvents>();

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
	onContinue: () => emit('click:submit')
});

useInitIncomeSourcesForm();
</script>

<template>
	<van-form
		ref="formRef"
		:class="$style['income-source-form']"
		@submit="submitHandler"
	>
		<h2 class="cell-title">{{ t('welcome.incomeSource.title') }}</h2>
		<p class="cell-description">
			{{ t('welcome.incomeSource.description') }}
		</p>
		<van-cell-group inset>
			<app-combobox
				v-model="incomeSourceFormData.title"
				name="title"
				:label="t('welcome.incomeSource.source')"
				:placeholder="t('welcome.incomeSource.selectIncome')"
				:enter-label="t('welcome.incomeSource.name')"
				:enter-placeholder="t('welcome.incomeSource.enterIncome')"
				:custom-title="t('welcome.incomeSource.other')"
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
				:label="t('welcome.incomeSource.amount')"
				:placeholder="t('welcome.incomeSource.enterAmount')"
				:currencies="currenciesItems"
				:error="hasServerError"
				:error-message="errorMessages"
				:rules="[{ required: true, message: t('validation.required') }]"
				:disabled="isLoading"
				:loading="isLoadingCurrencies"
				show-currencies
				enable-keyboard
				@add="addSubmitHandler"
			/>
		</van-cell-group>

		<app-form-navigation
			v-if="!hideFormNavigation"
			:has-add-button="hasAddButton"
			:has-submit-button="hasSubmitButton && hasIncomeSources"
			:submit-text="t('continue')"
			:is-loading="isLoading"
			@click:add="addSubmitHandler"
			@click:submit="submitHandler"
		/>

		<slot />
	</van-form>
</template>

<style module lang="scss">
@import './styles/IncomeSourceForm.module';
</style>

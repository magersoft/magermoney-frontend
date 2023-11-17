<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { incomeSourceTypes } from '@/modules/incomeSource/constants';
import {
	useIncomeSourceForm,
	useInitIncomeSourcesForm
} from '@/modules/incomeSource/ui/components/IncomeSourceForm/features';
import { AppAmountInput, AppCombobox } from '@/shared/ui/components';

interface IncomeSourceFormProps {
	continueButton?: boolean;
}

defineProps<IncomeSourceFormProps>();

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
	continueHandler
} = useIncomeSourceForm();

useInitIncomeSourcesForm();
</script>

<template>
	<van-form
		ref="formRef"
		:class="$style['income-source-form']"
		@submit="addSubmitHandler"
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
				:items="incomeSourceTypes"
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

		<van-cell-group inset :class="$style['income-source-form__actions']">
			<van-button
				size="small"
				icon="plus"
				:disabled="isLoading"
				native-type="submit"
			>
				{{ t('add') }}
			</van-button>
			<van-button
				v-if="continueButton && hasIncomeSources"
				size="small"
				:disabled="isLoading"
				type="primary"
				@click="continueHandler"
			>
				{{ t('continue') }}
			</van-button>
		</van-cell-group>
	</van-form>
</template>

<style module lang="scss">
@import './styles/IncomeSourceForm.module';
</style>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { appConfig } from '@/app/config';
import {
	useAddIncomeForm,
	useInitAddIncomeForm
} from '@/modules/incomes/ui/components/AddIncomeForm/features';
import {
	AppAmountInput,
	AppCellDescription,
	AppCellTitle,
	AppCombobox
} from '@/shared/ui/components';

useInitAddIncomeForm();

const { t } = useI18n();

const {
	formRef,
	incomeFormData,
	incomeSourcesItems,
	savedFundsItems,
	currenciesItems,
	showedIncomeSourcesPicker,
	showedDatePicker,
	savedFundTitle,
	isSingleIncome,
	isLoading,
	isLoadingCurrencies,
	hasServerError,
	formattedDate,
	handleSubmit,
	handleShowIncomeSourcesPicker,
	handleConfirmIncomeSourcesPicker,
	handleConfirmSavedFundsPicker,
	handleConfirmDatePicker,
	getCurrencySymbol
} = useAddIncomeForm();
</script>

<template>
	<van-form
		ref="formRef"
		:class="$style['add-income-form']"
		@submit="handleSubmit"
	>
		<app-cell-title :text="t('incomesForm.title')" />
		<app-cell-description :text="t('incomesForm.description')" />

		<van-cell-group inset>
			<app-amount-input
				v-if="!isSingleIncome"
				v-model="incomeFormData.amount"
				name="amount"
				readonly
				:disabled="isLoading"
				:label="t('incomesForm.income')"
				:placeholder="t('incomesForm.selectIncome')"
				:class="$style['add-income-form__field']"
				:error="hasServerError"
				:rules="[{ required: true, message: t('validation.required') }]"
				@click="handleShowIncomeSourcesPicker"
			>
				<template v-if="incomeFormData.amount" #append>
					{{ getCurrencySymbol(incomeFormData.currency) }}
				</template>
			</app-amount-input>

			<app-combobox
				v-if="isSingleIncome"
				v-model="incomeFormData.title"
				name="title"
				:label="t('incomesForm.category')"
				:placeholder="t('incomesForm.selectCategory')"
				:enter-label="t('incomesForm.name')"
				:enter-placeholder="t('incomesForm.enterIncome')"
				:custom-title="t('Other')"
				:error="hasServerError"
				:disabled="isLoading"
				:rules="[{ required: true, message: t('validation.required') }]"
				:class="$style['add-income-form__field']"
			/>
			<app-amount-input
				v-if="isSingleIncome"
				v-model="incomeFormData.amount"
				v-model:currency="incomeFormData.currency"
				name="amount"
				:label="t('incomesForm.amount')"
				:placeholder="t('incomesForm.enterAmount')"
				:currencies="currenciesItems"
				:error="hasServerError"
				:readonly="isLoading"
				:loading="isLoadingCurrencies"
				:rules="[{ required: true, message: t('validation.required') }]"
				show-currencies
				enable-keyboard
				:class="[
					$style['add-income-form__field'],
					$style['add-income-form__field--currencies']
				]"
			/>
			<app-combobox
				v-model="savedFundTitle"
				name="savedFundId"
				:label="t('incomesForm.savedFund')"
				:placeholder="t('incomesForm.selectSavedFund')"
				:disabled="isLoading"
				:items="savedFundsItems"
				:rules="[{ required: true, message: t('validation.required') }]"
				:class="$style['add-income-form__field']"
				@confirm="handleConfirmSavedFundsPicker"
			/>
			<van-cell
				:title="t('incomesForm.dateOfIssue')"
				:value="formattedDate"
				:class="$style['add-income-form__field']"
				@click="showedDatePicker = true"
			/>
			<van-cell
				center
				:title="t('incomesForm.singleIncome')"
				:class="$style['add-income-form__field']"
			>
				<template #right-icon>
					<van-switch v-model="isSingleIncome" />
				</template>
			</van-cell>
		</van-cell-group>

		<div :class="$style['add-income-form__actions']">
			<van-button
				round
				block
				type="primary"
				native-type="submit"
				:loading="isLoading"
			>
				{{ t('incomesForm.declare') }}
			</van-button>
		</div>
	</van-form>

	<van-popup v-model:show="showedIncomeSourcesPicker" position="bottom">
		<van-picker
			:columns="incomeSourcesItems"
			@confirm="handleConfirmIncomeSourcesPicker"
			@cancel="showedIncomeSourcesPicker = false"
		/>
	</van-popup>

	<van-calendar
		v-model:show="showedDatePicker"
		:min-date="appConfig.minDate"
		:max-date="appConfig.maxDate"
		@confirm="handleConfirmDatePicker"
	/>
</template>

<style module lang="scss">
@import './styles/AddIncomeForm.module';
</style>

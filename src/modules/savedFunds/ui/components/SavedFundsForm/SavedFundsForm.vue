<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { savedFundsTypes } from '@/modules/savedFunds/constants';
import {
	useInitSavedFundsForm,
	useSavedFundsForm
} from '@/modules/savedFunds/ui/components/SavedFundsForm/features';
import {
	AppAmountInput,
	AppCombobox,
	AppFormActionButtons
} from '@/shared/ui/components';
import { AppFormEvents, AppFormProps } from '@/shared/ui/composables';

interface SavedFundsFormProps extends AppFormProps {}

interface SavedFundsFormEvents extends AppFormEvents {
	(event: 'click:add'): void;
	(event: 'click:submit'): void;
	(event: 'click:back'): void;
}

defineProps<SavedFundsFormProps>();
const emit = defineEmits<SavedFundsFormEvents>();

useInitSavedFundsForm();

const { t } = useI18n();

const {
	formRef,
	savedFundsFormData,
	hasSavedFunds,
	hasServerError,
	errorMessages,
	currenciesItems,
	isLoading,
	isLoadingCurrencies,
	addSubmitHandler,
	submitHandler,
	backHandler
} = useSavedFundsForm({
	onAdd: () => emit('click:add'),
	onSubmit: () => emit('click:submit'),
	onBack: () => emit('click:back')
});
</script>

<template>
	<van-form
		ref="formRef"
		:class="$style['saved-funds-form']"
		@submit="submitHandler"
	>
		<h2 class="cell-title">{{ t('savedFunds.title') }}</h2>
		<p class="cell-description">
			{{ t('savedFunds.description') }}
		</p>
		<van-cell-group inset>
			<app-combobox
				v-model="savedFundsFormData.source"
				name="source"
				:label="t('savedFunds.source')"
				:placeholder="t('savedFunds.selectSaved')"
				:enter-label="t('savedFunds.name')"
				:enter-placeholder="t('savedFunds.enterSaved')"
				:custom-title="t('savedFunds.other')"
				:error="hasServerError"
				:error-message="errorMessages"
				:rules="[{ required: true, message: t('validation.required') }]"
				:disabled="isLoading"
				:items="savedFundsTypes"
			/>
			<app-amount-input
				v-model="savedFundsFormData.amount"
				v-model:currency="savedFundsFormData.currency"
				name="amount"
				:label="t('savedFunds.amount')"
				:placeholder="t('savedFunds.enterAmount')"
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
			:has-back-button="hasBackButton"
			:has-submit-button="hasSubmitButton && hasSavedFunds"
			:submit-text="t('continue')"
			:loading="isLoading"
			@click:add="addSubmitHandler"
			@click:submit="submitHandler"
			@click:back="backHandler"
		/>

		<slot />
	</van-form>
</template>

<style module lang="scss">
@import './styles/SavedFundsForm.module';
</style>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import {
	useInitSavedFundsForm,
	useSavedFundsForm
} from '@/modules/savedFunds/ui/components/SavedFundsForm/features';
import {
	AppAmountInput,
	AppCellDescription,
	AppCellTitle,
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
	currenciesItems,
	savedCategoriesItems,
	isLoading,
	isLoadingCurrencies,
	isLoadingCategories,
	handleConfirmSavedFundsPicker,
	handleUpdateSavedFundsTitle,
	handleAddSubmit,
	handleSubmit,
	handleBack
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
		@submit="handleSubmit"
	>
		<app-cell-title :text="t('savedFunds.title')" />
		<app-cell-description :text="t('savedFunds.description')" />

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
				:rules="[{ required: true, message: t('validation.required') }]"
				:readonly="isLoading || isLoadingCategories"
				:loading="isLoadingCategories"
				:items="savedCategoriesItems"
				@confirm="handleConfirmSavedFundsPicker"
				@update:model-value="handleUpdateSavedFundsTitle"
			/>
			<app-amount-input
				v-model="savedFundsFormData.amount"
				v-model:currency="savedFundsFormData.currency"
				name="amount"
				:label="t('savedFunds.amount')"
				:placeholder="t('savedFunds.enterAmount')"
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
			:has-submit-button="hasSubmitButton && hasSavedFunds"
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
@import './styles/SavedFundsForm.module';
</style>

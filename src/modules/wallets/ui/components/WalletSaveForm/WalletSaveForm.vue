<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { savedFundsTypesItems } from '@/modules/savedFunds/constants';
import { walletColors } from '@/modules/wallets/constants';
import { useWalletSaveForm } from '@/modules/wallets/ui/components/WalletSaveForm/features';
import {
	AppAmountInput,
	AppCellDescription,
	AppCellTitle,
	AppCombobox
} from '@/shared/ui/components';

const { t } = useI18n();

const {
	title,
	formRef,
	walletSaveFormData,
	currentColorIdx,
	currenciesItems,
	isLoading,
	isLoadingCurrencies,
	handleChangeColor,
	handleSubmit
} = useWalletSaveForm();
</script>

<template>
	<van-form
		ref="formRef"
		:class="$style['wallet-save-form']"
		@submit="handleSubmit"
	>
		<app-cell-title :text="title" />
		<app-cell-description :text="t('wallets.description')" />

		<van-cell-group inset>
			<app-combobox
				v-model="walletSaveFormData.source"
				name="source"
				:label="t('savedFunds.source')"
				:placeholder="t('savedFunds.selectSaved')"
				:enter-label="t('savedFunds.name')"
				:enter-placeholder="t('savedFunds.enterSaved')"
				:custom-title="t('Other')"
				:class="$style['wallet-save-form__field']"
				:rules="[{ required: true, message: t('validation.required') }]"
				:readonly="isLoading"
				:items="savedFundsTypesItems"
			/>
			<app-amount-input
				v-model="walletSaveFormData.amount"
				v-model:currency="walletSaveFormData.currency"
				:label="t('savedFunds.amount')"
				:placeholder="t('savedFunds.enterAmount')"
				:rules="[{ required: true, message: t('validation.required') }]"
				:readonly="isLoading"
				:loading="isLoadingCurrencies"
				:currencies="currenciesItems"
				:confirm-keyboard-button-text="t('done')"
				:class="[
					$style['wallet-save-form__field'],
					$style['wallet-save-form__field--currencies']
				]"
				show-currencies
				enable-keyboard
			/>
		</van-cell-group>

		<app-cell-title :text="t('wallets.appearance')" />
		<van-swipe
			:initial-swipe="currentColorIdx"
			:class="$style['wallet-save-form__colors']"
			indicator-color="white"
			@change="handleChangeColor"
		>
			<van-swipe-item
				v-for="(color, idx) in walletColors"
				:key="color"
				:style="{ backgroundColor: color }"
			>
				{{ idx + 1 }}
			</van-swipe-item>
		</van-swipe>

		<div :class="$style['wallet-save-form__actions']">
			<van-button round block type="primary" native-type="submit">
				{{ t('save') }}
			</van-button>
		</div>
	</van-form>
</template>

<style module lang="scss">
@import './styles/WalletSaveForm.module';
</style>

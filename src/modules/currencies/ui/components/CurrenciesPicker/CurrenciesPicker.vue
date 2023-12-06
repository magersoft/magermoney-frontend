<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useCurrenciesPicker } from '@/modules/currencies/ui/components/CurrenciesPicker/features';

interface CurrenciesPickerEvents {
	(event: 'confirm'): void;
}

const emit = defineEmits<CurrenciesPickerEvents>();

const { t } = useI18n();

const {
	pickerValue,
	currenciesItems,
	isLoading,
	isShowPicker,
	onShowPicker,
	handleConfirm,
	handleCancel
} = useCurrenciesPicker({
	onConfirm: () => emit('confirm')
});
</script>

<template>
	<slot name="activator" v-bind="{ isLoading, onShowPicker }" />
	<van-popup v-model:show="isShowPicker" round position="bottom">
		<van-picker
			v-model="pickerValue"
			:title="t('settings.changeCurrency')"
			:columns="currenciesItems"
			:loading="isLoading"
			@confirm="handleConfirm"
			@cancel="handleCancel"
		/>
	</van-popup>
</template>

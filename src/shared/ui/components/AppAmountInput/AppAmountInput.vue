<script setup lang="ts">
import { MaskInputOptions, vMaska } from 'maska';
import { FieldRule, PickerColumn } from 'vant';
import { PickerConfirmEventParams } from 'vant/es/picker/types';
import { Numeric } from 'vant/lib/utils';
import { useI18n } from 'vue-i18n';

import {
	maskAmount,
	maskPercent
} from '@/shared/ui/components/AppAmountInput/constants';

interface AppAmountInputProps {
	readonly label?: string;
	readonly name?: string;
	readonly placeholder?: string;
	readonly currency?: string;
	readonly modelValue: string;
	readonly currencies?: PickerColumn;
	readonly error?: boolean;
	readonly errorMessage?: string;
	readonly disabled?: boolean;
	readonly readonly?: boolean;
	readonly loading?: boolean;
	readonly showCurrencies?: boolean;
	readonly enableKeyboard?: boolean;
	readonly isPercent?: boolean;
	readonly rules?: FieldRule[];
	readonly confirmKeyboardButtonText?: string;
}

interface AppAmountInputEvents {
	(event: 'update:modelValue', value: string): void;
	(event: 'update:currency', value: string): void;
	(event: 'add'): void;
}

const props = defineProps<AppAmountInputProps>();
const emit = defineEmits<AppAmountInputEvents>();

const { t } = useI18n();

const showPicker = ref(false);

const internalValue = computed({
	get() {
		return props.modelValue;
	},
	set(value) {
		emit('update:modelValue', value);
	}
});

const internalCurrency = computed({
	get() {
		return props.currency;
	},
	set(value) {
		if (!value) return;

		emit('update:currency', value);
	}
});

const pickerValue = ref([unref(internalCurrency)] as Numeric[]);

const displayCurrencySymbol = computed(
	() =>
		props.currencies?.find((item) => item.value === unref(internalCurrency))
			?.symbol
);

const showKeyboard = ref(false);

const onConfirm = ({ selectedOptions }: PickerConfirmEventParams) => {
	const [options] = selectedOptions;
	internalCurrency.value = options?.value as string;

	emit('update:currency', options?.value as string);

	showPicker.value = false;
};

const onCloseKeyboard = () => {
	emit('add');
};

const amountMask: MaskInputOptions = reactive(
	props.isPercent ? maskPercent : maskAmount
);

const handleShowPicker = () => {
	if (props.disabled) return;
	showPicker.value = true;
};
</script>

<template>
	<van-field
		v-model="internalValue"
		v-maska:[amountMask]
		:label="label"
		:name="name"
		center
		:placeholder="placeholder"
		:error="error"
		:error-message="errorMessage"
		:rules="rules"
		:disabled="disabled"
		:readonly="readonly"
		:class="$style['app-amount-input']"
		@focus="showKeyboard = true"
	>
		<template #button>
			<slot name="append" />
			<div
				v-if="showCurrencies"
				:class="$style['app-amount-input__currency']"
				@click="handleShowPicker"
			>
				<span>{{ t('currency') }}</span>
				<van-button size="small" :loading="loading" @click="handleShowPicker">
					{{ displayCurrencySymbol }}
				</van-button>
			</div>
		</template>

		<template #extra>
			<van-number-keyboard
				v-if="enableKeyboard"
				v-model="internalValue"
				:show="showKeyboard"
				theme="custom"
				:close-button-text="confirmKeyboardButtonText || t('add')"
				@blur="showKeyboard = false"
				@close="onCloseKeyboard"
			/>

			<van-popup
				v-if="showCurrencies"
				v-model:show="showPicker"
				position="bottom"
			>
				<van-picker
					v-model="pickerValue"
					:columns="currencies"
					:loading="loading"
					@confirm="onConfirm"
					@cancel="showPicker = false"
				/>
			</van-popup>
		</template>
	</van-field>
</template>

<style module lang="scss">
@import './styles/AppAmountInput.module';
</style>

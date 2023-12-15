<script setup lang="ts">
import { FieldRule, PickerColumn } from 'vant';
import { PickerConfirmEventParams } from 'vant/es/picker/types';

interface AppComboboxProps {
	readonly label?: string;
	readonly enterLabel?: string;
	readonly placeholder?: string;
	readonly enterPlaceholder?: string;
	readonly name?: string;
	readonly customTitle?: string;
	readonly error?: boolean;
	readonly errorMessage?: string;
	readonly modelValue: string | number | undefined;
	readonly items?: PickerColumn;
	readonly rules?: FieldRule[];
	readonly disabled?: boolean;
	readonly readonly?: boolean;
}

interface AppComboboxEvents {
	(event: 'confirm', value: PickerConfirmEventParams): void;
	(event: 'update:modelValue', value: string | number | undefined): void;
}

const props = defineProps<AppComboboxProps>();
const emit = defineEmits<AppComboboxEvents>();

const showPicker = ref(false);
const customInternalValue = ref('');
const internalItems = computed(() => {
	const items = props.items || [];

	if (!props.customTitle) {
		return items;
	}

	return [
		...items,
		{
			text: props.customTitle,
			value: 'other'
		}
	];
});

const isCustom = computed(
	() => props.customTitle && props.modelValue === props.customTitle
);
const internalValue = computed({
	get() {
		return props.modelValue;
	},
	set(value) {
		emit('update:modelValue', value);
		customInternalValue.value = '';
	}
});

const onConfirm = (pickerConfirmEventParams: PickerConfirmEventParams) => {
	const [options] = pickerConfirmEventParams.selectedOptions;
	internalValue.value = options?.text as string;

	emit('confirm', pickerConfirmEventParams);

	showPicker.value = false;
};

const onChangeCustomValue = () => {
	if (unref(isCustom)) {
		internalValue.value = unref(customInternalValue);
	}
};

const handleShowPicker = () => {
	if (props.disabled) return;

	showPicker.value = true;
};
</script>

<template>
	<van-field
		v-model="internalValue"
		is-link
		readonly
		:name="name"
		:label="label"
		:placeholder="placeholder"
		:error="error"
		:error-message="errorMessage"
		:rules="!isCustom ? rules : []"
		:disabled="disabled"
		:class="$style['app-combobox']"
		v-bind="$attrs"
		@click="handleShowPicker"
	/>

	<van-field
		v-if="isCustom"
		v-model="customInternalValue"
		:name="name"
		:label="enterLabel"
		:placeholder="enterPlaceholder"
		:disabled="disabled"
		:readonly="readonly"
		:rules="rules"
		v-bind="$attrs"
		@blur="onChangeCustomValue"
	/>

	<van-popup v-model:show="showPicker" position="bottom">
		<van-picker
			:columns="internalItems"
			@confirm="onConfirm"
			@cancel="showPicker = false"
		/>
	</van-popup>
</template>

<style module lang="scss">
@import './styles/AppCombobox.module';
</style>

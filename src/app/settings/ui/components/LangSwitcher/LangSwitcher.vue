<script setup lang="ts">
import { useToggle } from '@vueuse/core';
import { PickerConfirmEventParams } from 'vant/es/picker/types';
import { useI18n } from 'vue-i18n';

import { useLanguage } from '@/app/settings/features/useLanguage.ts';

const { languages, changeLanguage } = useLanguage();
const { t } = useI18n();

const [showPicker, toggleShowPicker] = useToggle();

const onConfirm = ({ selectedValues }: PickerConfirmEventParams) => {
	const [lang] = selectedValues;
	changeLanguage(lang as string);
	toggleShowPicker();
};
</script>

<template>
	<van-cell
		is-link
		:title="t('settings.language')"
		@click="() => toggleShowPicker()"
	/>
	<van-popup v-model:show="showPicker" round position="bottom">
		<van-picker
			:title="t('settings.changeLanguage')"
			:columns="languages"
			@confirm="onConfirm"
			@cancel="() => toggleShowPicker()"
		/>
	</van-popup>
</template>

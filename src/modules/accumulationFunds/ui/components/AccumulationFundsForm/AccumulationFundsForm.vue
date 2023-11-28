<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { AppFormNavigation } from '@/shared/ui/components';

interface AccumulationFundsFormProps {
	readonly hasSubmitButton?: boolean;
	readonly hasBackButton?: boolean;
	readonly hasAddButton?: boolean;
	readonly hideFormNavigation?: boolean;
}

interface AccumulationFundsFormEvents {
	(event: 'click:add'): void;
	(event: 'click:submit'): void;
	(event: 'click:back'): void;
}

defineProps<AccumulationFundsFormProps>();
const emit = defineEmits<AccumulationFundsFormEvents>();

const { t } = useI18n();
</script>

<template>
	<van-form :class="$style['accumulation-funds-form']">
		<app-form-navigation
			v-if="!hideFormNavigation"
			:has-add-button="hasAddButton"
			:has-submit-button="hasSubmitButton"
			:has-back-button="hasBackButton"
			:submit-text="t('continue')"
			@click:back="() => emit('click:back')"
		/>

		<slot />
	</van-form>
</template>

<style module lang="scss">
@import './styles/AccumulationFundsForm.module';
</style>

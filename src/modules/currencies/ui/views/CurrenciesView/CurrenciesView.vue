<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { AppRoutes } from '@/app/router/constants';
import { CurrenciesSelector } from '@/modules/currencies/ui/components';
import { useCurrenciesSelector } from '@/modules/currencies/ui/components/CurrenciesSelector/features';
import { useAppHeader } from '@/shared/ui/components';

const { t } = useI18n();
const { setHeader } = useAppHeader();
const router = useRouter();

const { handleSave, isLoading } = useCurrenciesSelector();

setHeader({
	textLeft: t('back'),
	isLeftArrow: true,
	textRight: t('save'),
	isRightDisabled: isLoading,
	onClickLeft: () => {
		router.push({ name: AppRoutes.Settings });
	},
	onClickRight: async () => {
		await handleSave();
	}
});
</script>

<template>
	<currencies-selector />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { AppPopups, usePopups } from '@/app/popups';
import { AppRoutes } from '@/app/router/constants';
import { IncomesList } from '@/modules/incomes/ui/components';
import { useIncomesList } from '@/modules/incomes/ui/components/IncomesList/features';
import { useAppHeader, useAppNav } from '@/shared/ui/components';

const { t } = useI18n();
const { setHeader } = useAppHeader();
const { setNav } = useAppNav();
const router = useRouter();
const { setPopup } = usePopups();

const { handleRefresh } = useIncomesList();

setHeader({
	isLeftArrow: true,
	textLeft: t('back'),
	textRight: t('add'),
	onClickLeft: () => {
		router.push({ name: AppRoutes.Dashboard });
	},
	onClickRight: () => {
		setPopup(AppPopups.AddIncome, {
			onSuccess: handleRefresh
		});
	}
});
setNav({
	popupOptions: {
		onSuccess: handleRefresh
	}
});
</script>

<template>
	<div :class="$style['incomes-view']">
		<incomes-list />
	</div>
</template>

<style module lang="scss">
@import './styles/IncomesView.module';
</style>

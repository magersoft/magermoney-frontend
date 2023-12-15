<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { AppRoutes } from '@/app/router/constants';
import {
	SavedFundsForm,
	SavedFundsList,
	useSavedFunds
} from '@/modules/savedFunds';
import { useAppHeader } from '@/shared/ui/components';

const { t } = useI18n();
const { setHeader } = useAppHeader();
const router = useRouter();

setHeader({
	textLeft: t('back'),
	isLeftArrow: true,
	onClickLeft: () => {
		router.push({ name: AppRoutes.Settings });
	}
});

const { isLoading, fetchSavedFunds } = useSavedFunds();
</script>

<template>
	<van-pull-refresh
		:model-value="isLoading"
		@refresh="fetchSavedFunds({ force: true })"
	>
		<saved-funds-form has-add-button />
		<saved-funds-list />
	</van-pull-refresh>
</template>

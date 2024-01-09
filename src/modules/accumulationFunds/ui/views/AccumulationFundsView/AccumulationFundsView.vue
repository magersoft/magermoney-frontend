<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import {
	AccumulationFundsBalance,
	AccumulationFundsCircle,
	AccumulationFundsForm,
	useInitAccumulationFunds
} from '@/modules/accumulationFunds';
import { useAppHeader } from '@/shared/ui/components';

const { t } = useI18n();
const { setHeader } = useAppHeader();
const router = useRouter();

setHeader({
	textLeft: t('back'),
	isLeftArrow: true,
	onClickLeft: () => {
		router.back();
	}
});

const { isLoading, fetchInitAccumulationFunds } = useInitAccumulationFunds();
</script>

<template>
	<van-pull-refresh
		:model-value="isLoading"
		@refresh="fetchInitAccumulationFunds"
	>
		<accumulation-funds-form has-add-button />
		<accumulation-funds-circle />
		<accumulation-funds-balance />
	</van-pull-refresh>
</template>

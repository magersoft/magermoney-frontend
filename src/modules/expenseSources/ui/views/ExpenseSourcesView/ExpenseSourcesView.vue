<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { AppRoutes } from '@/app/router/constants';
import {
	ExpenseSourcesForm,
	ExpenseSourcesList,
	useExpenseSources
} from '@/modules/expenseSources';
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

const { isLoading, fetchExpenseSources } = useExpenseSources();
</script>

<template>
	<van-pull-refresh
		:model-value="isLoading"
		@refresh="fetchExpenseSources({ force: true })"
	>
		<expense-sources-form has-add-button />
		<expense-sources-list />
	</van-pull-refresh>
</template>

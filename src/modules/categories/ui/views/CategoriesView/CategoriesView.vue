<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { AppRoutes } from '@/app/router/constants';
import { CategoriesList } from '@/modules/categories/ui/components';
import { useCategoriesList } from '@/modules/categories/ui/components/CategoriesList/features';
import { useAppHeader } from '@/shared/ui/components';

const { t } = useI18n();
const { setHeader } = useAppHeader();
const router = useRouter();

const { isRefreshLoading, isLoading, handleRefresh } = useCategoriesList();

setHeader({
	textLeft: t('back'),
	isLeftArrow: true,
	onClickLeft: () => {
		router.push({ name: AppRoutes.Settings });
	}
});
</script>

<template>
	<van-pull-refresh
		:model-value="isRefreshLoading"
		:disabled="isLoading"
		@refresh="handleRefresh"
	>
		<categories-list :is-refresh-loading="isRefreshLoading" />
	</van-pull-refresh>
</template>

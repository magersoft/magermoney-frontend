<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { AppRoutes } from '@/app/router/constants';
import { TotalBalanceWidget } from '@/modules/dashboard';
import { WalletsList } from '@/modules/wallets/ui/components';
import { useInitWallets } from '@/modules/wallets/ui/views/WalletsView/features';
import { useAppHeader } from '@/shared/ui/components';

const { t } = useI18n();
const { setHeader } = useAppHeader();
const router = useRouter();

setHeader({
	textLeft: t('back'),
	textRight: t('add'),
	isLeftArrow: true,
	onClickLeft: () => {
		router.push({ name: AppRoutes.Dashboard });
	}
});

const { isLoading, fetchWallets } = useInitWallets();

fetchWallets();

const sortable = ref(false);
</script>

<template>
	<van-pull-refresh
		:model-value="isLoading"
		:class="$style['wallets-view']"
		:pull-distance="20"
		:disabled="sortable"
		@refresh="fetchWallets"
	>
		<total-balance-widget hide-view-all />
		<wallets-list
			:class="$style['wallets-view__list']"
			@click:sort="(value) => (sortable = value)"
		/>
	</van-pull-refresh>
</template>

<style module lang="scss">
@import './styles/WalletsView.module';
</style>

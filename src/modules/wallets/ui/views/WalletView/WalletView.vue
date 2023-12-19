<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import {
	WalletItem,
	WalletItemSkeleton
} from '@/modules/wallets/ui/components';
import { WalletActions } from '@/modules/wallets/ui/views/WalletView/constants';
import { useWalletView } from '@/modules/wallets/ui/views/WalletView/features';
import { useAppHeader } from '@/shared/ui/components';

const { t } = useI18n();
const { setHeader } = useAppHeader();
const router = useRouter();

const { savedFund, isLoading, handleSelectAction } = useWalletView();

setHeader({
	title: 'Кошелек',
	textLeft: t('back'),
	isLeftArrow: true,
	onClickLeft: () => {
		router.back();
	},
	onSelectAction: ({ action }) => handleSelectAction(action),
	actions: [
		{
			text: t('change'),
			icon: 'edit',
			action: WalletActions.Edit
		},
		{
			text: t('delete'),
			icon: 'delete',
			action: WalletActions.Delete
		}
	]
});
</script>

<template>
	<div :class="$style['wallet-view']">
		<wallet-item-skeleton v-if="isLoading" />
		<wallet-item v-else :item="savedFund" />
	</div>
</template>

<style module lang="scss">
@import './styles/WalletView.module';
</style>

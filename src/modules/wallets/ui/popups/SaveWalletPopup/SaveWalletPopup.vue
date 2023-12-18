<script setup lang="ts">
import { usePopups } from '@/app/popups';
import { WalletSaveForm } from '@/modules/wallets/ui/components';
import { useInitSaveWalletPopup } from '@/modules/wallets/ui/popups/SaveWalletPopup/features';

const { handleShow } = usePopups();

useInitSaveWalletPopup();

onMounted(() => {
	handleShow();
});
</script>

<template>
	<van-popup round position="bottom" :style="{ height: '90%' }">
		<slot name="header" />

		<wallet-save-form />
	</van-popup>
</template>

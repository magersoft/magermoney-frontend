<script setup lang="ts">
import WalletItemSkeleton from '@/modules/wallets/ui/components/WalletItem/WalletItemSkeleton.vue';

interface WalletsListSkeletonProps {
	readonly count: number;
}

defineProps<WalletsListSkeletonProps>();
</script>

<template>
	<div :class="$style['wallets-list-skeleton__container']">
		<wallet-item-skeleton
			v-for="i of count"
			:key="i"
			:class="$style['wallets-list-skeleton__item']"
		/>
	</div>
</template>

<style module lang="scss">
@import './styles/WalletsListSkeleton.module';
</style>

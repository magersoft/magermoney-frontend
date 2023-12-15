<script setup lang="ts">
interface WalletsListSkeletonProps {
	readonly count: number;
}

defineProps<WalletsListSkeletonProps>();
</script>

<template>
	<div :class="$style['wallets-list-skeleton__container']">
		<div
			v-for="i of count"
			:key="i"
			:class="$style['wallets-list-skeleton__item']"
		>
			<div :class="$style['wallet-item-skeleton__header']">
				<van-skeleton-paragraph row-width="40%" />
			</div>
			<div :class="$style['wallet-item-skeleton__body']">
				<van-skeleton-paragraph row-width="60%" :style="{ height: '40px' }" />
			</div>
			<div :class="$style['wallet-item-skeleton__footer']">
				<van-skeleton-paragraph row-width="30%" />
			</div>
		</div>
	</div>
</template>

<style module lang="scss">
@import './styles/WalletsListSkeleton.module';
</style>

<template>
	<div :class="$style['wallet-item-skeleton']">
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
</template>

<style module lang="scss">
@import './styles/WalletItemSkeleton.module';
</style>

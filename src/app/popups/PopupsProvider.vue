<script setup lang="ts">
import { usePopups } from '@/app/popups';

const { popupComponent, isShowed, handleClose, handleClosed } = usePopups();
</script>

<template>
	<component
		:is="popupComponent"
		:show="isShowed"
		@close="handleClose"
		@closed="handleClosed"
	>
		<template #header>
			<div :class="$style['popup__header']" @click="handleClose">
				<div :class="$style['popup__header-bar']"></div>
			</div>
		</template>
	</component>
</template>

<style module lang="scss">
@import './styles/PopupsProvider.module';
</style>

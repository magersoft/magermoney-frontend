<script setup lang="ts">
import { useAppHeader, useAppNav } from '@/shared/ui/components';
import { classNames } from '@/shared/utils';

const { header } = useAppHeader();
const { nav } = useAppNav();
</script>

<template>
	<div
		:class="
			classNames($style['app-view'], {
				[$style['app-view--hidden-header']]: header.isHidden,
				[$style['app-view--hidden-nav']]: nav.isHidden
			})
		"
	>
		<slot />
	</div>
</template>

<style module lang="scss">
@import './styles/AppView.module';
</style>

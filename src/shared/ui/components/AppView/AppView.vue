<script setup lang="ts">
import { useAppHeader, useAppNav } from '@/shared/ui/components';
import { classNames } from '@/shared/utils';

const { isHidden: isHiddenHeader } = useAppHeader();
const { isHidden: isHiddenNav } = useAppNav();
</script>

<template>
	<div
		:class="
			classNames($style['app-view'], {
				[$style['app-view--hidden-header']]: isHiddenHeader,
				[$style['app-view--hidden-nav']]: isHiddenNav
			})
		"
	>
		<slot />
	</div>
</template>

<style module lang="scss">
@import './styles/AppView.module';
</style>

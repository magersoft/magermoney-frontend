<script setup lang="ts">
import { IncomeSourceForm, IncomeSourcesList } from '@/modules/incomeSource';
import { useAppHeader, useAppNav } from '@/shared/ui/components';

const { setHeader } = useAppHeader();
const { setNav } = useAppNav();

setHeader({
	isHidden: true
});
setNav({
	isHidden: true
});
</script>

<template>
	<div :class="$style['welcome-view']">
		<income-source-form />
		<income-sources-list />
	</div>
</template>

<style module lang="scss">
@import './styles/WelcomeView.module';
</style>

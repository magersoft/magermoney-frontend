<script setup lang="ts">
import { useAppHeader, useAppNav } from '@/shared/ui/components';

const { setHeader } = useAppHeader();
const { setNav } = useAppNav();

setHeader({
	isHidden: true
});
setNav({
	isHidden: true
});

const onReload = () => {
	window.location.href = '/';
};
</script>

<template>
	<div>500 Internal Server Error</div>
	<van-button @click="onReload">Reload</van-button>
</template>

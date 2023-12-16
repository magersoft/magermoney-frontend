<script setup lang="ts">
import { usePopups } from '@/app/popups';

const { handleShow } = usePopups();

onMounted(() => {
	handleShow();
});
</script>

<template>
	<van-popup round position="bottom" :style="{ height: '90%' }">
		<slot name="header" />

		save wallet popup
	</van-popup>
</template>

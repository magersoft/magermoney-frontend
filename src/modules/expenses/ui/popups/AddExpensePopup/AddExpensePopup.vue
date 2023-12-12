<script setup lang="ts">
import { usePopups } from '@/app/popups';

const { handleShow } = usePopups();

onMounted(() => {
	handleShow();
});
</script>

<template>
	<van-popup round position="bottom" :style="{ height: '80%' }">
		ExpensePopup
	</van-popup>
</template>

<script setup lang="ts">
import { usePopups } from '@/app/popups';
import { CategorySaveForm } from '@/modules/categories/ui/components';

const { handleShow } = usePopups();

onMounted(() => {
	handleShow();
});
</script>

<template>
	<van-popup round position="bottom" :style="{ height: '90%' }">
		<slot name="header" />

		<category-save-form />
	</van-popup>
</template>

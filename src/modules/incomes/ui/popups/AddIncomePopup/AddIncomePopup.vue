<script setup lang="ts">
import { usePopups } from '@/app/popups';
import { AddIncomeForm } from '@/modules/incomes/ui/components';

const { handleShow } = usePopups();

onMounted(() => {
	handleShow();
});
</script>

<template>
	<van-popup round position="bottom" :style="{ height: '90%' }">
		<slot name="header" />

		<add-income-form />
	</van-popup>
</template>

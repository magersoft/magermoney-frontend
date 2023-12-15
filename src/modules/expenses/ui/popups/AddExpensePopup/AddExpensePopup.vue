<script setup lang="ts">
import { usePopups } from '@/app/popups';
import { AddExpenseForm } from '@/modules/expenses/ui/components';

const { handleShow } = usePopups();

onMounted(() => {
	handleShow();
});
</script>

<template>
	<van-popup round position="bottom" :style="{ height: '90%' }">
		<slot name="header" />

		<add-expense-form />
	</van-popup>
</template>

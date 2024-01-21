<script setup lang="ts">
import { useCategories } from '@/modules/categories';

const { category, isLoading } = useCategories();
</script>

<template>
	<div>
		<div v-if="isLoading">Loading ...</div>
		<div v-else>{{ category }}</div>
	</div>
</template>

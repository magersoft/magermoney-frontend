<script setup lang="ts">
import { useExpensesFilters } from '@/modules/expenses/ui/components/ExpensesFilters/features';
import { AppFilters } from '@/shared/ui/components';

interface ExpensesFiltersEvents {
	(event: 'calendar:opened'): void;
	(event: 'calendar:closed'): void;
}

const emit = defineEmits<ExpensesFiltersEvents>();

const { isLoading, handleConfirm, handleReset } = useExpensesFilters();
</script>

<template>
	<app-filters
		:loading="isLoading"
		@calendar:opened="emit('calendar:opened')"
		@calendar:closed="emit('calendar:closed')"
		@confirm="handleConfirm"
		@reset="handleReset"
	/>
</template>

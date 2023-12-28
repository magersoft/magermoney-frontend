<script setup lang="ts">
import { useIncomesFilters } from '@/modules/incomes/ui/components/IncomesFilters/features';
import { AppFilters } from '@/shared/ui/components';

interface IncomesFiltersEvents {
	(event: 'calendar:opened'): void;
	(event: 'calendar:closed'): void;
}

const emit = defineEmits<IncomesFiltersEvents>();

const { isLoading, handleConfirm, handleReset } = useIncomesFilters();
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

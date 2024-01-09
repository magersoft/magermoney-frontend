<script setup lang="ts">
import { useHistoryFilters } from '@/modules/history/ui/components/HistoryFilters/features';
import { AppFilters } from '@/shared/ui/components';

interface HistoryFiltersEvents {
	(event: 'calendar:opened'): void;
	(event: 'calendar:closed'): void;
}

const emit = defineEmits<HistoryFiltersEvents>();

const { isLoading, handleConfirm, handleReset } = useHistoryFilters();
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

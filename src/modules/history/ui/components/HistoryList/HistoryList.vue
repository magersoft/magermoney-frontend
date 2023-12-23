<script setup lang="ts">
import { useHistoryList } from '@/modules/history/ui/components/HistoryList/features';

const { history, initialFetchData } = useHistoryList();

initialFetchData();
</script>

<template>
	<van-cell-group>
		<van-cell
			v-for="(item, idx) in history"
			:key="idx + item.dateOfIssue"
			:title="item.title"
			:value="item.amount"
		/>
	</van-cell-group>
</template>

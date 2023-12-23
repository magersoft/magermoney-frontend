<script setup lang="ts">
interface AppCellSkeleton {
	row?: number | string;
}

withDefaults(defineProps<AppCellSkeleton>(), {
	row: 1
});
</script>

<template>
	<van-cell
		v-for="i in +row"
		:key="i"
		:class="$style['app-cell-skeleton']"
		v-bind="$attrs"
	>
		<template #title>
			<van-skeleton>
				<template #template>
					<van-skeleton-paragraph />
				</template>
			</van-skeleton>
		</template>
		<template #value>
			<van-skeleton>
				<template #template>
					<van-skeleton-paragraph round row-width="15%" />
				</template>
			</van-skeleton>
		</template>
	</van-cell>
</template>

<style module lang="scss">
@import './styles/AppCellSkeleton.module';
</style>

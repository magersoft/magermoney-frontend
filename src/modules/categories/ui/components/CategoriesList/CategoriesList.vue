<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { categoriesTypes } from '@/modules/categories/constants/categoriesTypes.ts';
import {
	useCategoriesList,
	useInitCategoriesList
} from '@/modules/categories/ui/components/CategoriesList/features';
import {
	AppCellDescription,
	AppCellSkeleton,
	AppCellTitle
} from '@/shared/ui/components';

interface CategoriesListProps {
	isRefreshLoading?: boolean;
}

defineProps<CategoriesListProps>();

const { t } = useI18n();
const {
	categories,
	isLoading,
	isFinished,
	handleLoadMore,
	handleEdit,
	handleRemove
} = useCategoriesList();

useInitCategoriesList();
</script>

<template>
	<div :class="$style['categories-list']">
		<app-cell-title :text="t('categoriesView.title')" />
		<app-cell-description :text="t('categoriesView.description')" />

		<van-list
			:loading="isLoading"
			:finished="isFinished"
			:disabled="isRefreshLoading"
			@load="handleLoadMore"
		>
			<van-swipe-cell v-for="category in categories" :key="category.id">
				<van-cell
					:title="category.name"
					:label="t(categoriesTypes[category.type])"
					is-link
					@click="() => handleEdit(category)"
				/>
				<template #right>
					<van-button
						square
						type="danger"
						:text="t('delete')"
						:style="{ height: '100%' }"
						@click="() => handleRemove(category)"
					/>
				</template>
			</van-swipe-cell>
			<app-cell-skeleton
				v-if="isRefreshLoading || isLoading"
				row="10"
				:style="{ height: '66px' }"
			/>
			<van-empty
				v-if="!isLoading && !categories.length"
				image="search"
				:description="t('categoriesView.empty')"
			/>
		</van-list>
	</div>
</template>

<style module lang="scss">
@import './styles/CategoriesList.module';
</style>

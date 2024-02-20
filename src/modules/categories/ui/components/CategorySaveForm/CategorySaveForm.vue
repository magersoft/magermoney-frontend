<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useCategorySaveForm } from '@/modules/categories/ui/components/CategorySaveForm/features';
import { AppCellTitle } from '@/shared/ui/components';

const { t } = useI18n();

const { title, formRef, categorySaveFormData, handleSubmit } =
	useCategorySaveForm();
</script>

<template>
	<van-form
		ref="formRef"
		:class="$style['category-save-form']"
		@submit="handleSubmit"
	>
		<app-cell-title :text="title" />

		<van-cell-group inset>
			<van-field
				v-model="categorySaveFormData.name"
				name="name"
				:label="t('categorySaveForm.name')"
				:placeholder="t('categorySaveForm.enterCategoryName')"
				:rules="[{ required: true, message: t('validation.required') }]"
				:class="$style['category-save-form__field']"
			/>
		</van-cell-group>

		<div :class="$style['category-save-form__actions']">
			<van-button
				round
				block
				type="primary"
				native-type="submit"
				:text="t('save')"
			/>
		</div>
	</van-form>
</template>

<style module lang="scss">
@import './styles/CategorySaveForm.module';
</style>

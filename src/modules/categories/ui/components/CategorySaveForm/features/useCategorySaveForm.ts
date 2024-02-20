import { useI18n } from 'vue-i18n';

import { useCategories } from '@/modules/categories';
import {
	initialCategoryFormControls,
	TInitialCategoryFormData
} from '@/modules/categories/domain/initial.ts';
import { useForm } from '@/shared/features';
import { cloneDeep } from '@/shared/utils';

export function useCategorySaveForm() {
	const categorySaveFormData = ref<TInitialCategoryFormData>(
		cloneDeep(initialCategoryFormControls)
	);
	const { category } = useCategories();

	const { t } = useI18n();
	const { formRef, validateForm } = useForm();

	const isEditing = computed(() => !!unref(category));
	const title = computed(() =>
		unref(isEditing) ? t('categorySaveForm.edit') : t('categorySaveForm.add')
	);

	watch(
		category,
		(value) => {
			if (value) {
				categorySaveFormData.value = {
					name: value.name
				};
			}
		},
		{ immediate: true }
	);

	const handleSubmit = async () => {
		if (await validateForm()) {
			alert('Пока недоступно! В разработке');
			return;
		}
	};

	return {
		title,
		formRef,
		categorySaveFormData,
		handleSubmit
	};
}

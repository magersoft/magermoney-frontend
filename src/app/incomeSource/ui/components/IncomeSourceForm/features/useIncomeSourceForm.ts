import { useForm } from '@/shared/features';
import { cloneDeep } from '@/shared/utils';

import {
	initialIncomeSourceFormControls,
	TInitialIncomeSourceFormData
} from '../../../../domain';
import {
	useCreateIncomeSourceService,
	useFetchIncomeSourcesService
} from '../../../../infrastructure/services';
import { useIncomeSourceStore } from '../../../../infrastructure/stores';
import { mappingIncomeSourceFormData } from '../utils';

export function useIncomeSourceForm() {
	const incomeSourceFormData = ref<TInitialIncomeSourceFormData>(
		cloneDeep(initialIncomeSourceFormControls)
	);
	const { createIncomeSource } = useCreateIncomeSourceService();
	const { fetchIncomeSources } = useFetchIncomeSourcesService();
	const { isLoading, error } = useIncomeSourceStore();
	const { formRef, validateForm, hasServerError, errorMessages } =
		useForm(error);

	const continueSubmitHandler = async () => {
		if (!(await validateForm())) return;

		const response = await createIncomeSource(
			{},
			mappingIncomeSourceFormData(unref(incomeSourceFormData))
		);

		if (unref(response?.data)) {
			incomeSourceFormData.value = { ...initialIncomeSourceFormControls };

			console.log('next step');
		}
	};

	const addMoreSubmitHandler = async () => {
		if (!(await validateForm())) return;

		const response = await createIncomeSource(
			{},
			mappingIncomeSourceFormData(unref(incomeSourceFormData))
		);

		if (unref(response?.data)) {
			incomeSourceFormData.value = { ...initialIncomeSourceFormControls };

			await fetchIncomeSources({ force: true, quite: true });
		}
	};

	return {
		formRef,
		incomeSourceFormData,
		hasServerError,
		errorMessages,
		isLoading,
		addMoreSubmitHandler,
		continueSubmitHandler
	};
}

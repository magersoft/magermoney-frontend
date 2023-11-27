import { useCurrencies } from '@/modules/currencies';
import { useWelcomeSteps } from '@/modules/welcome';
import { WelcomeStepsType } from '@/modules/welcome/constants';
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
import { useIncomeSourcesStore } from '../../../../infrastructure/stores';
import { mappingIncomeSourceFormData } from '../utils';

export function useIncomeSourceForm() {
	const incomeSourceFormData = ref<TInitialIncomeSourceFormData>(
		cloneDeep(initialIncomeSourceFormControls)
	);
	const { createIncomeSource } = useCreateIncomeSourceService();
	const { hasIncomeSources, fetchIncomeSources } =
		useFetchIncomeSourcesService();
	const { isLoading, error } = useIncomeSourcesStore();
	const { currenciesItems, isLoading: isLoadingCurrencies } = useCurrencies();

	const {
		formRef,
		validateForm,
		resetValidationForm,
		hasServerError,
		errorMessages
	} = useForm(error);
	const { setStep } = useWelcomeSteps();

	const continueHandler = async () => {
		if (!unref(hasIncomeSources)) return;

		if (await validateForm()) {
			await addSubmitHandler();
		}

		resetValidationForm();

		setStep(WelcomeStepsType.ACCUMULATED_FUNDS);
	};

	const addSubmitHandler = async () => {
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
		hasIncomeSources,
		currenciesItems,
		isLoading,
		isLoadingCurrencies,
		addSubmitHandler,
		continueHandler
	};
}

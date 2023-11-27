import {
	initialAccumulatedFundsFormControls,
	TInitialAccumulatedFundsFormData
} from '@/modules/accumulatedFunds/domain';
import {
	useCreateAccumulatedFundService,
	useFetchAccumulatedFundsService
} from '@/modules/accumulatedFunds/infrastructure/services';
import { useAccumulatedFundsStore } from '@/modules/accumulatedFunds/infrastructure/stores';
import { mappingAccumulatedFundsFormData } from '@/modules/accumulatedFunds/ui/components/AccumulatedFundsForm/utils';
import { useCurrencies } from '@/modules/currencies';
import { useWelcomeSteps } from '@/modules/welcome';
import { WelcomeStepsType } from '@/modules/welcome/constants';
import { useForm } from '@/shared/features';
import { cloneDeep } from '@/shared/utils';

export function useAccumulatedFundsForm() {
	const accumulatedFundsFormData = ref<TInitialAccumulatedFundsFormData>(
		cloneDeep(initialAccumulatedFundsFormControls)
	);
	const { createAccumulatedFund } = useCreateAccumulatedFundService();
	const { hasAccumulatedFunds, fetchAccumulatedFunds } =
		useFetchAccumulatedFundsService();
	const { isLoading, error } = useAccumulatedFundsStore();
	const { currenciesItems, isLoading: isLoadingCurrencies } = useCurrencies();

	const {
		formRef,
		hasServerError,
		errorMessages,
		validateForm,
		resetValidationForm
	} = useForm(error);
	const { setStep } = useWelcomeSteps();

	const continueHandler = async () => {
		if (!unref(hasAccumulatedFunds)) return;

		if (await validateForm()) {
			await addSubmitHandler();
		}

		resetValidationForm();

		setStep(WelcomeStepsType.ACCUMULATION_FUNDS);
	};

	const addSubmitHandler = async () => {
		if (!(await validateForm())) return;

		const response = await createAccumulatedFund(
			{},
			mappingAccumulatedFundsFormData(unref(accumulatedFundsFormData))
		);

		if (unref(response?.data)) {
			accumulatedFundsFormData.value = {
				...initialAccumulatedFundsFormControls
			};

			await fetchAccumulatedFunds({ force: true, quite: true });
		}
	};

	return {
		formRef,
		accumulatedFundsFormData,
		hasServerError,
		errorMessages,
		hasAccumulatedFunds,
		currenciesItems,
		isLoading,
		isLoadingCurrencies,
		addSubmitHandler,
		continueHandler
	};
}

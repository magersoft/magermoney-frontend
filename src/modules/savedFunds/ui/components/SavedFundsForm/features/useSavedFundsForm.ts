import { useCurrencies } from '@/modules/currencies';
import {
	initialSavedFundsFormControls,
	TInitialSavedFundsFormData
} from '@/modules/savedFunds/domain';
import {
	useCreateSavedFundService,
	useFetchSavedFundsService
} from '@/modules/savedFunds/infrastructure/services';
import { useSavedFundsStore } from '@/modules/savedFunds/infrastructure/stores';
import { mappingSavedFundsFormData } from '@/modules/savedFunds/ui/components/SavedFundsForm/utils';
import { useWelcomeSteps } from '@/modules/welcome';
import { WelcomeStepsType } from '@/modules/welcome/constants';
import { useForm } from '@/shared/features';
import { cloneDeep } from '@/shared/utils';

export function useSavedFundsForm() {
	const savedFundsFormData = ref<TInitialSavedFundsFormData>(
		cloneDeep(initialSavedFundsFormControls)
	);
	const { createSavedFund } = useCreateSavedFundService();
	const { hasSavedFunds, fetchSavedFunds } = useFetchSavedFundsService();
	const { isLoading, error } = useSavedFundsStore();
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
		if (!unref(hasSavedFunds)) return;

		if (await validateForm()) {
			await addSubmitHandler();
		}

		resetValidationForm();

		setStep(WelcomeStepsType.ACCUMULATION_FUNDS);
	};

	const addSubmitHandler = async () => {
		if (!(await validateForm())) return;

		const response = await createSavedFund(
			{},
			mappingSavedFundsFormData(unref(savedFundsFormData))
		);

		if (unref(response?.data)) {
			savedFundsFormData.value = {
				...initialSavedFundsFormControls
			};

			await fetchSavedFunds({ force: true, quite: true });
		}
	};

	return {
		formRef,
		savedFundsFormData,
		hasServerError,
		errorMessages,
		hasSavedFunds,
		currenciesItems,
		isLoading,
		isLoadingCurrencies,
		addSubmitHandler,
		continueHandler
	};
}

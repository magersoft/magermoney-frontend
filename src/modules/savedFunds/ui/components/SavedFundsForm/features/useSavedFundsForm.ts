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
import { useForm } from '@/shared/features';
import { ActionButtonsEventListeners } from '@/shared/ui/components';
import { cloneDeep } from '@/shared/utils';

interface UseSavedFundsFormParams extends ActionButtonsEventListeners {}

export function useSavedFundsForm({
	onAdd,
	onSubmit,
	onBack
}: UseSavedFundsFormParams = {}) {
	const savedFundsFormData = ref<TInitialSavedFundsFormData>(
		cloneDeep(initialSavedFundsFormControls)
	);
	const { createSavedFund } = useCreateSavedFundService();
	const { fetchSavedFunds } = useFetchSavedFundsService();
	const { hasSavedFunds, isLoading, error } = useSavedFundsStore();
	const { currenciesItems, isLoading: isLoadingCurrencies } = useCurrencies();

	const { formRef, hasServerError, validateForm, resetValidationForm } =
		useForm(error);

	const handleSubmit = async () => {
		if (!unref(hasSavedFunds)) return;

		if (await validateForm()) {
			await handleAddSubmit();
		}

		resetValidationForm();

		onSubmit?.();
	};

	const handleAddSubmit = async () => {
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

			onAdd?.();
		}
	};

	const handleBack = () => {
		resetValidationForm();

		onBack?.();
	};

	return {
		formRef,
		savedFundsFormData,
		hasServerError,
		hasSavedFunds,
		currenciesItems,
		isLoading,
		isLoadingCurrencies,
		handleAddSubmit,
		handleSubmit,
		handleBack
	};
}

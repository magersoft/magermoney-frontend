import { PickerConfirmEventParams } from 'vant/es/picker/types';

import { useCategories } from '@/modules/categories';
import { useCurrencies } from '@/modules/currencies';
import { useSavedFunds } from '@/modules/savedFunds';
import {
	initialSavedFundsFormControls,
	TInitialSavedFundsFormData
} from '@/modules/savedFunds/domain';
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
	const { hasSavedFunds, isLoading, error, createSavedFund, fetchSavedFunds } =
		useSavedFunds();
	const { currenciesItems, isLoading: isLoadingCurrencies } = useCurrencies();

	const { formRef, hasServerError, validateForm, resetValidationForm } =
		useForm(error);

	const {
		savedCategoriesItems,
		isLoading: isLoadingCategories,
		fetchCategories
	} = useCategories();

	const handleConfirmSavedFundsPicker = ({
		selectedOptions
	}: PickerConfirmEventParams) => {
		const [option] = selectedOptions;

		if (option) {
			savedFundsFormData.value = {
				...unref(savedFundsFormData),
				source: option.text as string,
				categoryId: option.value as number
			};
		}
	};

	const handleUpdateSavedFundsTitle = (title?: string | number) => {
		savedFundsFormData.value = {
			...unref(savedFundsFormData),
			source: title as string,
			categoryId: undefined
		};
	};

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
			await fetchCategories({ force: true, quite: true });

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
		savedCategoriesItems,
		isLoading,
		isLoadingCurrencies,
		isLoadingCategories,
		handleConfirmSavedFundsPicker,
		handleUpdateSavedFundsTitle,
		handleAddSubmit,
		handleSubmit,
		handleBack
	};
}

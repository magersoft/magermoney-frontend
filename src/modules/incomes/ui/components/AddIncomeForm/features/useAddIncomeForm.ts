import { PickerConfirmEventParams } from 'vant/es/picker/types';
import { useI18n } from 'vue-i18n';

import { usePopups } from '@/app/popups';
import { useCategories } from '@/modules/categories';
import { useCurrencies, useCurrencyFormat } from '@/modules/currencies';
import { useInitDashboard } from '@/modules/dashboard/features';
import { useIncomes } from '@/modules/incomes';
import { createdIncomeMessages } from '@/modules/incomes/constants';
import {
	initialIncomeFormData,
	TInitialIncomeFormData
} from '@/modules/incomes/domain';
import { mappingIncomeFormData } from '@/modules/incomes/ui/components/AddIncomeForm/utils';
import { useIncomeSources } from '@/modules/incomeSources';
import { useSavedFunds } from '@/modules/savedFunds';
import { useForm, useTranslateSystemMessages } from '@/shared/features';
import { useSettleResponse } from '@/shared/infrastructure/services/useSettleResponse.ts';
import { cloneDeep, roundWithDecimals } from '@/shared/utils';

export function useAddIncomeForm() {
	const incomeFormData = ref<TInitialIncomeFormData>(
		cloneDeep(initialIncomeFormData)
	);

	const { isLoading, error, createIncome } = useIncomes();
	const { incomeSourcesItems } = useIncomeSources();
	const { savedFundsItems } = useSavedFunds();
	const { currenciesItems, isLoading: isLoadingCurrencies } = useCurrencies();
	const {
		incomeCategoriesItems,
		isLoading: isLoadingCategories,
		fetchIncomeCategories
	} = useCategories();

	const { fetchDashboard } = useInitDashboard();
	const { getCurrencySymbol } = useCurrencyFormat();
	const { settleResponse } = useSettleResponse();
	const { translateSystemMessages } = useTranslateSystemMessages();

	const { locale } = useI18n();

	const { formRef, hasServerError, validateForm, resetValidationForm } =
		useForm(error);
	const { handleClose, options: popupOptions } = usePopups();

	const showedIncomeSourcesPicker = ref(false);
	const showedDatePicker = ref(false);
	const isMonthlyExpense = ref(false);
	const formattedDate = ref(new Date().toLocaleDateString(unref(locale)));
	const savedFundTitle = ref('');

	watch(isMonthlyExpense, () => {
		resetValidationForm();

		incomeFormData.value = {
			...unref(initialIncomeFormData)
		};
	});

	const handleShowIncomeSourcesPicker = () => {
		if (unref(isLoading)) return;
		showedIncomeSourcesPicker.value = true;
	};

	const handleShowDatePicker = () => {
		if (unref(isLoading)) return;
		showedDatePicker.value = true;
	};

	const handleConfirmCategoriesPicker = ({
		selectedOptions
	}: PickerConfirmEventParams) => {
		const [option] = selectedOptions;

		if (option) {
			incomeFormData.value = {
				...unref(incomeFormData),
				customCategoryName: option.text as string,
				categoryId: option.value as number
			};
		}
	};

	const handleUpdateCategoriesTitle = (title?: string | number) => {
		incomeFormData.value = {
			...unref(incomeFormData),
			customCategoryName: title as string,
			categoryId: undefined
		};
	};

	const handleConfirmIncomeSourcesPicker = ({
		selectedOptions
	}: PickerConfirmEventParams) => {
		const [option] = selectedOptions;

		if (option) {
			incomeFormData.value = {
				...unref(incomeFormData),
				title: option.category.name,
				amount: roundWithDecimals(option.amount),
				currency: option.currency.code,
				incomeSourceId: option.id
			};

			showedIncomeSourcesPicker.value = false;
		}
	};

	const handleConfirmSavedFundsPicker = ({
		selectedOptions
	}: PickerConfirmEventParams) => {
		const [option] = selectedOptions;

		if (option) {
			incomeFormData.value = {
				...unref(incomeFormData),
				savedFundId: option.value as number
			};

			savedFundTitle.value = option.text as string;
		}
	};

	const handleConfirmDatePicker = (date: Date) => {
		incomeFormData.value = {
			...unref(incomeFormData),
			dateOfIssue: date.toISOString()
		};

		formattedDate.value = date.toLocaleDateString(unref(locale));

		showedDatePicker.value = false;
	};

	const handleSubmit = async () => {
		if (await validateForm()) {
			const response = await createIncome(
				{},
				mappingIncomeFormData(unref(incomeFormData))
			);

			if (response) {
				settleResponse(response, {
					messages: translateSystemMessages(createdIncomeMessages),
					onSuccess: async () => {
						incomeFormData.value = { ...initialIncomeFormData };

						await unref(popupOptions)?.onSuccess?.();

						resetValidationForm();
						handleClose();

						await fetchDashboard();
						await fetchIncomeCategories({ force: true, quite: true });
					},
					onError: async () => {
						await unref(popupOptions)?.onError?.();
					}
				});
			}
		}
	};

	return {
		formRef,
		hasServerError,
		incomeFormData,
		incomeSourcesItems,
		savedFundsItems,
		currenciesItems,
		incomeCategoriesItems,
		showedIncomeSourcesPicker,
		showedDatePicker,
		isLoading,
		isLoadingCurrencies,
		isLoadingCategories,
		isMonthlyExpense,
		formattedDate,
		savedFundTitle,
		getCurrencySymbol,
		handleShowDatePicker,
		handleShowIncomeSourcesPicker,
		handleUpdateCategoriesTitle,
		handleConfirmCategoriesPicker,
		handleConfirmIncomeSourcesPicker,
		handleConfirmSavedFundsPicker,
		handleConfirmDatePicker,
		handleSubmit
	};
}

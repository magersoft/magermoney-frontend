import { PickerConfirmEventParams } from 'vant/es/picker/types';
import { useI18n } from 'vue-i18n';

import { usePopups } from '@/app/popups';
import { useCategories } from '@/modules/categories';
import { useCurrencies, useCurrencyFormat } from '@/modules/currencies';
import { useInitDashboard } from '@/modules/dashboard/features';
import { useExpenses } from '@/modules/expenses';
import { createdExpenseMessages } from '@/modules/expenses/constants';
import {
	initialExpenseFormData,
	TInitialExpenseFormData
} from '@/modules/expenses/domain';
import { mappingExpenseFormData } from '@/modules/expenses/ui/components/AddExpenseForm/utils';
import { useExpenseSources } from '@/modules/expenseSources';
import { useSavedFunds } from '@/modules/savedFunds';
import { useForm, useTranslateSystemMessages } from '@/shared/features';
import { useSettleResponse } from '@/shared/infrastructure/services/useSettleResponse.ts';
import { cloneDeep, roundWithDecimals } from '@/shared/utils';

export function useAddExpenseForm() {
	const expenseFormData = ref<TInitialExpenseFormData>(
		cloneDeep(initialExpenseFormData)
	);
	const { isLoading, error, createExpense } = useExpenses();
	const { expenseSourcesItems } = useExpenseSources();
	const { savedFundsItems } = useSavedFunds();
	const { currenciesItems, isLoading: isLoadingCurrencies } = useCurrencies();
	const {
		expensesCategoriesItems: categoriesItems,
		isLoading: isLoadingCategories
	} = useCategories();

	const { fetchDashboard } = useInitDashboard();
	const { getCurrencySymbol } = useCurrencyFormat();
	const { settleResponse } = useSettleResponse();
	const { translateSystemMessages } = useTranslateSystemMessages();

	const { locale } = useI18n();

	const { formRef, hasServerError, validateForm, resetValidationForm } =
		useForm(error);
	const { handleClose, options: popupOptions } = usePopups();

	const showedExpenseSourcesPicker = ref(false);
	const showedDatePicker = ref(false);
	const isSingleExpense = ref(false);
	const formattedDate = ref(new Date().toLocaleDateString(unref(locale)));
	const savedFundTitle = ref('');

	watch(isSingleExpense, () => {
		resetValidationForm();

		expenseFormData.value = {
			...unref(initialExpenseFormData)
		};
	});

	const handleShowExpenseSourcesPicker = () => {
		if (unref(isLoading)) return;
		showedExpenseSourcesPicker.value = true;
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
			expenseFormData.value = {
				...unref(expenseFormData),
				title: option.text as string,
				categoryId: option.value as number
			};
		}
	};

	const handleUpdateCategoriesTitle = (title?: string | number) => {
		expenseFormData.value = {
			...unref(expenseFormData),
			title: title as string,
			categoryId: undefined
		};
	};

	const handleConfirmExpenseSourcesPicker = ({
		selectedOptions
	}: PickerConfirmEventParams) => {
		const [option] = selectedOptions;

		if (option) {
			expenseFormData.value = {
				...unref(expenseFormData),
				title: option.title,
				amount: roundWithDecimals(option.amount),
				currency: option.currency.code,
				expenseSourceId: option.id
			};
		}

		showedExpenseSourcesPicker.value = false;
	};

	const handleConfirmSavedFundsPicker = ({
		selectedOptions
	}: PickerConfirmEventParams) => {
		const [option] = selectedOptions;

		if (option) {
			expenseFormData.value = {
				...unref(expenseFormData),
				savedFundId: option.value as number
			};

			savedFundTitle.value = option.text as string;
		}
	};

	const handleConfirmDatePicker = (date: Date) => {
		expenseFormData.value = {
			...unref(expenseFormData),
			dateOfIssue: date.toISOString()
		};

		formattedDate.value = date.toLocaleDateString(unref(locale));

		showedDatePicker.value = false;
	};

	const handleSubmit = async () => {
		if (await validateForm()) {
			const response = await createExpense(
				{},
				mappingExpenseFormData(unref(expenseFormData))
			);

			if (response) {
				settleResponse(response, {
					messages: translateSystemMessages(createdExpenseMessages),
					onSuccess: async () => {
						expenseFormData.value = { ...initialExpenseFormData };

						await unref(popupOptions)?.onSuccess?.();

						resetValidationForm();
						handleClose();

						await fetchDashboard();
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
		expenseFormData,
		expenseSourcesItems,
		savedFundsItems,
		currenciesItems,
		categoriesItems,
		showedExpenseSourcesPicker,
		showedDatePicker,
		isLoading,
		isLoadingCurrencies,
		isLoadingCategories,
		isSingleExpense,
		formattedDate,
		savedFundTitle,
		getCurrencySymbol,
		handleShowDatePicker,
		handleShowExpenseSourcesPicker,
		handleUpdateCategoriesTitle,
		handleConfirmCategoriesPicker,
		handleConfirmExpenseSourcesPicker,
		handleConfirmSavedFundsPicker,
		handleConfirmDatePicker,
		handleSubmit
	};
}

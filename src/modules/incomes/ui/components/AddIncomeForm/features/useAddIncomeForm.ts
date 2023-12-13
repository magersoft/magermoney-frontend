import { PickerConfirmEventParams } from 'vant/es/picker/types';
import { useI18n } from 'vue-i18n';

import { usePopups } from '@/app/popups';
import { useCurrencies, useCurrencyFormat } from '@/modules/currencies';
import { useInitDashboard } from '@/modules/dashboard/features';
import { createdIncomeMessages } from '@/modules/incomes/constants';
import {
	initialIncomeFormData,
	TInitialIncomeFormData
} from '@/modules/incomes/domain';
import { useCreateIncomeService } from '@/modules/incomes/infrastructure/services';
import { useIncomesStore } from '@/modules/incomes/infrastructure/stores';
import { mappingIncomeFormData } from '@/modules/incomes/ui/components/AddIncomeForm/utils';
import { useIncomeSources } from '@/modules/incomeSources/features';
import { useSavedFunds } from '@/modules/savedFunds';
import { useForm, useTranslateSystemMessages } from '@/shared/features';
import { useSettleResponse } from '@/shared/infrastructure/services/useSettleResponse.ts';
import { cloneDeep } from '@/shared/utils';

export function useAddIncomeForm() {
	const incomeFormData = ref<TInitialIncomeFormData>(
		cloneDeep(initialIncomeFormData)
	);
	const { createIncome } = useCreateIncomeService();
	const { isLoading, error } = useIncomesStore();

	const { incomeSources } = useIncomeSources();
	const { savedFunds } = useSavedFunds();
	const { currenciesItems, isLoading: isLoadingCurrencies } = useCurrencies();
	const { fetchDashboard } = useInitDashboard();
	const { formatAmountWithCurrencyNoFraction, getCurrencySymbol } =
		useCurrencyFormat();
	const { settleResponse } = useSettleResponse();
	const { translateSystemMessages } = useTranslateSystemMessages();

	const { locale } = useI18n();

	const { formRef, hasServerError, validateForm, resetValidationForm } =
		useForm(error);
	const { handleClose } = usePopups();

	const showedIncomeSourcesPicker = ref(false);
	const showedDatePicker = ref(false);
	const isSingleIncome = ref(false);
	const formattedDate = ref(new Date().toLocaleDateString(unref(locale)));
	const savedFundTitle = ref('');

	const incomeSourcesItems = computed(() =>
		unref(incomeSources).map((incomeSource) => ({
			...incomeSource,
			text: `${formatAmountWithCurrencyNoFraction(
				incomeSource.amount,
				incomeSource.currency.code
			)} - ${incomeSource.title}`,
			value: incomeSource.amount
		}))
	);

	const savedFundsItems = computed(() =>
		unref(savedFunds).map((savedFund) => ({
			...savedFund,
			text: savedFund.source,
			value: savedFund.id
		}))
	);

	watch(isSingleIncome, () => {
		resetValidationForm();
	});

	const handleShowIncomeSourcesPicker = () => {
		if (unref(isSingleIncome)) return;
		showedIncomeSourcesPicker.value = true;
	};

	const handleConfirmIncomeSourcesPicker = ({
		selectedOptions
	}: PickerConfirmEventParams) => {
		const [option] = selectedOptions;

		if (option) {
			incomeFormData.value = {
				...unref(incomeFormData),
				title: option.title,
				amount: option.amount,
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
			dateOfIssue: new Date(date).toISOString()
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

						resetValidationForm();
						handleClose();

						await fetchDashboard();
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
		showedIncomeSourcesPicker,
		showedDatePicker,
		isLoading,
		isLoadingCurrencies,
		isSingleIncome,
		formattedDate,
		savedFundTitle,
		getCurrencySymbol,
		handleShowIncomeSourcesPicker,
		handleConfirmIncomeSourcesPicker,
		handleConfirmSavedFundsPicker,
		handleConfirmDatePicker,
		handleSubmit
	};
}

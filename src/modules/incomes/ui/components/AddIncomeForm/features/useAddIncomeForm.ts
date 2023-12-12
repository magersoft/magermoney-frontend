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

	const showedPicker = ref(false);
	const showedDatePicker = ref(false);
	const isSingleIncome = ref(false);
	const formattedDate = ref(new Date().toLocaleDateString(unref(locale)));

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

	watch(isSingleIncome, () => {
		resetValidationForm();
	});

	const handleShowPicker = () => {
		if (unref(isSingleIncome)) return;
		showedPicker.value = true;
	};

	const handleConfirmPicker = ({
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

			showedPicker.value = false;
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
		showedPicker,
		showedDatePicker,
		isLoading,
		isLoadingCurrencies,
		isSingleIncome,
		currenciesItems,
		formattedDate,
		getCurrencySymbol,
		handleShowPicker,
		handleConfirmPicker,
		handleConfirmDatePicker,
		handleSubmit
	};
}

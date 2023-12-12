import { PickerConfirmEventParams } from 'vant/es/picker/types';

import { useCurrencyFormat } from '@/modules/currencies';
import {
	initialIncomeFormData,
	TInitialIncomeFormData
} from '@/modules/incomes/domain';
import { useIncomeSources } from '@/modules/incomeSources/features';
import { cloneDeep } from '@/shared/utils';

export function useAddIncomeForm() {
	const incomeFormData = ref<TInitialIncomeFormData>(
		cloneDeep(initialIncomeFormData)
	);
	const { incomeSources } = useIncomeSources();
	const { formatAmountWithCurrencyNoFraction, getCurrencySymbol } =
		useCurrencyFormat();

	const showedPicker = ref(false);
	const isSingleIncome = ref(false);

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
				currency: option.currency.code
			};

			showedPicker.value = false;
		}
	};

	return {
		incomeFormData,
		incomeSourcesItems,
		showedPicker,
		isSingleIncome,
		handleShowPicker,
		handleConfirmPicker,
		getCurrencySymbol
	};
}

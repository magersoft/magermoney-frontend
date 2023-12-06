import { PickerConfirmEventParams } from 'vant/es/picker/types';

import { useCurrencies } from '@/modules/currencies';
import { useSettingsStore } from '@/modules/settings/infrastructure/stores';

interface useCurrenciesPickerParams {
	onConfirm?: () => void;
}

export function useCurrenciesPicker({
	onConfirm
}: useCurrenciesPickerParams = {}) {
	const { currenciesItems, fetchCurrencies, isLoading } = useCurrencies();
	const { currency, setCurrency } = useSettingsStore();

	const pickerValue = ref([unref(currency)]);
	const isShowPicker = ref(false);

	const onShowPicker = async () => {
		await fetchCurrencies();

		isShowPicker.value = true;
	};

	const handleConfirm = ({ selectedOptions }: PickerConfirmEventParams) => {
		const [options] = selectedOptions;

		if (options?.value !== unref(currency)) {
			setCurrency(options?.value as string);
			onConfirm?.();
		}

		isShowPicker.value = false;
	};

	const handleCancel = () => {
		isShowPicker.value = false;
	};

	return {
		pickerValue,
		currenciesItems,
		isShowPicker,
		isLoading,
		onShowPicker,
		handleConfirm,
		handleCancel
	};
}

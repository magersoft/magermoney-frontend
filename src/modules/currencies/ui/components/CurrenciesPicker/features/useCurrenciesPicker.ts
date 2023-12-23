import { PickerConfirmEventParams } from 'vant/es/picker/types';

import { useCurrencies } from '@/modules/currencies';
import { useSettingsStore } from '@/modules/settings/infrastructure/stores';
import { useUser } from '@/modules/users';

interface useCurrenciesPickerParams {
	onConfirm?: () => void;
}

export function useCurrenciesPicker({
	onConfirm
}: useCurrenciesPickerParams = {}) {
	const { currenciesItems, fetchCurrencies, isLoading, changeCurrency } =
		useCurrencies();
	const { currency, setCurrency } = useSettingsStore();
	const { user } = useUser();

	const pickerValue = ref([unref(currency)]);
	const isShowPicker = ref(false);

	const onShowPicker = async () => {
		await fetchCurrencies();

		isShowPicker.value = true;
	};

	const handleConfirm = async ({
		selectedOptions
	}: PickerConfirmEventParams) => {
		const [options] = selectedOptions;

		if (options?.value !== unref(currency)) {
			await changeCurrency(options?.value as string);
			onConfirm?.();
		}

		isShowPicker.value = false;
	};

	const handleCancel = () => {
		isShowPicker.value = false;
	};

	watch(
		user,
		() => {
			if (unref(user)) {
				setCurrency(unref(user)!.currency);
			}
		},
		{ immediate: true }
	);

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

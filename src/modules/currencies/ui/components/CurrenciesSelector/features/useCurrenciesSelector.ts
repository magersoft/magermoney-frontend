import { Checkbox } from 'vant';
import { ComponentPublicInstance } from 'vue';

import { useCurrencies } from '@/modules/currencies';
import { saveCurrenciesMessages } from '@/modules/currencies/constants/messages.ts';
import { useCurrenciesStore } from '@/modules/currencies/infrastructure/stores';
import { useTranslateSystemMessages } from '@/shared/features';
import { useSettleResponse } from '@/shared/infrastructure/services/useSettleResponse.ts';

export function useCurrenciesSelector() {
	const { currenciesListItems, currenciesIds, saveCurrencies, isLoading } =
		useCurrencies();
	const { setCurrenciesIds } = useCurrenciesStore();

	const { settleResponse } = useSettleResponse();
	const { translateSystemMessages } = useTranslateSystemMessages();

	const checkedCurrencies = computed<number[]>({
		get: () => unref(currenciesIds),
		set: (value) => setCurrenciesIds(value)
	});
	const checkboxRefs = ref<Element[] | ComponentPublicInstance[] | null[]>([]);

	const handleChecked = (index: number) => {
		unref(checkboxRefs as unknown as typeof Checkbox)[index].toggle();
	};

	const handleSave = async () => {
		const response = await saveCurrencies(
			{ force: true, showError: true },
			{ currenciesIds: unref(currenciesIds) }
		);

		if (response) {
			settleResponse(response, {
				messages: translateSystemMessages(saveCurrenciesMessages)
			});
		}
	};

	return {
		currenciesListItems,
		checkedCurrencies,
		checkboxRefs,
		isLoading,
		handleChecked,
		handleSave
	};
}

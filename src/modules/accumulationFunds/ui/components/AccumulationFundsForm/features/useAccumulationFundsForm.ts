import appConfig from '@/app/config/app.config.ts';
import {
	initialAccumulationFundsFormControls,
	TInitialAccumulationFundsFormData
} from '@/modules/accumulationFunds/domain';
import { useInitAccumulationFunds } from '@/modules/accumulationFunds/features';
import {
	useCreateAccumulationFundService,
	useRemoveAccumulationFundService
} from '@/modules/accumulationFunds/infrastructure/services';
import { useAccumulationFundStore } from '@/modules/accumulationFunds/infrastructure/stores';
import { useCalculations } from '@/modules/calculations';
import { useCurrencies } from '@/modules/currencies';
import { useSettingsStore } from '@/modules/settings/infrastructure/stores';
import { useForm } from '@/shared/features';
import { ActionButtonsEventListeners } from '@/shared/ui/components';
import { cloneDeep, debounce, trimString } from '@/shared/utils';

interface UseAccumulationFundsFormParams extends ActionButtonsEventListeners {}

export function useAccumulationFundsForm({
	onSubmit,
	onBack
}: UseAccumulationFundsFormParams = {}) {
	const { currency, setCurrency } = useSettingsStore();
	const accumulationFundsFormData = ref<TInitialAccumulationFundsFormData>(
		cloneDeep({
			...initialAccumulationFundsFormControls,
			currency: unref(currency)
		})
	);
	const { fetchInitAccumulationFunds } = useInitAccumulationFunds();
	const { createAccumulationFund } = useCreateAccumulationFundService();
	const { removeAccumulationFund } = useRemoveAccumulationFundService();
	const { accumulationFunds, hasAccumulationFunds, isLoading, error } =
		useAccumulationFundStore();
	const { currenciesItems, isLoading: isLoadingCurrencies } = useCurrencies();
	const {
		fetchAmountByPercent,
		fetchPercentByAmount,
		roundedAmountByPercent,
		roundedPercentByAmount,
		isLoading: isLoadingCalculations,
		restoreCalculationsStore
	} = useCalculations();

	const {
		formRef,
		hasServerError,
		errorMessages,
		validateForm,
		resetValidationForm
	} = useForm(error);

	const handleSubmit = async () => {
		if (unref(hasAccumulationFunds)) {
			onSubmit?.();
			return;
		}

		if (!(await validateForm())) return;

		const response = await createAccumulationFund(
			{},
			{
				percent: unref(accumulationFundsFormData).percent
			}
		);

		if (unref(response?.data)) {
			accumulationFundsFormData.value = {
				...initialAccumulationFundsFormControls,
				currency: unref(currency)
			};

			await fetchInitAccumulationFunds();

			resetValidationForm();
		}
	};

	const handleBack = () => {
		resetValidationForm();

		onBack?.();
	};

	const handleRemove = async () => {
		if (!hasAccumulationFunds) return;

		const [accumulatedFund] = unref(accumulationFunds);

		const isRemovedSuccess = await removeAccumulationFund(
			`${accumulatedFund.percent}%`,
			accumulatedFund.id
		);

		if (isRemovedSuccess) {
			await fetchInitAccumulationFunds();
		}
	};

	const handlePercentChange = debounce(async (percent: string) => {
		await fetchAmountByPercent(
			{},
			percent,
			unref(accumulationFundsFormData).currency
		);

		accumulationFundsFormData.value = {
			...unref(accumulationFundsFormData),
			amount: unref(roundedAmountByPercent)
		};
	}, appConfig.debounceDelay);

	const handleAmountChange = debounce(async (amount: string) => {
		await fetchPercentByAmount(
			{},
			trimString(amount),
			unref(accumulationFundsFormData).currency
		);

		accumulationFundsFormData.value = {
			...unref(accumulationFundsFormData),
			percent: unref(roundedPercentByAmount)
		};
	}, appConfig.debounceDelay);

	const handleCurrencyChange = async () => {
		setCurrency(unref(accumulationFundsFormData).currency);

		accumulationFundsFormData.value = {
			...initialAccumulationFundsFormControls,
			currency: unref(currency)
		};

		resetValidationForm();
		restoreCalculationsStore();

		if (unref(hasAccumulationFunds)) {
			await fetchInitAccumulationFunds();
		}
	};

	return {
		formRef,
		accumulationFundsFormData,
		hasServerError,
		errorMessages,
		currenciesItems,
		isLoading,
		isLoadingCurrencies,
		isLoadingCalculations,
		hasAccumulationFunds,
		handleBack,
		handleSubmit,
		handleRemove,
		handlePercentChange,
		handleAmountChange,
		handleCurrencyChange
	};
}

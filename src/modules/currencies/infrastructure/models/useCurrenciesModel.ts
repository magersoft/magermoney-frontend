import { NCurrencies } from '@/modules/currencies/domain';
import { API_NAMESPACE } from '@/modules/currencies/domain';
import { useApiFetch } from '@/shared/infrastructure/api';

export const useCurrenciesModel = (): NCurrencies.IModel => {
	const { fetch } = useApiFetch();

	const findAll = () =>
		fetch<NCurrencies.ICurrency[]>(`/${API_NAMESPACE}`).get();

	return {
		findAll
	};
};

import { NCurrency } from '@/modules/currency/domain';
import { useApiFetch } from '@/shared/infrastructure/api';

export const useCurrencyModel = (): NCurrency.IModel => {
	const { fetch } = useApiFetch();

	const findAll = () => fetch<NCurrency.ICurrency[]>('/currency').get();

	return {
		findAll
	};
};

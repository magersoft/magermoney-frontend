import { NCurrencies } from '@/modules/currencies/domain';
import { useApiFetch } from '@/shared/infrastructure/api';

export const useCurrenciesModel = (): NCurrencies.IModel => {
	const { fetch } = useApiFetch();

	const fetchList = () =>
		fetch<NCurrencies.ICurrency[]>(`/${NCurrencies.API_NAMESPACE}/list`).get();

	const fetchAll = () =>
		fetch<NCurrencies.ICurrency[]>(`/${NCurrencies.API_NAMESPACE}`).get();

	const fetchRates = () =>
		fetch<NCurrencies.ICurrencyRate[]>(
			`/${NCurrencies.API_NAMESPACE}/rates`
		).get();

	const createAll = (payload: NCurrencies.ICreateAll) =>
		fetch<NCurrencies.ICurrency[]>(`/${NCurrencies.API_NAMESPACE}`).post(
			payload
		);

	return {
		fetchAll,
		fetchList,
		fetchRates,
		createAll
	};
};

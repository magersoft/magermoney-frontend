import { useTransfersModel } from '@/modules/transfers/infrastructure/models';
import { useTransfersStore } from '@/modules/transfers/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useCreateTransferService() {
	const { setTransfer, setIsLoading, setError } = useTransfersStore();
	const { create } = useTransfersModel();

	const { fetchBase: createTransfer } = useBaseFetch({
		fetchData: create,
		setData: setTransfer,
		setIsLoading,
		setError
	});

	return {
		createTransfer
	};
}

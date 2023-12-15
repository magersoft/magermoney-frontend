import { useToggle } from '@vueuse/core';
import { useI18n } from 'vue-i18n';

import { useSavedFunds } from '@/modules/savedFunds';
import { declOfNum } from '@/shared/utils';

interface useWalletsListParams {
	onSort: (value: boolean) => void;
}

export function useWalletsList({ onSort }: useWalletsListParams) {
	const {
		hasSavedFunds,
		savedFunds,
		isLoading,
		countSavedFunds,
		updateSavedFundsOrders
	} = useSavedFunds();
	const { t } = useI18n();

	const [sortable, toggleSortable] = useToggle();

	const countOfWallets = computed(() =>
		t('wallets.countOfWallets', {
			count: unref(countSavedFunds),
			declination: declOfNum(unref(countSavedFunds), [
				t('wallets.wallet1'),
				t('wallets.wallet2'),
				t('wallets.wallet5')
			])
		})
	);

	const handleToggleSortable = async () => {
		toggleSortable();
		onSort(unref(sortable));

		if (!unref(sortable)) {
			const ids = unref(savedFunds).map((item) => String(item.id));
			await updateSavedFundsOrders({ showError: true }, { ids });
		}
	};

	return {
		isLoading,
		hasSavedFunds,
		savedFunds,
		countOfWallets,
		sortable,
		handleToggleSortable
	};
}

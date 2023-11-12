import type { StoreGeneric } from 'pinia';
import { storeToRefs } from 'pinia';

export const useStoreAdapter = <T extends StoreGeneric>(store: T) => {
	const storeRefs = storeToRefs(store);

	return {
		...store,
		...storeRefs,
		restoreStore() {
			return store.$reset();
		}
	};
};

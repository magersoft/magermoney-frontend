import { translateCategories } from '@/modules/currencies/utils';
import { NHistory } from '@/modules/history/domain';

export function mappingHistoryItems(
	history: NHistory.IHistory[]
): NHistory.IHistory[] {
	return history.map((historyItem) => ({
		...historyItem,
		title: translateCategories({ name: historyItem.title }),
		category: {
			name: translateCategories(historyItem.category)
		}
	}));
}

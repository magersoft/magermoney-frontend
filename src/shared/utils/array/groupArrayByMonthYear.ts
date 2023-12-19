import { isDate } from '@/shared/utils';

export function groupArrayByMonthYear<T = object>(
	data: T[],
	dateKey: keyof T,
	locale: string = 'en-US'
): { group: string; data: T[] }[] {
	const grouped = data.reduce((acc: { [key: string]: T[] }, item: T) => {
		const date = new Date(item[dateKey] as string);

		if (!isDate(date)) {
			throw new Error(`The ${String(dateKey)} is not a valid date`);
		}

		const monthYear = `${date.toLocaleString(locale, {
			month: 'long'
		})} ${date.getFullYear()}`;

		if (!acc[monthYear]) {
			acc[monthYear] = [];
		}

		acc[monthYear].push(item);

		return acc;
	}, {});

	return Object.entries(grouped).map(([group, data]) => ({
		group,
		data: data as T[]
	}));
}

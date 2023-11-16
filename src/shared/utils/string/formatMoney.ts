export const formatMoney = (value: number, currency: string): string => {
	return new Intl.NumberFormat('ru-RU', { style: 'currency', currency }).format(
		value
	);
};

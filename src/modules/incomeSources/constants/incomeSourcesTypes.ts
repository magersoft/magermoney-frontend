// @todo move to useIncomeSourceForm and get from backend
export const incomeSourcesTypes = ref([
	{
		text: 'Зарплата',
		value: 'salary'
	},
	{
		text: 'Подработка',
		value: 'sideJob'
	},
	{
		text: 'Стипендия',
		value: 'scholarship'
	},
	{
		text: 'Доход от сдачи в аренду',
		value: 'rentalIncome'
	},
	{
		text: 'Доход от вклада',
		value: 'depositIncome'
	},
	{
		text: 'Инвестиции',
		value: 'investments'
	},
	{
		text: 'Пенсия',
		value: 'pension'
	},
	{
		text: 'Другое',
		value: 'other'
	}
]);

<script setup lang="ts">
import type { ChartData, ChartOptions } from 'chart.js';
import { ArcElement, Chart as ChartJS, Legend, Title, Tooltip } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut } from 'vue-chartjs';

import { appConfig } from '@/app/config';
import { useCurrencyFormat } from '@/modules/currencies';
import { AppSummaryTag } from '@/shared/ui/components';
import { generateColor, invertColor } from '@/shared/utils';

ChartJS.register(ArcElement, Title, Tooltip, Legend, ChartDataLabels);

type AppSummaryWidgetData = {
	title: string;
	amount: number;
	percent: number;
};

type AppSummaryWidgetType = 'expense' | 'income';

interface AppSummaryWidgetProps {
	data: AppSummaryWidgetData[];
	type: AppSummaryWidgetType;
	loading?: boolean;
	total?: number;
	currency?: string;
	chartData?: ChartData<'doughnut'>;
	chartOptions?: ChartOptions<'doughnut'>;
}

const props = withDefaults(defineProps<AppSummaryWidgetProps>(), {
	type: 'expense',
	total: 0,
	currency: appConfig.defaultCurrency,
	loading: false,
	chartData: undefined,
	chartOptions: undefined
});

const { formatAmountWithCurrencyNoFraction } = useCurrencyFormat();

const labels = computed(() => props.data.map((item) => item.title));
const backgroundColors = computed(() => props.data.map(generateColor));
const percents = computed(() =>
	props.data.map((item) => Math.floor(item.percent))
);
const totalAmount = computed(() =>
	formatAmountWithCurrencyNoFraction(props.total, props.currency)
);

const internalChartData = computed<AppSummaryWidgetProps['chartData']>(() => ({
	labels: unref(labels),
	datasets: [
		{
			data: unref(percents),
			backgroundColor: unref(backgroundColors),
			borderWidth: 0,
			hoverOffset: 2,
			cutout: 70
		}
	],
	...props.chartData
}));

const internalChartOptions = computed<AppSummaryWidgetProps['chartOptions']>(
	() => ({
		responsive: true,
		plugins: {
			legend: {
				display: false
			},
			datalabels: {
				display: true,
				formatter: (val, ctx) =>
					(ctx.dataset.data as number[])![ctx.dataIndex] >= 4 ? `${val}%` : '',
				color: (ctx) => {
					const color = (ctx.dataset.backgroundColor as string[])![
						ctx.dataIndex as number
					];
					return invertColor(color, true);
				}
			}
		},
		...props.chartOptions
	})
);

const $style = useCssModule();
const classes = computed(() => ({
	[$style['app-summary-widget']]: true,
	[$style[`app-summary-widget--${props.type}`]]: props.type
}));
</script>

<template>
	<div :class="classes">
		<div :class="$style['app-summary-widget__doughnut']">
			<doughnut :data="internalChartData!" :options="internalChartOptions" />
			<div :class="$style['app-summary-widget__total']">
				<van-loading v-if="loading" />
				<template v-else>
					<div :class="$style['amount']">{{ totalAmount }}</div>
				</template>
			</div>
		</div>

		<div :class="$style['app-summary-widget__legends']">
			<app-summary-tag
				v-for="(item, idx) in data"
				:key="item.title"
				:title="item.title"
				:value="formatAmountWithCurrencyNoFraction(item.amount, currency)"
				:color="backgroundColors[idx]"
			/>
		</div>
	</div>
</template>

<style module lang="scss">
@import './styles/AppSummaryWidget.module';
</style>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const showedCalendar = ref(false);

const selectedPeriod = ref<{ start: Date | null; end: Date | null }>({
	start: null,
	end: null
});

const periodText = computed(() => {
	const { start, end } = unref(selectedPeriod);

	return start && end
		? `${start.toLocaleDateString(unref(locale))} ${end.toLocaleDateString(
				unref(locale)
		  )}`
		: 'Период';
});

const activePeriod = computed(
	() =>
		unref(selectedPeriod).start !== null && unref(selectedPeriod).end !== null
);

const handleChoosePeriod = () => {
	if (unref(activePeriod)) {
		selectedPeriod.value = {
			start: null,
			end: null
		};
	} else {
		showedCalendar.value = true;
	}
};

const handleConfirmPeriod = ([startDate, endDate]: Date[]) => {
	selectedPeriod.value = {
		start: startDate,
		end: endDate
	};

	showedCalendar.value = false;
};
</script>

<template>
	<div :class="$style['app-filters']">
		<van-button plain round type="default" size="small">Месяц</van-button>
		<van-button plain round type="default" size="small">Год</van-button>
		<van-button
			:plain="!activePeriod"
			round
			:type="activePeriod ? 'primary' : 'default'"
			size="small"
			@click="handleChoosePeriod"
		>
			{{ periodText }}
		</van-button>

		<van-calendar
			v-model:show="showedCalendar"
			type="range"
			title="Выберите период"
			:show-confirm="false"
			@confirm="handleConfirmPeriod"
		/>
	</div>
</template>

<style module lang="scss">
@import './styles/AppFilters.module';
</style>

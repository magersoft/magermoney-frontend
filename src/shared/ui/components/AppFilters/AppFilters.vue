<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import {
	BEGIN_MONTH,
	BEGIN_YEAR,
	END_MONTH,
	END_YEAR,
	PREVIOUS_YEAR
} from '@/shared/constants';
import { AppFilterCalendarRange } from '@/shared/ui/components/AppFilters/types';

interface AppFiltersProps {
	loading?: boolean;
}

defineProps<AppFiltersProps>();

interface AppFiltersEvents {
	(event: 'calendar:opened'): void;
	(event: 'calendar:closed'): void;
	(event: 'confirm', selectedRange: AppFilterCalendarRange): void;
	(event: 'reset'): void;
}

const emit = defineEmits<AppFiltersEvents>();

const { locale, t } = useI18n();

const calendarRef = ref();
const showedCalendar = ref(false);

const selectedRange = ref<AppFilterCalendarRange>({
	startDate: undefined,
	endDate: undefined
});

const activeMonth = ref(false);
const activeYear = ref(false);

const periodText = computed(() => {
	const { startDate, endDate } = unref(selectedRange);

	return startDate && endDate
		? `${startDate.toLocaleDateString(
				unref(locale)
		  )} ${endDate.toLocaleDateString(unref(locale))}`
		: t('range');
});

const activeRange = computed(
	() => unref(selectedRange).startDate && unref(selectedRange).endDate
);

const resetRange = () => {
	selectedRange.value = {
		startDate: undefined,
		endDate: undefined
	};

	unref(calendarRef).reset();
};

const handleChooseRange = () => {
	if (unref(activeRange)) {
		resetRange();

		emit('reset');
	} else {
		showedCalendar.value = true;
	}
};

const handleConfirmRange = ([startDate, endDate]: Date[]) => {
	selectedRange.value = {
		startDate,
		endDate
	};

	emit('confirm', unref(selectedRange));

	showedCalendar.value = false;
	activeMonth.value = false;
	activeYear.value = false;
};

const handleChooseMonth = () => {
	if (unref(activeMonth)) {
		emit('reset');

		activeMonth.value = false;

		return;
	}

	emit('confirm', {
		startDate: BEGIN_MONTH,
		endDate: END_MONTH
	});

	activeMonth.value = true;
	activeYear.value = false;
	resetRange();
};

const handleChooseYear = () => {
	if (unref(activeYear)) {
		emit('reset');

		activeYear.value = false;

		return;
	}

	emit('confirm', {
		startDate: BEGIN_YEAR,
		endDate: END_YEAR
	});

	activeYear.value = true;
	activeMonth.value = false;
	resetRange();
};
</script>

<template>
	<div :class="$style['app-filters']">
		<van-button
			:disabled="loading"
			:plain="!activeMonth"
			round
			:type="activeMonth ? 'primary' : 'default'"
			size="small"
			@click="handleChooseMonth"
		>
			{{ t('month') }}
		</van-button>
		<van-button
			:disabled="loading"
			:plain="!activeYear"
			round
			:type="activeYear ? 'primary' : 'default'"
			size="small"
			@click="handleChooseYear"
		>
			{{ t('year') }}
		</van-button>
		<van-button
			:disabled="loading"
			:plain="!activeRange"
			round
			:type="activeRange ? 'primary' : 'default'"
			size="small"
			@click="handleChooseRange"
		>
			{{ periodText }}
		</van-button>

		<van-calendar
			ref="calendarRef"
			v-model:show="showedCalendar"
			type="range"
			:title="t('selectRange')"
			allow-same-day
			:show-confirm="false"
			:min-date="PREVIOUS_YEAR"
			:max-date="END_MONTH"
			@confirm="handleConfirmRange"
			@opened="emit('calendar:opened')"
			@closed="emit('calendar:closed')"
		/>
	</div>
</template>

<style module lang="scss">
@import './styles/AppFilters.module';
</style>

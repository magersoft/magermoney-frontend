<script setup lang="ts">
import { useI18n } from 'vue-i18n';

type AppCellItemType = 'expense' | 'income' | 'transfer';

interface AppCellItemProps {
	title?: string;
	value?: string;
	description?: string;
	label?: string;
	icon?: string;
	showIcon?: boolean;
	removable?: boolean;
	type?: AppCellItemType;
}

interface AppCellItemEvents {
	(event: 'click', value: MouseEvent): void;
	(event: 'remove', value: MouseEvent): void;
}

const props = withDefaults(defineProps<AppCellItemProps>(), {
	type: 'income',
	title: '',
	value: '',
	description: '',
	label: '',
	icon: '',
	showIcon: false,
	removable: false
});

defineEmits<AppCellItemEvents>();

const { t } = useI18n();

const icons = computed(() => ({
	income: 'down',
	expense: 'down',
	transfer: 'exchange'
}));

const internalIcon = computed(() =>
	props.showIcon
		? props.icon
			? props.icon
			: unref(icons)[props.type]
		: undefined
);

const $style = useCssModule();
const classes = computed(() => ({
	[$style['app-cell-item']]: true,
	[$style[`app-cell-item--${props.type}`]]: props.type
}));
</script>

<template>
	<van-swipe-cell :class="classes">
		<van-cell
			:title="title"
			:label="label"
			:icon="internalIcon"
			:class="$style['app-cell-item__cell']"
			@click="(e) => $emit('click', e)"
		>
			<template #value>
				<div :class="$style['app-cell-item__right']">
					<span :class="$style['app-cell-item__value']">{{ value }}</span>
					<span :class="$style['app-cell-item__description']">{{
						description
					}}</span>
				</div>
			</template>
		</van-cell>
		<template #right>
			<van-button
				v-if="removable"
				square
				type="danger"
				:text="t('delete')"
				:style="{ height: '100%' }"
				@click="(e) => $emit('remove', e)"
			/>
		</template>
	</van-swipe-cell>
</template>

<style module lang="scss">
@import './styles/AppCellItem.module';
</style>

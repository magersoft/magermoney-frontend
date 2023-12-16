<script setup lang="ts">
import { useAppHeader } from './features';

interface AppHeaderProps {
	readonly title: string;
}

defineProps<AppHeaderProps>();

const {
	title: customTitle,
	textLeft,
	textRight,
	isLeftArrow,
	isHidden,
	actions,
	onClickLeft,
	onClickRight,
	onSelectAction
} = useAppHeader();

const showActionMenu = ref(false);
</script>

<template>
	<van-nav-bar
		v-if="!isHidden"
		:title="customTitle || title"
		:left-text="textLeft"
		:left-arrow="isLeftArrow"
		:right-text="textRight"
		fixed
		:class="$style['app-header']"
		@click-left="onClickLeft"
		@click-right="onClickRight"
	>
		<template v-if="actions" #right>
			<van-popover
				v-model:show="showActionMenu"
				placement="bottom-end"
				:actions="actions"
				@select="onSelectAction"
			>
				<template #reference>
					<van-button
						icon="ellipsis"
						:class="$style['app-header__action-btn']"
					/>
				</template>
			</van-popover>
		</template>
	</van-nav-bar>
</template>

<style module lang="scss">
@import './styles/AppHeader.module';
</style>

<script setup lang="ts">
import { classNames } from '@/shared/utils';

import { useAppHeader } from './features';

interface AppHeaderProps {
	readonly title: string;
}

defineProps<AppHeaderProps>();

const { header } = useAppHeader();

const showActionMenu = ref(false);
</script>

<template>
	<van-nav-bar
		v-if="!header.isHidden"
		:title="header.title || title"
		:left-text="header.textLeft"
		:left-arrow="header.isLeftArrow"
		:right-text="header.textRight"
		fixed
		:class="
			classNames($style['app-header'], {
				[$style['app-header--invisible']]: !header.isVisible
			})
		"
		@click-left="header.onClickLeft"
		@click-right="header.onClickRight"
	>
		<template v-if="header.actions" #right>
			<van-popover
				v-model:show="showActionMenu"
				placement="bottom-end"
				:actions="header.actions"
				@select="header.onSelectAction"
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

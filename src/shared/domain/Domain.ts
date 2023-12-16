import { PopoverAction } from 'vant';

import { RequestReturnError } from '@/shared/types/api';

export interface IFetchState<E = RequestReturnError> {
	isLoading: boolean;
	error: E | null;
}

export interface AppHeaderState {
	title?: string;
	textLeft?: string;
	textRight?: string;
	isLeftArrow?: boolean;
	isHidden?: boolean;
	actions?: PopoverAction[] | null;
	onSelectAction?: (action: PopoverAction) => void;
	onClickLeft?: () => void;
	onClickRight?: () => void;
}

export interface AppNavState {
	isHidden?: boolean;
}

export interface AppState {
	header: AppHeaderState;
	nav: AppNavState;
}

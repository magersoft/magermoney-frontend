import { PopoverAction } from 'vant';

import { PopupOptions } from '@/app/popups/types';
import { RequestReturnError } from '@/shared/types/api';

export interface IFetchState<E = RequestReturnError> {
	isLoading: boolean;
	error: E | null;
}

export interface IFetchPaginatedState<E = RequestReturnError>
	extends IFetchState<E> {
	isFinished: boolean;
	page: number;
	pageSize: number;
}

export interface AppHeaderState {
	title?: string;
	textLeft?: string;
	textRight?: string;
	isLeftArrow?: boolean;
	isHidden?: boolean;
	isVisible?: boolean;
	actions?: PopoverAction[] | null;
	isRightDisabled?: boolean;
	isLeftDisabled?: boolean;
	onSelectAction?: (action: PopoverAction) => void;
	onClickLeft?: () => void;
	onClickRight?: () => void;
}

export interface AppNavState {
	isHidden?: boolean;
	popupOptions?: PopupOptions;
}

export interface AppState {
	header: AppHeaderState;
	nav: AppNavState;
}

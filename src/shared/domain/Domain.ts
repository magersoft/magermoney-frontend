import { RequestReturnError } from '@/shared/types/api';

export interface IFetchState<E = RequestReturnError> {
	isLoading: boolean;
	error: E | null;
}

export interface AppHeaderState {
	title?: string;
	textLeft?: string;
	isLeftArrow?: boolean;
	isHidden?: boolean;
	onClickLeft?: () => void;
}

export interface AppNavState {
	isHidden?: boolean;
}

export interface AppState {
	header: AppHeaderState;
	nav: AppNavState;
}

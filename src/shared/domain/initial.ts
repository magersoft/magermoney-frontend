import { AppHeaderState, IFetchState } from '@/shared/domain';

export const fetchStateInitialState: IFetchState = {
	isLoading: false,
	error: null
};

export const appHeaderInitialState: AppHeaderState = {
	title: '',
	textLeft: '',
	isHidden: false,
	isLeftArrow: false,
	onClickLeft: () => {}
};

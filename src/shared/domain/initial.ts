import { AppState, IFetchState } from '@/shared/domain';

export const fetchStateInitialState: IFetchState = {
	isLoading: false,
	error: null
};

export const appInitialState: AppState = {
	header: {
		title: '',
		textLeft: '',
		textRight: '',
		isHidden: false,
		isLeftArrow: false,
		onClickLeft: () => {}
	},
	nav: {
		isHidden: false
	}
};

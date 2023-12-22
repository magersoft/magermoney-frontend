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
		isVisible: true,
		isLeftArrow: false,
		isRightDisabled: false,
		isLeftDisabled: false,
		actions: null,
		onSelectAction: () => {},
		onClickLeft: () => {},
		onClickRight: () => {}
	},
	nav: {
		isHidden: false
	}
};

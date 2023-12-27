import appConfig from '@/app/config/app.config.ts';
import { AppState, IFetchPaginatedState, IFetchState } from '@/shared/domain';

export const fetchStateInitialState: IFetchState = {
	isLoading: false,
	error: null
};

export const fetchPaginatedStateInitialState: IFetchPaginatedState = {
	...fetchStateInitialState,
	isFinished: false,
	page: appConfig.defaultPaginationPage,
	pageSize: appConfig.defaultPaginationPageSize
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

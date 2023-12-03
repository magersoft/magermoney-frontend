import { fetchStateInitialState } from '@/shared/domain';

import { NUsers } from './Domain';

export const userInitialState: NUsers.IState = {
	...fetchStateInitialState,
	user: null
};

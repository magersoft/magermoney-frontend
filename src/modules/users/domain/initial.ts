import { fetchStateInitialState } from '@/shared/domain';

import { NUsers } from './Domain.ts';

export const userInitialState: NUsers.IState = {
	...fetchStateInitialState,
	user: null
};

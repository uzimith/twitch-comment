import { Action } from 'typescript-fsa';
import { Epic, combineEpics } from 'redux-observable';

import auth from 'epics/auth';
import redirectAfterAuth from 'epics/redirectAfterAuth';

export const rootEpic = combineEpics<any>(
    auth,
    redirectAfterAuth,
);

export default rootEpic;

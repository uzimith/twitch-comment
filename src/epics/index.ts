import { Action } from 'typescript-fsa';
import { Epic, combineEpics } from 'redux-observable';

import twitch from 'epics/twitch';
import redirectAfterAuth from 'epics/redirectAfterAuth';

export const rootEpic = combineEpics<any, any>(
    twitch,
    redirectAfterAuth,
);

export default rootEpic;

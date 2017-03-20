import { Action } from 'typescript-fsa';
import { Epic, combineEpics } from 'redux-observable';

import auth from './auth';

export const rootEpic = combineEpics(
    auth
);

export default rootEpic;

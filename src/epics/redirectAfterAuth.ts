import returnof from 'utils/returnof';
import { ActionsObservable } from 'redux-observable';
import { MiddlewareAPI } from 'redux';
import { Observable } from 'rxjs/Rx';
import { Epic } from 'redux-observable';
import { authorize } from 'actions';
import { RootState } from 'reducers';
import { push } from 'react-router-redux';

const actionValue = returnof(authorize.done);

export const redirectAfterAuth = (
    action$: ActionsObservable<typeof actionValue>,
    store: MiddlewareAPI<RootState>
) =>
    action$.ofType(authorize.done.type)
        .mapTo(push('/comments'))
    ;

export default redirectAfterAuth;

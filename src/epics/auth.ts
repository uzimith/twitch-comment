import returnof from 'utils/returnof';
import { ActionsObservable } from 'redux-observable';
import { MiddlewareAPI } from 'redux';
import { Observable } from 'rxjs/Rx';
import { Epic } from 'redux-observable';
import { authorize } from 'actions';
import { RootState } from 'reducers';
import * as electronOauth2 from 'electron-oauth2';
import { config, options } from 'configs/auth';
import secret from 'secret';
import { Token } from 'models/token';

const oauth = electronOauth2(config, {
    alwaysOnTop: true,
    autoHideMenuBar: true,
});

const actionValue = returnof(authorize.started);
export const auth = (
    action$: ActionsObservable<typeof actionValue>,
    store: MiddlewareAPI<RootState>
) =>
    action$.ofType(authorize.started.type)
        .mergeMap(action =>
            Observable.from(oauth.getAccessToken(options))
                .map(result => authorize.done({ result: new Token(result) }))
                .catch(error => Observable.of(authorize.failed({ error })))
        )
    ;

export default auth;

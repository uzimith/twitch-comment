import returnof from 'returnof';
import electronOauth2 from 'electron-oauth2';
import { Observable } from 'rxjs/Rx';
import { Epic } from 'redux-observable';
import { authorize } from 'actions';
import { State } from 'reducers/auth';
import { config, options } from 'configs/auth';
import secret from 'secret';

const oauth = electronOauth2(config, {
    alwaysOnTop: true,
    autoHideMenuBar: true,
});

const actionValue = returnof(authorize.started);
export const auth: Epic<typeof actionValue, State> = action$ =>
    action$.ofType(authorize.started.type)
        .mergeMap(action => Observable.from(oauth.getAccessToken(options))
            .map(result => authorize.done({ params: action.payload, result }))
            .catch(error => Observable.of(authorize.failed({ params: action.payload, error })))
        )
    ;

export default auth;

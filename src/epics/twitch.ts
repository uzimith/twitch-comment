import returnof from 'utils/returnof';
import { ActionsObservable } from 'redux-observable';
import { MiddlewareAPI } from 'redux';
import { Observable } from 'rxjs/Rx';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';
import { Epic, combineEpics } from 'redux-observable';
import { RootState } from 'reducers';
import { authorizeTwitch, subsribeTwitch, publishTwitch } from 'actions';
import { OAuthAuthorize } from 'utils/oauth';
import Token from 'models/token';
import { connect, ChatResponse } from 'utils/twitch';

// authorizeTwitch
const authActionValue = returnof(authorizeTwitch.started);
export const auth = (
    action$: ActionsObservable<typeof authActionValue>,
    store: MiddlewareAPI<RootState>
) =>
    action$.ofType(authorizeTwitch.started.type)
        .mergeMap(action => {
            return OAuthAuthorize('twtich')
                .map(result => authorizeTwitch.done({ result: new Token(result) }))
                .catch(error => Observable.of(authorizeTwitch.failed({ error })));
        }
        )
    ;

// subsribeTwitch
const subsribeActionValue = returnof(subsribeTwitch);
export const subscribe = (
    action$: ActionsObservable<typeof subsribeTwitch>,
    store: MiddlewareAPI<RootState>
) =>
    action$.ofType(subsribeTwitch.type)
        .mergeMap(() => {
            const auth_token = store.getState().auth.access_token; // tslint:disable-line
            const user = 'uzimith';
            // const channel = 'mintosu';
            const channel = 'imaqtpie';

            // TODO: utilsに移動する
            const client = connect(user, auth_token, channel);
            const chat = Observable.fromEvent(client, 'chat', (channel, userstate, message, self) => ({
                channel, userstate, message, self
            }))
                .filter<ChatResponse>((response) => !response.self)

            return chat;
        })
        .map(response => publishTwitch(response))
    ;

export const twitchEpic = combineEpics<any, any>(
    auth,
    subscribe,
);

export default twitchEpic;

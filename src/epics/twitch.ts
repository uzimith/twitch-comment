import returnof from 'utils/returnof';
import { ActionsObservable } from 'redux-observable';
import { MiddlewareAPI } from 'redux';
import { Observable } from 'rxjs/Rx';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';
import { Epic, combineEpics } from 'redux-observable';
import { RootState } from 'reducers';
import * as uuid from 'uuid/v4';

import { authorizeTwitch, subsribeTwitch, publishTwitch } from 'actions';
import Token from 'models/token';
import { OAuthAuthorize } from 'utils/oauth';

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
            const channel = 'mintosu';
            const subject: WebSocketSubject<string> = Observable.webSocket({
                url: 'wss://irc-ws.chat.twitch.tv:443',
                protocol: 'irc',
                openObserver: {
                    next: (value) => Observable.of(
                        // 'CAP REQ :twitch.tv/tags twitch.tv/commands twitch.tv/membership',
                        // `PASS oauth:${auth_token}`,
                        // `NICK ${user}`,
                        // `JOIN #${channel}`
                        //
                        'CAP REQ :twitch.tv/tags twitch.tv/commands twitch.tv/membership',
                        `PASS oauth:7uaeggfc2j143naju0op7dwranipkr`,
                        `NICK uzimith`,
                        `JOIN #imaqtpie`
                    ).subscribe(subject)
                }
            });

            // PING/PONG
            Observable.interval(2 * 60 * 1000)
                .mapTo('PING')
                .subscribe(subject);

            subject.filter<string>(response => response === 'PING')
                .mapTo('PONG')
                .subscribe(subject);

            return subject;
        })
        .do(x => console.log(x))
        .map(response => publishTwitch(response))
    ;

export const twitchEpic = combineEpics<any, any>(
    auth,
    subscribe,
);

export default twitchEpic;

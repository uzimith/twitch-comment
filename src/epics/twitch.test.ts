import test from 'ava';
import { stub } from 'sinon';
import { Observable, TestScheduler } from 'rxjs/Rx';
import { ActionsObservable } from 'redux-observable';
import configureMockStore from 'redux-mock-store';
import { RootState } from 'reducers';
import { authorizeTwitch, subsribeTwitch, publishTwitch } from 'actions';
import { twitchEpic } from 'epics/twitch';
import { OAuthAuthorize, OAuthAuthorizeError } from 'utils/oauth';

// OAuth
import Token from 'models/token';
import { parameters, authWindowOptions, twitchAllScopes } from 'configs/auth';

test('twtichEpic returns authorizeTwitch.done', t => {
    t.plan(1);

    const ts = new TestScheduler((expected, actual) => {
        t.deepEqual(expected, actual);
    });

    const response = {
        access_token: 'access_token',
        refresh_token: 'refresh_token',
        scope: ['scope'],
        uuid: 'uuid'
    };

    OAuthAuthorize.stub = stub().withArgs('twitch')
        .returns(Observable.of(response));

    const fetchedToken = new Token(response);
    const values = {
        a: authorizeTwitch.started(),
        b: authorizeTwitch.done({ result: fetchedToken }),
    };
    const input$ = ts.createColdObservable('--a-', values);
    const expect$ = '--b-';

    const mockStore = configureMockStore<RootState>();
    const store = mockStore();
    const test$ = twitchEpic(new ActionsObservable(input$), store);

    ts.expectObservable(test$).toBe(expect$, values);
    ts.flush();
});

test('twtichEpic returns authorizeTwitch.failed', t => {
    t.plan(1);

    const ts = new TestScheduler((expected, actual) => {
        t.deepEqual(expected, actual);
    });

    const error = new OAuthAuthorizeError('twitch');

    OAuthAuthorize.stub = stub().withArgs('twitch')
        .returns(Observable.throw(error));

    const values = {
        a: authorizeTwitch.started(),
        b: authorizeTwitch.failed({ error }),
    };
    const input$ = ts.createColdObservable('--a-', values);
    const expect$ = '--b-';

    const mockStore = configureMockStore<RootState>();
    const store = mockStore();
    const test$ = twitchEpic(new ActionsObservable(input$), store);

    ts.expectObservable(test$).toBe(expect$, values);
    ts.flush();
});

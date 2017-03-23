import test from 'ava';
import { stub } from 'sinon';
import { Observable, TestScheduler } from 'rxjs/Rx';
import { ActionsObservable } from 'redux-observable';
import configureMockStore from 'redux-mock-store';
import { RootState } from 'reducers';
import { authorizeTwitch, subsribeTwitch, publishTwitch } from 'actions';
import { auth } from 'epics/twitch';
import { OAuthAuthorize, OAuthAuthorizeError } from 'utils/oauth';

// OAuth
import Token from 'models/token';
import { parameters, authWindowOptions, twitchAllScopes } from 'configs/auth';

test.cb('twtichEpic run', t => {
    t.plan(1);

    const response = {
        access_token: 'access_token',
        refresh_token: 'refresh_token',
        scope: ['scope']
    };

    OAuthAuthorize.stub = stub().withArgs('twitch')
        .returns(Observable.of(response));

    const testScheduler = new TestScheduler((expected, actual) => {
        t.deepEqual(expected, actual);
        t.end();
    });
    const cold = testScheduler.createColdObservable.bind(testScheduler);
    const fetchedToken = new Token(response);
    const values = {
        a: authorizeTwitch.started(),
        b: authorizeTwitch.done({ result: fetchedToken }),
    };
    const input$ = cold('--a-', values);
    const expect$ = '--b-';

    const mockStore = configureMockStore<RootState>();
    const store = mockStore();
    const test$ = auth(new ActionsObservable(input$), store);

    testScheduler.expectObservable(test$).toBe(expect$, values);
});

test.cb('twtichEpic fails', t => {
    t.plan(1);

    const response = {
        access_token: 'access_token',
        refresh_token: 'refresh_token',
        scope: ['scope']
    };

    OAuthAuthorize.stub = stub().withArgs('twitch')
        .throws(Observable.throw(new OAuthAuthorizeError('twitch')));

    const testScheduler = new TestScheduler((expected, actual) => {
        t.deepEqual('hoge', actual);
        t.end();
    });
    const cold = testScheduler.createColdObservable.bind(testScheduler);
    const fetchedToken = new Token(response);
    const values = {
        a: authorizeTwitch.started(),
        b: authorizeTwitch.failed({ error: new OAuthAuthorizeError('twitch') }),
    };
    const input$ = cold('--a-', values);
    const expect$ = '--b-';

    const mockStore = configureMockStore<RootState>();
    const store = mockStore();
    const test$ = auth(new ActionsObservable(input$), store);

    testScheduler.expectObservable(test$).toBe(expect$, values);
});

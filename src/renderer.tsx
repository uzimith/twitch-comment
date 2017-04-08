import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware, compose, Dispatch } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import createHistory from 'history/createHashHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { notifyMiddleware } from 'middlewares/notify';
import { rootEpic } from 'epics';
import { rootReducer } from 'reducers';
import App from 'components/App';

// history
const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const epicMiddleware = createEpicMiddleware<any, any>(rootEpic);

// store
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(historyMiddleware, epicMiddleware, notifyMiddleware),
));

ReactDOM.render(
    <Provider store={store} >
        <ConnectedRouter history={history} >
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app'),
);

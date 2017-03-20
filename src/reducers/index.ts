import { auth, State as AuthState } from './auth';
import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';

export interface RootState {
    auth: AuthState;
    router: RouterState;
};

export const rootReducer = combineReducers<RootState>({
    auth,
    router: routerReducer,
});

export default rootReducer;

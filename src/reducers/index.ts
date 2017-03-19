import { auth, State as AuthState } from './auth';
import { combineReducers } from 'redux';

interface RootState {
    auth: AuthState;
};

export const rootReducer = combineReducers<RootState>({
    auth
});

export default rootReducer;

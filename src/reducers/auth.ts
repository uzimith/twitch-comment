import { isType, Action } from 'typescript-fsa';
import { authorizeTwitch } from 'actions';
import { Token } from 'models/token';

export type State = Token;

export const auth = (state: State = null, action: Action<any>): State => {
    if (isType(action, authorizeTwitch.done)) {
        return action.payload.result;
    }
    return state;
};

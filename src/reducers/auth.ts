import { isType, Action } from 'typescript-fsa';
import { authorize } from '../actions';
export interface State {
    token?: string;
}

export const auth = (state: State = {}, action: Action<any>): State => {
    if (isType(action, authorize.done)) {
        return action.payload;
    }
    return state;
};

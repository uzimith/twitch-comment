import { isType, Action } from 'typescript-fsa';
import { publishTwitch } from 'actions';
import { Middleware, MiddlewareAPI, Dispatch } from "redux";

export const notifyMiddleware: Middleware =
    <S>({ dispatch, getState }: MiddlewareAPI<S>) =>
        (next: Dispatch<S>) => (action: Action<any>): Action<any> => {
            if (isType(action, publishTwitch)) {
                new Notification(action.payload.userstate.username, <any>{
                    body: action.payload.message,
                    silent: true // TypeScriptの定義アップデート待ち
                });
            }
            return next(action);
        }

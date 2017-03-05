import {Observable, Subject} from "rxjs/Rx";
import {Map} from "immutable";
import Comment from "../models/Comment";
import Actions from "../actions";

export function makeReducer(actions: Actions) {
    const addComment = actions.addComment
        .map((comment) => state => {
            return state
                .updateIn(["comments"], comments => comments.unshift(comment))
            ;
        })
    ;

    return Observable.merge(
        addComment,
    );
}


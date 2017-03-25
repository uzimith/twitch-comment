import { Record } from 'immutable';
import * as uuid from 'uuid/v4';

export interface Params {
    username?: string;
    text?: string;
    uuid?: string;
}

class Comment extends Record({
    username: '<user>',
    text: '<text>',
    uuid: null
}) {
    public username: string;
    public text: string;
    public uuid: string;

    constructor(params: Params) {
        if (typeof params.uuid !== 'string') {
            params.uuid = uuid();
        }
        super(params);
    }
}

export default Comment;

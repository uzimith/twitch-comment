import { Record } from 'immutable';
import * as uuid from 'uuid/v4';

export interface Params {
    username?: string;
    text?: string;
    uuid?: string;
}

export default class Comment extends Record({
    username: '<user>',
    text: '<text>',
    uuid: '<uuid>'
}) {
    public username: string;
    public text: string;
    public uuid: string;

    constructor(params: Params) {
        super({ ...params, uuid: uuid() });
    }
}

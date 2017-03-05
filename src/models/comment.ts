import {Record} from "immutable";

interface Params {
    username: string;
    text: string;
}

export default class Comment extends Record({
    username: "<user>",
    text: "<text>",
}) {
    public username: string;
    public text: string;

    constructor(params?: Params) {
        params ? super(params) : super();
    }
}

import {Subject} from "rxjs/Rx";

export default class Actions {
    public addComment: Subject<any>;

    constructor() {
        this.addComment = null;
    }
}

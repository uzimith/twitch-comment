import {Subject} from "rxjs/Rx";

export default class Actions {
    public initApp: Subject<any>;
    public addComment: Subject<any>;

    constructor() {
        this.initApp = null;
        this.addComment = null;
    }
}

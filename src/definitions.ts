import {Observable} from "rxjs/Rx";
import {DOMSource} from "@cycle/dom/rxjs-typings";
import {VNode} from "@cycle/dom";

export interface ISources {
    DOM: DOMSource;
}

export interface ISinks {
    DOM: Observable<VNode>;
}

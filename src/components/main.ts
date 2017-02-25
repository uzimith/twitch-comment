import {Observable} from "rxjs/Rx";
import {DOMSource} from "@cycle/dom/rxjs-typings";
import {VNode} from "@cycle/dom";

import intent from "../intents/main";
import model from "../models/main";
import view from "../views/main";

export interface ISources {
    DOM: DOMSource;
}

export interface IIntents {
  name$: Observable<string>;
}

export interface IStates {
  message$: Observable<string>;
}

export interface ISinks {
    DOM: Observable<VNode>;
}

export default function main(sources: ISources): ISinks {
    return view(model(intent(sources)));
}

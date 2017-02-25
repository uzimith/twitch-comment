import {Observable} from "rxjs/Rx";
import {DOMSource} from "@cycle/dom/rxjs-typings";
import {VNode} from "@cycle/dom";

import intent from "../intents/main";
import model from "../models/main";
import view from "../views/main";

export interface Sources {
    DOM: DOMSource;
}

export interface Actions {
  changeWeight$: Observable<number>;
  changeHeight$: Observable<number>;
}

export type States = Observable<{
    height: number;
    weight: number;
    bmi: number;
}>;

export interface Sinks {
    DOM: Observable<VNode>;
}

export default function main(sources: Sources): Sinks {
    return view(model(intent(sources)));
}

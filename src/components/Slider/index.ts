import {Observable} from "rxjs/Rx";
import {DOMSource} from "@cycle/dom/rxjs-typings";
import {VNode} from "@cycle/dom";

import intent from "./intent";
import model from "./model";
import view from "./view";

export interface Props {
    label: string;
    unit: string;
    min: number;
    max: number;
    value: number;
}

export interface Sources {
    DOM: DOMSource;
    props: Props;
}

export type Actions = Observable<{
    type: string;
    payload: {[name: string]: {}};
}>;

export type States = Observable<{
    value: number;
}>;

export interface Sinks {
    DOM: Observable<VNode>;
    states$: States;
}

export default function Slider(sources: Sources): Sinks {
    const actions$ = intent(sources.DOM, sources.props);
    const states$ = model(actions$, sources.props);
    return view(states$, sources.props);
}

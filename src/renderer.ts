import Cycle from "@cycle/rxjs-run";
import {Observable} from "rxjs/Rx";
import {p, makeDOMDriver, VNode} from "@cycle/dom";
import {DOMSource} from "@cycle/dom/rxjs-typings";
import * as app_styles from "./styles/app.css";
import * as styles from "./styles/counter.css";

app_styles;

export interface ISources {
    DOM: DOMSource;
}

export interface ISinks {
    DOM: Observable<VNode>;
}

function main(sources: ISources): ISinks {
    const changeWeight$ = sources.DOM.select(".weight")
    .events("input")
    .map((ev) => (ev.target as HTMLInputElement).value);

    const changeHeight$ = sources.DOM.select(".height")
    .events("input")
    .map((ev) => (ev.target as HTMLInputElement).value);

    return {
        DOM: Observable.of(p("Hello, world.")),
    };
}

Cycle.run(main, {
    DOM: makeDOMDriver("#app"),
});

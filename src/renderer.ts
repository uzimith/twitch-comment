import Cycle from "@cycle/rxjs-run";
import {Observable} from "rxjs/Rx";
import {p, makeDOMDriver, VNode} from "@cycle/dom";
import * as app_styles from "./styles/app.css";
import * as styles from "./styles/counter.css";
import {ISinks, ISources} from "./definitions";

app_styles;

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

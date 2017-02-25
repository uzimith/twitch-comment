import Cycle from "@cycle/rxjs-run";
import {Observable} from "rxjs/Rx";
import {p, makeDOMDriver} from "@cycle/dom";
import app_styles from "./styles/app.css";
import * as styles from "./styles/counter.css";

function main() {
    return {
        DOM: Observable.of(p("Hello, world.")),
    };
}

Cycle.run(main, {
    DOM: makeDOMDriver("#app"),
});

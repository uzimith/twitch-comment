import Cycle from "@cycle/rxjs-run";
import {Observable} from "rxjs/Rx";
import {p, makeDOMDriver} from "@cycle/dom";
import * as app_styles from "./styles/app.css";
import * as styles from "./styles/counter.css";

console.log(app_styles);
console.log(styles);

function main() {
    return {
        DOM: Observable.of(p("Hello, world.")),
    };
}

Cycle.run(main, {
    DOM: makeDOMDriver("#app"),
});

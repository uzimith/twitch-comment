import Cycle from "@cycle/rxjs-run";
import {Observable} from "rxjs/Rx";
import * as app_styles from "./styles/app.css";
import {makeDOMDriver} from "@cycle/dom";
import main from "./components/main";

app_styles;

Cycle.run(main, {
    DOM: makeDOMDriver("#app"),
});

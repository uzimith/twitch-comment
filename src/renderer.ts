import Cycle from "@cycle/rxjs-run";
import {Observable} from "rxjs/Rx";
import * as app_styles from "./styles/app.css";
import {makeDOMDriver} from "@cycle/dom";

app_styles;

import {ISinks, ISources} from "./definitions";
import intent from "./intents/main";
import model from "./models/main";
import view from "./views/main";

export default function main(sources: ISources): ISinks {
    return view(model(intent(sources)));
}


Cycle.run(main, {
    DOM: makeDOMDriver("#app"),
});

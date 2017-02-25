import { Observable } from "rxjs";
import { ISinks } from "../definitions";
import { div, label, input, hr, h1 } from "@cycle/dom";

export default function view(message$: Observable<string>): ISinks {
    const vdom$ = message$
        .map((message) => div([
            label("Name:"),
            input(".field", { attr: { type: "text" } }),
            hr(),
            h1([message]),
        ]));
    return {
        DOM: vdom$,
    };
}

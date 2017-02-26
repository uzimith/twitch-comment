import {Observable} from "rxjs";
import {DOMSource} from "@cycle/dom/rxjs-typings";
import {VNode} from "@cycle/dom";
import {Props, Actions} from ".";

export default function intent(dom$: DOMSource, props$: Props): Actions {
    return dom$.events("input").map((ev) => ({
        type: "slide",
        payload: {
            value: (ev.target as HTMLInputElement).value,
        },
    }));
}

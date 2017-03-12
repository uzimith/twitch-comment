import * as d from "@cycle/dom";
import {makeReducer} from "./reducers";
import {Observable} from "rxjs/Rx";

import App from "./components/App";

export default function main({DOM, actions, states}) {
    const reducer = makeReducer(actions);

    return {
        DOM: states.map((props) => App(props, actions)),
        states: reducer,
    };
}

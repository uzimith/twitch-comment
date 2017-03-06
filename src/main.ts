import * as d from "@cycle/dom";
import {makeReducer} from "./reducers";
import {Observable} from "rxjs/Rx";

import Title from "./components/Title";
import CommentList from "./components/CommentList";
import EmbeddingChat from "./components/EmbeddingChat";

import * as styles from "./styles.css";

export default function main({DOM, actions, states}) {
    const reducer = makeReducer(actions);
    const request = Observable.of({
        url: "http://localhost:8080/hello",
        category: "aa",
    });
    return {
        DOM: states.map((props) => (
            d.div("", {class: {[styles.app]: true}}, [
                CommentList(props.get("comments"), actions),
            ])
        )),
        states: reducer,
    };
}

import * as d from "@cycle/dom";
import Actions from "../actions";

import Title from "./Title";
import CommentList from "./CommentList";
import EmbeddingChat from "./EmbeddingChat";

import * as styles from "./App.css";

export default function App(props, actions: Actions): d.VNode {
    return d.div("", {
        class: {[styles.app]: true},
        hook: {
            init: () => {
                console.log("init");
                setTimeout(() => {
                    console.log("call");
                    actions.initApp.next();
                    actions.addComment.next();
                }, 3000);
            },
        },
    }, [
        CommentList(props.get("comments"), actions),
    ]);
}

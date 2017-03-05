import * as d from "@cycle/dom";
import {makeReducer} from "./reducers";

import Title from "./components/Title";
import CommentList from "./components/CommentList";
import EmbeddingChat from "./components/EmbeddingChat";

import * as styles from "./styles.css";

export default function main({DOM, actions, states}) {
    const reducer = makeReducer(actions);
    return {
        DOM: states.map((props) => (
            d.div("", {class: {[styles.app]: true}}, [
                CommentList(props.get("comments"), actions),
                EmbeddingChat({
                    src: "https://www.twitch.tv/imaqtpie/chat",
                    id: "",
                    width: 500,
                    height: 300,
                    frameborder: 0,
                    scrolling: "yes",
                }, actions),
            ])
        )),
        states: reducer,
    };
}

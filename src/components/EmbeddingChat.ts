import * as d from "@cycle/dom";
import Actions from "../actions";

interface EmbeddingChatOptions {
    src: string;             // <src url>
    id: string;              // <channel>
    width: number;           // <width>
    height: number;          // <height>
    frameborder: number;     // <frameborder width>
    scrolling: "yes" | "no"; // <scrolling>
}

export default function EmbeddingChat(
    props: EmbeddingChatOptions,
    actions: Actions,
): d.VNode {
    return d.iframe({props});
}

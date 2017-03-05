import * as d from "@cycle/dom";
import * as styles from "./styles.css";
import CommentView from "../CommentView";
import Comment from "../../models/Comment";
import {List} from "immutable";
import Actions from "../../actions";

export default function CommentList(comments: List<Comment>, actions: Actions): d.VNode {
    return d.ul({class: {[styles.comment_list]: true}},
        comments.map((comment) => (CommentView(comment, actions))).toJS(),
   );
}

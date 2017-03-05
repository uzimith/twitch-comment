import * as d from "@cycle/dom";
import * as styles from "./styles.css";
import Comment from "../../models/Comment";
import Actions from "../../actions";

export default function CommentView(comment: Comment, actions: Actions): d.VNode {
    return d.li({class: {[styles.comment]: true} }, comment.text);
}

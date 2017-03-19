import * as React from 'react';
import Comment from '../../../models/comment';
import CommentView from '../../molecules/CommentView';

export interface Props {
    comments: Comment[];
}

export const CommentList = (props: Props) => {
    return <ul>
        {props.comments.map(comment =>
            <li><CommentView {...comment} /></li>)
        }
    </ul>;
};

export default CommentList;

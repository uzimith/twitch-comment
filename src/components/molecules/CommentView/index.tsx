import * as React from 'react';
import Text from '../../atoms/Text';
import Comment from '../../../models/comment';

export interface Props {
    comment: Comment;
}

export const CommentView = (props: Props) => {
    return <Text text={props.comment.text} />;
};

export default CommentView;

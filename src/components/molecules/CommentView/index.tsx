import * as React from 'react';
import Text from 'components/atoms/Text';
import Comment from 'models/comment';

export interface Props {
    comment: Comment;
}

export const CommentView = (props: Props) => {
    return <div>
        <Text text={props.comment.username} />
        <Text text={props.comment.text} />
    </div>
        ;
};

export default CommentView;

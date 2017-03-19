import * as React from 'react';
import Text from '../../atoms/Text';
import Comment from '../../../models/comment';

export type Props = Comment;

export const CommentView = (props: Props) => {
    return <Text text={props.text} />;
};

export default CommentView;

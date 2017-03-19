import * as React from 'react';
import { connect } from 'react-redux';
import CommentList from 'components/organisms/CommentList';
import Comment from 'models/comment';

export interface Props {
    comment: Comment[];
}

export const CommentPage = () => {
    return <div>
        <CommentList comments={[
            new Comment({ text: 'text' }),
            new Comment({ text: 'text' }),
        ]} />
    </div>
        ;
};

export default CommentPage;

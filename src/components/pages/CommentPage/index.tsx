import * as React from 'react';
import { connect } from 'react-redux';
import CommentList from '../../organisms/CommentList';

export interface Props {
    comment: Comment[];
}

export const CommentPage = () => {
    return <CommentList comments={[]} />
        ;
};

export default CommentPage;

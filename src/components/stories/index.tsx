import * as React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { CommentView } from 'components/molecules/CommentView';
import { Comment } from 'models/comment';

const comment = new Comment({});

storiesOf('CommentView', module)
    .add('with no comment', () => (
        <CommentView comment={{} as any} />
    ))
    .add('with commment', () => (
        <CommentView comment={comment} />
    ))
    ;

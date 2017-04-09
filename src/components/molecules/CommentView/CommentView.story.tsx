import * as React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import centered from '@kadira/react-storybook-decorator-centered';
import * as faker from 'faker';

import CommentView from 'components/molecules/CommentView';
import Comment from 'models/comment';

const comment = new Comment({
    username: faker.internet.userName(),
    text: faker.lorem.sentence(),
});

storiesOf('molecules.CommentView', module)
    .addDecorator(centered)
    .add('with commment', () => (
        <CommentView comment={comment} />
    ))
    .add('with no comment', () => (
        <CommentView comment={{} as any} />
    ))
    ;

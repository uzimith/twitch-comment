import * as React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import centered from '@kadira/react-storybook-decorator-centered';
import * as faker from 'faker';

import { CommentList } from 'components/organisms/CommentList';
import Comment from 'models/comment';

const comments = [
    new Comment({
        username: faker.internet.userName(),
        text: faker.lorem.sentence(),
    }),
    new Comment({
        username: faker.internet.userName(),
        text: faker.lorem.sentence(),
    }),
    new Comment({
        username: faker.internet.userName(),
        text: faker.lorem.sentence(),
    }),
];

storiesOf('organisms.CommentList', module)
    .addDecorator(centered)
    .add('with commments', () => (
        <CommentList comments={comments} />
    ))
    ;

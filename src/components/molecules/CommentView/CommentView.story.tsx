import * as React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { CommentView } from 'components/molecules/CommentView';
import { Comment } from 'models/comment';
const comment = new Comment({});
// declare function require(moduleName: string): any;
// const React = require('react');
// const storybook = require('@kadira/storybook');
// const storiesOf = storybook.storiesOf;
// const action = storybook.action;
// const CommentView = require('components/molecules/CommentView').CommentView;
// const Comm = require('models/comment').Comm;
//
// const comment = new Comm({});

storiesOf('CommentView', module)
    .add('with no comment', () => (
        <CommentView comment={{} as any} />
    ))
    .add('with commment', () => (
        <CommentView comment={comment} />
    ))
    ;

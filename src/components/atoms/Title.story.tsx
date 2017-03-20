import * as React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Title from 'components/atoms/Title';
import centered from '@kadira/react-storybook-decorator-centered';

const english = `
Quas quam tempore qui repudiandae officiis.
Ducimus rem cumque accusantium laborum.
Nihil et dignissimos eaque nobis omnis necessitatibus.
Quod ipsum omnis omnis quidem amet excepturi sapiente.
`;

storiesOf('atoms.Title', module)
    .addDecorator(centered)
    .add('日本語', () => (
        <Title text="タイトル" />
    ))
    .add('English', () => (
        <Title text="Title" />
    ))
    ;

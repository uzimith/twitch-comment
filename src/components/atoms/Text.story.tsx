import * as React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Text from 'components/atoms/Text';
import centered from '@kadira/react-storybook-decorator-centered';

const english = `
Quas quam tempore qui repudiandae officiis.
Ducimus rem cumque accusantium laborum.
Nihil et dignissimos eaque nobis omnis necessitatibus.
Quod ipsum omnis omnis quidem amet excepturi sapiente.
`;

storiesOf('atoms.Text', module)
    .addDecorator(centered)
    .add('English', () => (
        <Text text={english} />
    ))
    .add('日本語', () => (
        <Text text="おはようございます。" />
    ))
    ;

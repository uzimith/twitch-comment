import * as React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Image from 'components/atoms/Image';
import centered from '@kadira/react-storybook-decorator-centered';

storiesOf('atoms.Image', module)
    .addDecorator(centered)
    .add('with image', () => (
        <Image src="http://placehold.it/320x180/ddd/666.png/?text=text" />
    ))
    .add('with no image', () => (
        <Image src="" />
    ))
    ;

import {
    configure,
    addDecorator
} from "@kadira/storybook";
import * as React from 'react';

addDecorator((story) => (<div style={{padding: 20}}>{story()}</div>));

const req = require.context("../src/", true, /\.story.tsx$/);
configure(() => req.keys().forEach(req), module);

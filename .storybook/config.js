import {
    configure
} from '@kadira/storybook';

function loadStories() {
    require('../src/components/stories/index.tsx');
}

configure(loadStories, module);

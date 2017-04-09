import * as React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import centered from '@kadira/react-storybook-decorator-centered';
import * as faker from 'faker';

import ChannelView from 'components/molecules/ChannelView';
import Channel from 'models/channel';

const channel = new Channel({
    "background": null,
    "banner": null,
    "broadcaster_language": "ja",
    "display_name": "らいじん",
    "game": "League of Legends",
    "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/alfrea-profile_image-33f66c56a9cfd86e-300x300.jpeg",
    "mature": false,
    "status": "らいじん　jp TWserver　plat3 ",
    "partner": true,
    "url": "https://www.twitch.tv/alfrea",
    "video_banner": null,
    "_id": 45839490,
    "name": "alfrea",
    "created_at": "2013-07-09T07:48:06Z",
    "updated_at": "2017-04-09T06:00:30Z",
    "_links": {
        "self": "https://api.twitch.tv/kraken/channels/alfrea",
        "follows": "https://api.twitch.tv/kraken/channels/alfrea/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/alfrea/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/alfrea/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/alfrea",
        "subscriptions": "https://api.twitch.tv/kraken/channels/alfrea/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/alfrea/editors",
        "videos": "https://api.twitch.tv/kraken/channels/alfrea/videos",
        "teams": "https://api.twitch.tv/kraken/channels/alfrea/teams"
    },
    "delay": null,
    "followers": 3035,
    "profile_banner": null,
    "profile_banner_background_color": null,
    "views": 195676,
    "language": "ja"
});

storiesOf('molecules.ChannelView', module)
    .addDecorator(centered)
    .add('with channel', () => (
        <ChannelView channel={channel} />
    ))
    .add('with no channel', () => (
        <ChannelView channel={{} as any} />
    ))
    ;

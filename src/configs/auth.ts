import secret from '../secret';

export const parameters = {
    clientId: secret.clientId,
    clientSecret: secret.clientSecret,
    authorizationUrl: 'https://api.twitch.tv/kraken/oauth2/authorize',
    tokenUrl: 'https://api.twitch.tv/kraken/oauth2/token',
    useBasicAuthorizationHeader: false,
    redirectUri: 'http://localhost',
};

export const authWindowOptions = {
    alwaysOnTop: true,
    autoHideMenuBar: true,
};

export const twitchScopes = [
    'chat_login',
    'channel_read',
    'user_read',
];

export const twitchAllScopes = [
    'user_read',
    'user_blocks_edit ',
    'user_blocks_read',
    'user_follows_edit',
    'channel_read',
    'channel_editor',
    'channel_commercial',
    'channel_stream',
    'channel_subscriptions',
    'user_subscriptions',
    'channel_check_subscription',
    'chat_login',
    'channel_feed_read',
    'channel_feed_edit',
];

import secret from '../secret';

export const config = {
    clientId: secret.clientId,
    clientSecret: secret.clientSecret,
    authorizationUrl: 'https://api.twitch.tv/kraken/oauth2/authorize',
    tokenUrl: 'https://api.twitch.tv/kraken/oauth2/token',
    useBasicAuthorizationHeader: false,
    redirectUri: 'http://localhost',
};
export const options = {
    scope: 'chat_login',
};

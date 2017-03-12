import electronOauth2 from "electron-oauth2";
import secret from "../secret";

let tokens = null;

const oauthMiddleware = {
    patchAction: (action) => action.do( ({type, payload}) => {
        console.log(type);
        if (type === "initApp") {
            const config = {
                clientId: secret.clientId,
                clientSecret: secret.clientSecret,
                authorizationUrl: "https://api.twitch.tv/kraken/oauth2/authorize",
                tokenUrl: "https://api.twitch.tv/kraken/oauth2/token",
                useBasicAuthorizationHeader: false,
                redirectUri: "http://localhost",
            };
            const options = {
                scope: "chat_login",
            };

            const oauth = electronOauth2(config, {
                alwaysOnTop: true,
                autoHideMenuBar: true,
            });

            oauth.getAccessToken(options)
            .then(token => {
                console.log(token);
            });
        }
    }),
    patchState: (state) => state.do( (x) => {
    }),
};

export default oauthMiddleware;

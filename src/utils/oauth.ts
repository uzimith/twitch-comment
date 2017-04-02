import stubbable from 'stubbable-decorator';
import { Observable } from 'rxjs/Rx';
import * as electronOauth2 from 'electron-oauth2';
import { parameters, authWindowOptions, twitchScopes as scopes } from 'configs/auth';

export class OAuthAuthorizeError extends Error {
    public name = 'OAuthAuthorizeError';
    public provider;

    constructor(provider: string) {
        super(`provider: ${provider}`);
        this.provider = provider;
    }

    toString() {
        return this.name + ': ' + this.message;
    }
}

export const OAuthAuthorize = stubbable(
    (provider: string): Observable<{}> => {
        if (provider === 'twtich') {
            const oauth = electronOauth2(parameters, parameters);
            return Observable.from(oauth.getAccessToken({
                scope: scopes.join(' '),
            }));
        }
        return Observable.throw(new OAuthAuthorizeError(provider));
    }
);


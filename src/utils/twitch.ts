import { client } from 'tmi.js';

export function connect(user: string, password: string, channel: string) {
    const tmiClient = new client({
        options: {
            debug: true
        },
        connection: {
            reconnect: true,
        },
        identity: {
            username: user,
            password: `oauth:${password}`
        },
        channels: [`#${channel}`]
    });
    tmiClient.connect();
    return tmiClient;
}

export interface UserState {
    badges?: any;
    color?: any;
    emotes?: any;
    id: string;
    mod: boolean;
    subscriber: boolean;
    turbo: boolean;
    username: string;
}

export interface ChatResponse {
    channel: string;
    userstate: UserState;
    message: string;
    self: boolean;
}

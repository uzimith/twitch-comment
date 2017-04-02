import { client } from 'tmi.js';

export function connect(user: string, password: string, channel: string) {
    const tmiClient = client({
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

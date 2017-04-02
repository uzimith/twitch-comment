import actionCreatorFactory from 'typescript-fsa';
import { APIResponseError } from 'utils/api';
import Token from 'models/token';

const actionCreator = actionCreatorFactory();

export const authorizeTwitch = actionCreator.async<undefined, Token, Error>('AUTHORIZE_TWITCH');

export interface TwitchResponse {
    channel: string;
    username: string;
    message: string;
};
export const subsribeTwitch = actionCreator('SUBSCRIBE_TWITCH');
export const publishTwitch = actionCreator<TwitchResponse>('PUBLISH_TWITCH');

import actionCreatorFactory from 'typescript-fsa';
import { APIResponseError } from 'utils/api';
import Token from 'models/token';
import { ChatResponse } from 'utils/twitch';

const actionCreator = actionCreatorFactory();

export const authorizeTwitch = actionCreator.async<undefined, Token, Error>('AUTHORIZE_TWITCH');

export const subsribeTwitch = actionCreator('SUBSCRIBE_TWITCH');
export const publishTwitch = actionCreator<ChatResponse>('PUBLISH_TWITCH');

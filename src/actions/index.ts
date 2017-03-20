import actionCreatorFactory from 'typescript-fsa';
import { APIResponseError } from '../utils/api';
import Token from 'models/token';

const actionCreator = actionCreatorFactory();

// auth
export const authorize = actionCreator.async<undefined, Token, Error>('AUTHORIZE');

// comment
export const addComment = actionCreator('AUTHORIZE');

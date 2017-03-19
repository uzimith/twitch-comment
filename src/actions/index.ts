import actionCreatorFactory from 'typescript-fsa';
import { ResponseError } from '../utils/api';

const actionCreator = actionCreatorFactory();

// auth
export const authorize = actionCreator.async<void, {}, ResponseError>('AUTHORIZE');

// comment
export const addComment = actionCreator('AUTHORIZE');

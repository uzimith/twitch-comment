import { Record } from 'immutable';
import * as uuid from 'uuid/v4';

export interface Params {
    access_token?: string;
    refresh_token?: string;
    scope?: string[];
    uuid?: string;
}

export class Token extends Record({
    access_token: null,
    refresh_token: null,
    uuid: null,
    scope: []
}) {
    public access_token: string; // tslint:disable-line
    public refresh_token: string; // tslint:disable-line
    public scope: string[];
    public uuid: string;

    constructor(params: Params) {
        super({ ...params, uuid: uuid() });
    }
}

export default Token;

import { Record } from 'immutable';
import * as uuid from 'uuid/v4';

export interface Params {
    access_token?: string;
    refresh_token?: string;
    scope?: string[];
    uuid?: string;
}

class Token extends Record({
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
        if (typeof params.uuid !== 'string') {
            params.uuid = uuid();
        }
        super(params);
    }
}

export default Token;

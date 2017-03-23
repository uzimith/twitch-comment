import { Record } from 'immutable';

export interface Params {
    display_name?: string;
    _id?: number;
    name?: string;
    type?: string;
    bio?: any;
    created_at?: Date;
    updated_at?: Date;
    logo?: string;
    _links?: {
        self: string;
    };
}

class User extends Record({
}) {
    display_name: string; // tslint:disable-line
    _id: number;
    name: string;
    type: string;
    bio: string;
    created_at: Date; // tslint:disable-line
    updated_at: Date; // tslint:disable-line
    logo: string;
    _links: { // tslint:disable-line
        self: string;
    };

    constructor(params: Params) {
        super(params);
    }
}

export default User;

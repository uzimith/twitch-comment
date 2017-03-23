import { Record } from 'immutable';
import * as uuid from 'uuid/v4';

export interface Links {
    self?: string;
    follows?: string;
    commercial?: string;
    stream_key?: string;
    chat?: string;
    subscriptions?: string;
    editors?: string;
    teams?: string;
    videos?: string;
}

export interface Params {
    mature?: boolean;
    status?: string;
    broadcaster_language?: string;
    display_name?: string;
    game?: string;
    language?: string;
    _id?: number;
    name?: string;
    created_at?: Date;
    updated_at?: Date;
    delay?: any;
    logo?: string;
    banner?: any;
    video_banner?: any;
    background?: any;
    profile_banner?: any;
    profile_banner_background_color?: any;
    partner?: boolean;
    url?: string;
    views?: number;
    followers?: number;
    _links?: Links;
}

class Channel extends Record({
}) {
    public mature: boolean;
    public status: string;
    public broadcaster_language: string; // tslint:disable-line
    public display_name: string; // tslint:disable-line
    public game: string;
    public language: string;
    public _id: number;
    public name: string;
    public created_at: Date; // tslint:disable-line
    public updated_at: Date; // tslint:disable-line
    public delay?: any;
    public logo: string;
    public banner?: any;
    public video_banner?: any; // tslint:disable-line
    public background?: any;
    public profile_banner?: any; // tslint:disable-line
    public profile_banner_background_color?: any; // tslint:disable-line
    public partner: boolean;
    public url: string;
    public views: number;
    public followers: number;
    public _links: Links;

    constructor(params: Params) {
        super(params);
    }
}

export default Channel;

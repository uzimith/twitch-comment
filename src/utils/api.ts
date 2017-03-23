import { Observable } from 'rxjs/Rx';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

export class APIResponseError extends Error {
    public name = 'APIResponseError';
    public response;

    constructor(response: Response) {
        super(response.statusText);
        this.response = response;
    }

    toString() {
        return this.name + ': ' + this.message;
    }
}

function checkStatus(response: Response): Observable<Response> | ErrorObservable {
    if (response.status >= 200 && response.status < 300) {
        return Observable.from(response.json());
    } else {
        return Observable.throw(new APIResponseError(response));
    }
}

export function API(request: Request | string): Observable<any> {
    return Observable.fromPromise(fetch(request))
        .mergeMap(checkStatus)
        ;
}

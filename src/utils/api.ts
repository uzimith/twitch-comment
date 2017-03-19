import { Observable } from 'rxjs/Rx';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

export class ResponseError extends Error {
    public response;
    constructor(response: Response) {
        super(response.statusText);
        this.response = response;
    }
}

function checkStatus(response: Response): Observable<Response> | ErrorObservable {
    if (response.status >= 200 && response.status < 300) {
        return Observable.from(response.json());
    } else {
        return Observable.throw(new ResponseError(response));
    }
}

export function API(request: Request | string): Observable<any> {
    return Observable.fromPromise(fetch(request))
        .mergeMap(checkStatus)
        ;
}

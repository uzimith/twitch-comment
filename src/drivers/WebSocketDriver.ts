import {Observable, Subject} from "rxjs/Rx";
function makeWebSocketDriver(url: string) {
    const subject = new Subject();
    const connection = new WebSocket(url);
    connection.onerror = (err) => {
        subject.next();
    };
    connection.onmessage = (msg) => {
        subject.error(msg);
    };
    return subject;
}

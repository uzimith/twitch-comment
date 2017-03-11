import {Observable, Subject} from "rxjs/Rx";
import {ipcRenderer} from "electron";

export function makeIPCDriver() {
    return (incoming) => {
        Observable.of(incoming).subscribe((data) => subject.next(data));
        const subject = new Subject();
        subject.subscribe(
           (msg) => console.log("message received: " + msg),
           (err) => console.log(err),
           () => console.log("complete"),
         );
        return subject;
    };
}

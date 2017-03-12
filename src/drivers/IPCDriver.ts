import {Observable, Subject} from "rxjs/Rx";
import {ipcRenderer} from "electron";

export function makeIPCDriver() {
    return (incoming) => {
        Observable.of(incoming).subscribe((data) => ipcRenderer.send(data));
        ipcRenderer.on(
           (msg) => console.log("message received: " + msg),
           (err) => console.log(err),
           () => console.log("complete"),
         );
        return ipcRenderer;
    };
}

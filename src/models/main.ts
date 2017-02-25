import { Observable } from "rxjs";
import { IIntent } from "../intents/main";

export default function model(intent: IIntent): Observable<string> {
  return intent.name$
      .map((name) => name ? `Hello, ${name}!` : "Hello! Please enter your name...");
}

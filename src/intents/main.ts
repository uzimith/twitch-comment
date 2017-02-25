import { ISources } from "../definitions";
import { Observable } from "rxjs";

export interface IIntent {
  name$: Observable<string>;
}

export default function intent(sources: ISources): IIntent {
    const name$ = sources.DOM.select(".field")
        .events("input")
        .map((ev) => (ev.target as HTMLInputElement).value)
        .startWith("");
    return { name$ };
}

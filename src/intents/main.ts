import {Observable} from "rxjs";
import {DOMSource} from "@cycle/dom/rxjs-typings";
import {Sources, Actions} from "../components/main";
import {VNode} from "@cycle/dom";

function getSliderEvent(domSource: DOMSource, className: string): Observable<VNode> {
  return domSource.select("." + className)
    .events("input")
    .map((ev) => (ev.target as HTMLInputElement).value);
}

export default function intent(sources: Sources): Actions {
    const changeWeight$: Observable<VNode> = getSliderEvent(sources.DOM, "weight");
    const changeHeight$: Observable<VNode> = getSliderEvent(sources.DOM, "height");
    return {
        changeHeight$,
        changeWeight$,
    };
}

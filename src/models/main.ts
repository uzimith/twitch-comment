import {Observable} from "rxjs";
import {Actions, States} from "../components/main";
import {div, input, VNode} from "@cycle/dom";

function bmi(weight: number, height: number): number {
    const heightMeters = height * 0.01;
    return Math.round(weight / (heightMeters * heightMeters));
}

export default function model(actions: Actions): States {
    const weight$ = actions.changeWeight$.startWith(70);
    const height$ = actions.changeHeight$.startWith(170);

    return Observable.combineLatest(weight$, height$)
    .map(([weight, height]) => {
        return {weight, height, bmi: bmi(weight, height)};
    });
}

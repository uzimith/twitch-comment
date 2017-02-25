import { Observable } from "rxjs";
import { div, label, input, h2, VNode  } from "@cycle/dom";
import { States, Sinks } from "../components/main";

function renderWeightSlider(weight: number): VNode {
  return div([
    "Weight " + weight + "kg",
    input(".weight", {attrs: {type: "range", min: 40, max: 140, value: weight} }),
  ]);
}

function renderHeightSlider(height: number): VNode {
  return div([
    "Height " + height + "cm",
    input(".height", {attrs: {type: "range", min: 140, max: 210, value: height} }),
  ]);
}

export default function view(states: States): Sinks {
    const vdom$ = states.map(({weight, height, bmi}) => div([
        renderWeightSlider(weight),
        renderHeightSlider(height),
        h2("BMI is " + bmi),
    ]));
    return {
        DOM: vdom$,
    };
}

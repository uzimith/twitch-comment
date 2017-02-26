import {Observable} from "rxjs";
import {Actions, States, Props} from ".";

function makeReducer$(actions$: Actions) {
    let slideReducer = actions$
    .filter((action) => action.type === 'slide')
    .map(action => function (data) {
      return {
        ...data,
        ...payload
      };
    });

  return Observable.merge(
      slideReducer,
  );
}

export default function model(actions$: Actions, props: Props): States {
    const value$ = actions$.slide$.startWith(props.value);
    let reducer$ = makeReducer$(action$);
    return value$.map((value) => ({value}));

    let init$ = Observable.of({value: props.value});
    let reducer$ = makeReducer$(action$);

    return 

    return sanitizedProps$.map(props =>
    reducer$.fold((data, reducer) => reducer(data), props)
    ).flatten().remember();
}

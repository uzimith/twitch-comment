import run from "@cycle/rxjs-run";
import {makeDOMDriver} from "@cycle/dom";
import {makeHTTPDriver} from "@cycle/http";
import {createStore} from "./drivers/stateStore";
import {List} from "immutable";
import logger from "./middlewares/logger";
import oauth from "./middlewares/oauth";
import main from "./main";

import EventModule from "snabbdom/modules/eventlisteners";
import ClassModule from "snabbdom/modules/class";
import PropsModule from "snabbdom/modules/props";
import AttrsModule from "snabbdom/modules/attributes";
import StyleModule from "snabbdom/modules/style";
import DatasetModule from "snabbdom/modules/dataset";

import Actions from "./actions";
import Comment from "./models/Comment";

const {makeActionsDriver, makeStatesDriver} = createStore([logger, oauth]);

run(main, {
    DOM: makeDOMDriver("#app", {
        modules: [EventModule, ClassModule, PropsModule, AttrsModule, StyleModule, DatasetModule],
    }),
    HTTP: makeHTTPDriver(),
    actions: makeActionsDriver(new Actions()),
    states: makeStatesDriver({
        comments: List.of(),
    }),
});

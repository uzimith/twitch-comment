import {ISinks, ISources} from "../definitions";
import intent from "../intents/main";
import model from "../models/main";
import view from "../views/main";

export default function main(sources: ISources): ISinks {
    return view(model(intent(sources)));
}


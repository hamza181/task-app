import { combineReducers } from "redux";
import { counter } from "./counter";
import { note } from "./note";

export const reducer = combineReducers({
    counter: counter,
    note: note,
})
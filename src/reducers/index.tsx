import * as constants from "../constants";
import { combineReducers } from "redux";
import combinationReducer from "./combinationReducer";

export interface AppState {
  combination: string[];
}

const reducers = combineReducers<AppState>({
  combination: combinationReducer
});

export default reducers;

import * as constants from "../constants";
import { combineReducers } from "redux";
import combinationReducer from "./combinationReducer";
import feedbackReducer, { Feedback } from "./feedbackReducer";

export interface AppState {
  combination: string[];
  feedbacks: Feedback[];
}

const reducers = combineReducers<AppState>({
  combination: combinationReducer,
  feedbacks: feedbackReducer
});

export default reducers;

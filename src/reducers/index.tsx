import combinationReducer from "./combinationReducer";
import endOfPlayReducer, { EndOfPlay } from "./endOfPlayReducer";
import feedbackReducer, { Feedback } from "./feedbackReducer";
import { combineReducers } from "redux";

export interface AppState {
  combination: string[];
  feedbacks: Feedback[];
  endOfPlay: EndOfPlay;
}

const reducers = combineReducers<AppState>({
  combination: combinationReducer,
  feedbacks: feedbackReducer,
  endOfPlay: endOfPlayReducer
});

export default reducers;

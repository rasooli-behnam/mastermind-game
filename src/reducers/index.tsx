import combinationReducer from "./combinationReducer";
import endOfPlayReducer, { EndOfPlay } from "./endOfPlayReducer";
import feedbackReducer, { Feedback } from "./feedbackReducer";

export interface AppState {
  combination: string[];
  feedbacks: Feedback[];
  endOfPlay: EndOfPlay;
}

export default function combineReducers(appState: AppState, action: any) {
  return {
    combination: combinationReducer(appState, action),
    feedbacks: feedbackReducer(appState, action),
    endOfPlay: endOfPlayReducer(appState, action)
  };
}

import * as constants from "../constants";
import { Action, ActionCreator } from "redux";

export interface ResetCombinationAction extends Action<string> {}

export function resetCombination(): ResetCombinationAction {
  return {
    type: constants.RESET_COMBINATION
  };
}

export interface GetFeedbackAction extends Action<string> {
  payload: {
    guesses: string[];
    combination: string[];
  };
}

export function getFeedback(
  prams: GetFeedbackAction["payload"]
): GetFeedbackAction {
  return {
    type: constants.GET_FEEDBACK,
    payload: {
      guesses: prams.guesses,
      combination: prams.combination
    }
  };
}

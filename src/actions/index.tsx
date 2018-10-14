import * as constants from "../constants";
import { Action, ActionCreator } from "redux";

export interface ResetCombinationAction extends Action<string> {}

export function resetCombination(): ResetCombinationAction {
  return {
    type: constants.RESET_COMBINATION
  };
}

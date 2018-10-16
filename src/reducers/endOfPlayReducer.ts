import * as constants from "../constants";
import { GetFeedbackAction } from "../actions";
import { AppState } from ".";

export interface EndOfPlay {
  condition: boolean;
  message: string;
}

const initialState: EndOfPlay = {
  condition: false,
  message: ""
};

let tries: number;

export default function endOfPlayReducer(
  prevState: AppState,
  action: GetFeedbackAction
) {
  switch (action.type) {
    case constants.RESET_COMBINATION:
      tries = 0;
      break;

    case constants.GET_FEEDBACK:
      if (tries > 15) return { condition: true, message: "You have lost!" };
      tries++;
      break;
  }

  if (prevState && prevState.endOfPlay) return prevState.endOfPlay;
  else return initialState;
}

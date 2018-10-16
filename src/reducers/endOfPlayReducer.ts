import * as constants from "../constants";
import { AppState } from ".";
import { GetFeedbackAction } from "../actions";

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
      if (isAllGuessesCorrect(action.payload.guesses, prevState.combination))
        return {
          condition: true,
          message: `Correct! It is (${prevState.combination})`
        };
      else if (tries > 15)
        return {
          condition: true,
          message: `You lost! It was (${prevState.combination})`
        };
      tries++;
      break;
  }

  if (prevState && prevState.endOfPlay) return prevState.endOfPlay;
  else return initialState;
}

function isAllGuessesCorrect(guesses: string[], combination: string[]) {
  return (
    guesses.filter((guess, i) => guess === combination[i]).length ===
    combination.length
  );
}

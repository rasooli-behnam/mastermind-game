import * as constants from "../constants";
import { Action } from "redux";
import { GetFeedbackAction } from "src/actions";
const cloneDeep = require("lodash.clonedeep");

interface FeedbackForIndividualSet {
  rightGuesses: number;
  rightGuessesWithWrongSpot: number;
}

export interface Feedback {
  guesses: string[];
  overallSet: FeedbackForIndividualSet;
  firstSubSet: FeedbackForIndividualSet;
  secondSubset: FeedbackForIndividualSet;
}

export default function feedbackReducer(
  prevState: Feedback[] = [],
  action: GetFeedbackAction
) {
  if (action.type === constants.GET_FEEDBACK) {
    const feedback = defaultFeedback;

    const guesses = [...action.payload.guesses];
    const combination = [...action.payload.combination];

    for (let i = 0; i < guesses.length; i++) {
      if (guesses[i] === combination[i]) {
        feedback.overallSet.rightGuesses++;
      }
    }

    const feedbacks = cloneDeep(prevState);
    feedbacks.push(feedback);

    return feedbacks;
  }

  return prevState;
}

const defaultFeedback: Feedback = {
  guesses: [],
  overallSet: {
    rightGuesses: 0,
    rightGuessesWithWrongSpot: 0
  },
  firstSubSet: {
    rightGuesses: 0,
    rightGuessesWithWrongSpot: 0
  },
  secondSubset: {
    rightGuesses: 0,
    rightGuessesWithWrongSpot: 0
  }
};

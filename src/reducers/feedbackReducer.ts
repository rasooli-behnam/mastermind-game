import * as constants from "../constants";
import { Action } from "redux";
import { AppState } from ".";
import { GetFeedbackAction } from "src/actions";
const cloneDeep = require("lodash.clonedeep");

interface FeedbackForIndividualSet {
  range: number[];
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
  prevState: AppState,
  action: GetFeedbackAction
) {
  if (action.type === constants.GET_FEEDBACK) {
    const feedback: Feedback = cloneDeep(defaultFeedback);

    const guesses = action.payload.guesses;
    const combination = prevState.combination;
    feedback.guesses = guesses;

    const overallSetFeedback = getFeedbackFor(guesses, combination);
    const firstSubSetFeedback = getFeedbackFor(
      guesses.slice(
        feedback.firstSubSet.range[0],
        feedback.firstSubSet.range[1] + 1
      ),
      combination.slice(
        feedback.firstSubSet.range[0],
        feedback.firstSubSet.range[1] + 1
      )
    );
    const secondSubsetFeedback = getFeedbackFor(
      guesses.slice(
        feedback.secondSubset.range[0],
        feedback.secondSubset.range[1] + 1
      ),
      combination.slice(
        feedback.secondSubset.range[0],
        feedback.secondSubset.range[1] + 1
      )
    );

    feedback.overallSet = { ...feedback.overallSet, ...overallSetFeedback };
    feedback.firstSubSet = { ...feedback.firstSubSet, ...firstSubSetFeedback };
    feedback.secondSubset = {
      ...feedback.secondSubset,
      ...secondSubsetFeedback
    };

    const feedbacks = cloneDeep(prevState.feedbacks);
    feedbacks.push(feedback);

    return feedbacks;
  }

  if (prevState && prevState.feedbacks) return prevState.feedbacks;
  else return [];
}

function getFeedbackFor(
  guesses: string[],
  combination: string[]
): { rightGuesses: number; rightGuessesWithWrongSpot: number } {
  const result = {
    rightGuesses: 0,
    rightGuessesWithWrongSpot: 0
  };
  const clonedGuesses: string[] = cloneDeep(guesses);
  const clonedCombination: string[] = cloneDeep(combination);

  for (let i = 0; i < clonedGuesses.length; i++) {
    if (clonedGuesses[i] === clonedCombination[i]) {
      clonedGuesses[i] = "used";
      clonedCombination[i] = "used";
      result.rightGuesses++;
    }
  }

  for (let i = 0; i < clonedGuesses.length; i++) {
    if (clonedGuesses[i] !== "used") {
      for (let ii = 0; ii <= clonedCombination.length; ii++) {
        if (clonedGuesses[i] === clonedCombination[ii]) {
          clonedCombination[ii] = "used";
          result.rightGuessesWithWrongSpot++;
          break;
        }
      }
    }
  }

  return result;
}

const defaultFeedback: Feedback = {
  guesses: [],
  overallSet: {
    range: [0, 8],
    rightGuesses: 0,
    rightGuessesWithWrongSpot: 0
  },
  firstSubSet: {
    range: [1, 5],
    rightGuesses: 0,
    rightGuessesWithWrongSpot: 0
  },
  secondSubset: {
    range: [3, 7],
    rightGuesses: 0,
    rightGuessesWithWrongSpot: 0
  }
};

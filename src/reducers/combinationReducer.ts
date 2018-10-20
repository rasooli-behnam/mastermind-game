import * as constants from "../constants";
import { Action } from "redux";
import { AppState } from ".";

const availableSybols = ["A", "B", "C", "D", "E"];
const initialState = ["A", "A", "A", "A", "A", "A", "A", "A", "A"];

export default function combinationReducer(
  prevState: AppState,
  action: Action<string>
) {
  if (action.type === constants.RESET_COMBINATION) {
    const combination = [...initialState];
    for (let i = 0; i < combination.length; i++) {
      const randomIndex = Math.floor(Math.random() * availableSybols.length);
      combination[i] = availableSybols[randomIndex];
    }

    console.log(combination);
    return combination;
  }

  if (prevState && prevState.combination) return prevState.combination;
  else return initialState;
}

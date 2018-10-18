import styles from "./styles";
import { AppState } from "src/reducers";
import { getFeedback, resetCombination } from "src/actions";
import { WithStyles } from "@material-ui/core/styles/withStyles";

export interface Props extends WithStyles<typeof styles> {
  endOfPlay: AppState["endOfPlay"];
  resetCombination: typeof resetCombination;
  getFeedback: typeof getFeedback;
}

export interface State {
  guesses: string;
}

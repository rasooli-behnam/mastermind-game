import styles from "./styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import { Feedback } from "src/reducers/feedbackReducer";

export interface Props extends WithStyles<typeof styles> {
  feedback: Feedback;
}

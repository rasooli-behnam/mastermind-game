import styles from "./styles";
import { AppState } from "src/reducers";
import { WithStyles } from "@material-ui/core/styles/withStyles";

export interface Props extends WithStyles<typeof styles> {
  combination: AppState["combination"];
  feedbacks: AppState["feedbacks"];
}

import * as React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { WithStyles, createStyles, withStyles } from "@material-ui/core";
import ChoosingArea from "./ChoosingArea";
import ResultArea from "./ResultArea";
import { GlobalSettings } from "../GlobalSettings";

export interface PlayProps extends WithStyles<typeof styles> {}

class Play extends React.Component<PlayProps, any> {
  public render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <div className={classes.resultArea}>
          <ResultArea />
        </div>
        <div className={classes.choiceArea}>
          <ChoosingArea />
        </div>
      </Paper>
    );
  }
}

const styles = createStyles({
  root: {
    width: GlobalSettings.view.width,
    height: GlobalSettings.view.height,
    position: "absolute",
    left: 0,
    right: 0,
    margin: "10px auto"
  },
  resultArea: {
    width: "100%",
    height: GlobalSettings.view.height - 55,
    position: "absolute",
    top: 0
  },
  choiceArea: {
    width: "100%",
    height: 55,
    position: "absolute",
    bottom: 0
  }
});

export default withStyles(styles)(Play);

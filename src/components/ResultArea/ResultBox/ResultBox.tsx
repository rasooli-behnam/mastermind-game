import * as React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { Props } from "./types";

export default class ResultBox extends React.Component<Props, any> {
  public render() {
    const { classes, feedback } = this.props;

    const firstSubSetFeedback = `${feedback.firstSubSet.rightGuesses}:${
      feedback.firstSubSet.rightGuessesWithWrongSpot
    }`;

    const secondSubSetFeedback = `${feedback.secondSubset.rightGuesses}:${
      feedback.secondSubset.rightGuessesWithWrongSpot
    }`;

    const overallSubSetFeedback = `${feedback.overallSet.rightGuesses}:${
      feedback.overallSet.rightGuessesWithWrongSpot
    }`;

    return (
      <Grid item className={classes.root}>
        <Paper className={classes.paper}>
          <Typography className={classes.firstSubSetFeedback}>
            {firstSubSetFeedback}
          </Typography>
          <Typography className={classes.topLine}>{` _____`}</Typography>
          <Typography className={classes.guess}>{feedback.guesses}</Typography>
          <Typography className={classes.bottomLine}>{`   _____`}</Typography>
          <Typography className={classes.secondSubSetFeedback}>
            {secondSubSetFeedback}
          </Typography>
          <Typography className={classes.overallFeedbackLine}>|</Typography>
          <Typography className={classes.overallFeedback}>
            {overallSubSetFeedback}
          </Typography>
        </Paper>
      </Grid>
    );
  }
}

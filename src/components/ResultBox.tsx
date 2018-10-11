import * as React from "react";
import { AppState } from "../types";
import { connect } from "react-redux";
import {
  createStyles,
  Paper,
  Theme,
  Typography,
  WithStyles,
  withStyles
} from "@material-ui/core";
import { GlobalSettings } from "../GlobalSettings";

export interface ResultBoxProps extends WithStyles<typeof styles> {}

class ResultBox extends React.Component<ResultBoxProps, any> {
  public render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Typography className={classes.topPartialFeedback}>{`0:0`}</Typography>
        <Typography className={classes.topLine}>{` _____`}</Typography>
        <Typography className={classes.guess}>{`123424313`}</Typography>
        <Typography className={classes.bottomLine}>{`   _____`}</Typography>
        <Typography
          className={classes.bottomPartialFeedback}
        >{`0:0`}</Typography>
        <Typography className={classes.feedbackLine}>|</Typography>
        <Typography className={classes.feedback}>{`0:0`}</Typography>
      </Paper>
    );
  }
}

const styles = ({ typography }: Theme) =>
  createStyles({
    root: {
      position: "relative",
      width: GlobalSettings.view.width * 0.5 - 10,
      height: 60,
      margin: 5,
      backgroundColor: "lightYellow"
    },
    topPartialFeedback: {
      position: "absolute",
      top: 8,
      left: 38,
      fontSize: typography.fontSize * 1.1,
      fontFamily: "Roboto Mono",
      fontWeight: "normal",
      letterSpacing: 3,
      lineHeight: 0
    },
    topLine: {
      position: "absolute",
      top: -7,
      left: 3,
      fontSize: typography.fontSize * 1.6,
      fontFamily: "Roboto Mono",
      fontWeight: "normal",
      letterSpacing: 2,
      whiteSpace: "pre"
    },
    guess: {
      position: "absolute",
      top: 30,
      left: 3,
      fontSize: typography.fontSize * 1.6,
      fontFamily: "Roboto Mono",
      fontWeight: "bold",
      letterSpacing: 2,
      lineHeight: 0
    },
    bottomLine: {
      position: "absolute",
      bottom: 11,
      left: 3,
      fontSize: typography.fontSize * 1.6,
      fontFamily: "Roboto Mono",
      fontWeight: "normal",
      letterSpacing: 2,
      whiteSpace: "pre"
    },
    bottomPartialFeedback: {
      position: "absolute",
      bottom: 9,
      left: 70,
      fontSize: typography.fontSize * 1.1,
      fontFamily: "Roboto Mono",
      fontWeight: "normal",
      letterSpacing: 3,
      lineHeight: 0
    },
    feedbackLine: {
      position: "absolute",
      top: 25,
      right: 31,
      fontSize: typography.fontSize * 4,
      fontFamily: "Roboto Mono",
      fontWeight: "lighter",
      lineHeight: 0
    },
    feedback: {
      position: "absolute",
      top: 30,
      right: 7,
      fontSize: typography.fontSize * 2,
      fontFamily: "Roboto Mono",
      fontWeight: "bold",
      letterSpacing: -4,
      lineHeight: 0
    }
  });

const ResultBoxWithStyles = withStyles(styles)(ResultBox);

const mapAppStateToProps = (appState: AppState) => ({});

export default connect(mapAppStateToProps)(ResultBoxWithStyles);

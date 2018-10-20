import { createStyles, Theme } from "@material-ui/core";
import { GlobalSettings } from "src/GlobalSettings";

const styles = ({ typography }: Theme) =>
  createStyles({
    root: {
      width: GlobalSettings.view.width * 0.5 - 3,
      height: 68
    },
    paper: {
      position: "relative",
      width: "100%",
      height: "100%",
      backgroundColor: "lightYellow"
    },
    firstSubSetFeedback: {
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
      whiteSpace: "pre",
      color: "gray"
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
      whiteSpace: "pre",
      color: "gray"
    },
    secondSubSetFeedback: {
      position: "absolute",
      bottom: 9,
      left: 70,
      fontSize: typography.fontSize * 1.1,
      fontFamily: "Roboto Mono",
      fontWeight: "normal",
      letterSpacing: 3,
      lineHeight: 0
    },
    overallFeedbackLine: {
      position: "absolute",
      top: 25,
      right: 30,
      fontSize: typography.fontSize * 4,
      fontFamily: "Roboto Mono",
      fontWeight: "lighter",
      lineHeight: 0
    },
    overallFeedback: {
      position: "absolute",
      top: 30,
      right: 7,
      fontSize: typography.fontSize * 2,
      fontFamily: "Roboto Mono",
      fontWeight: "normal",
      letterSpacing: -4,
      lineHeight: 0
    }
  });

export default styles;

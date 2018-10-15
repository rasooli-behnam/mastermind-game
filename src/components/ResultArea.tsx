import * as React from "react";
import ResultBox from "./ResultBox";
import { AppState } from "../reducers";
import { connect } from "react-redux";
import { createStyles, Grid, WithStyles, withStyles } from "@material-ui/core";

const numberOfResults: number = 3;

export interface ResultAreaProps extends WithStyles<typeof styles> {
  combination: AppState["combination"];
  feedbacks: AppState["feedbacks"];
}

class ResultArea extends React.Component<ResultAreaProps, any> {
  public render() {
    const { classes, feedbacks, combination } = this.props;

    console.log(combination);

    return (
      <Grid
        className={classes.root}
        container
        spacing={8}
        justify="flex-start"
        alignItems="center"
        direction="column-reverse"
      >
        {feedbacks
          .map((f, i) => <ResultBox key={i} feedback={f} />)
          .slice(0, 16)}
      </Grid>
    );
  }
}

const styles = createStyles({
  root: {
    width: "100%",
    height: "100%",
    margin: 0
  }
});

const ResultAreaWithStyles = withStyles(styles)(ResultArea);

const mapAppStateToProps = (appState: AppState) => ({
  combination: appState.combination,
  feedbacks: appState.feedbacks
});

export default connect(mapAppStateToProps)(ResultAreaWithStyles);

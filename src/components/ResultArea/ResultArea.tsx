import * as React from "react";
import ResultBox from "./ResultBox";
import { Grid } from "@material-ui/core";
import { Props } from "./types";

export default class ResultArea extends React.Component<Props, any> {
  public render() {
    const { classes, feedbacks, combination } = this.props;

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

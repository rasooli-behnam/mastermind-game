import * as React from "react";
import ResultBox from "./ResultBox";
import { createStyles, Grid, WithStyles, withStyles } from "@material-ui/core";

const numberOfResults: number = 3;

export interface ResultAreaProps extends WithStyles<typeof styles> {}

class ResultArea extends React.Component<ResultAreaProps, any> {
  public render() {
    const { classes } = this.props;

    return (
      <Grid
        className={classes.root}
        container
        spacing={8}
        justify="flex-start"
        alignItems="center"
        direction="column-reverse"
      >
        {Array.from(Array(numberOfResults).keys()).map(value => (
          <ResultBox key={value} />
        ))}
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

export default withStyles(styles)(ResultArea);

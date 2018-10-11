import * as React from "react";
import { WithStyles, createStyles, withStyles, Grid } from "@material-ui/core";
import ResultRow from "./ResultBox";

const numberOfResults: number = 3;

export interface ResultAreaProps extends WithStyles<typeof styles> {}

class ResultArea extends React.Component<ResultAreaProps, any> {
  public render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.root} container direction="column-reverse">
        {Array.from(Array(numberOfResults).keys()).map(value => (
          <ResultRow key={value} />
        ))}
      </Grid>
    );
  }
}

const styles = createStyles({
  root: {
    height: "100%",
    width: "100%",
    margin: 0
  }
});

export default withStyles(styles)(ResultArea);

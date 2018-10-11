import * as React from "react";
import { createStyles, Paper, WithStyles, withStyles } from "@material-ui/core";
import { GlobalSettings } from "../GlobalSettings";

export interface ChoiceProps extends WithStyles<typeof styles> {}

class Choice extends React.Component<ChoiceProps, any> {
  public render() {
    const { classes } = this.props;

    return <Paper className={classes.root} />;
  }
}

const styles = createStyles({
  root: {
    position: "relative",
    width: GlobalSettings.view.width - 10,
    height: "95%",
    margin: "0 5px",
    backgroundColor: "lightYellow"
  }
});

export default withStyles(styles)(Choice);

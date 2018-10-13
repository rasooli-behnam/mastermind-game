import * as React from "react";
import {
  createStyles,
  TextField,
  Theme,
  WithStyles,
  withStyles
} from "@material-ui/core";
import { GlobalSettings } from "../GlobalSettings";
import { connect } from "react-redux";
import { AppState } from "../reducers";

export interface ChoiceProps extends WithStyles<typeof styles> {
  combination: AppState["combination"];
}

class Choice extends React.Component<ChoiceProps, any> {
  constructor(props: ChoiceProps) {
    super(props);
    this.state = {
      guess: ""
    };
  }

  private handleFormSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    console.log(this.state.guess);
  };

  private handleTextfieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    this.setState({ guess: event.target.value });
  };

  public render() {
    const { classes, combination } = this.props;
    const { guess } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <TextField
          className={classes.root}
          placeholder="enter your guess here..."
          type="text"
          value={guess}
          onChange={this.handleTextfieldChange}
          margin="dense"
          variant="outlined"
          autoFocus={true}
        />
      </form>
    );
  }
}

const styles = createStyles({
  root: {
    position: "relative",
    fontWeight: "bold",
    width: GlobalSettings.view.width - 10,
    height: "95%",
    margin: "0 5px",
    backgroundColor: "lightYellow"
  }
});

const ChoiceWithStyle = withStyles(styles)(Choice);

const mapAppStateToProps = (appState: AppState) => ({
  combination: appState.combination
});

export default connect(mapAppStateToProps)(ChoiceWithStyle);

import * as React from "react";
import { AppState } from "../reducers";
import { connect } from "react-redux";
import {
  createStyles,
  TextField,
  WithStyles,
  withStyles
} from "@material-ui/core";
import { Dispatch } from "redux";
import { getFeedback, GetFeedbackAction, resetCombination } from "src/actions";
import { GlobalSettings } from "../GlobalSettings";

export interface ChoiceProps extends WithStyles<typeof styles> {
  endOfPlay: AppState["endOfPlay"];
  resetCombination: typeof resetCombination;
  getFeedback: typeof getFeedback;
}

export interface ChoiceState {
  guesses: string;
}

class Choice extends React.Component<ChoiceProps, ChoiceState> {
  constructor(props: ChoiceProps) {
    super(props);
    this.state = {
      guesses: ""
    };
    props.resetCombination();
  }

  private handleFormSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();

    this.props.getFeedback({
      guesses: this.state.guesses.split("")
    });
  };

  private handleTextfieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    this.setState({ guesses: event.target.value });
  };

  public render() {
    const { classes, endOfPlay } = this.props;
    const { guesses } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <TextField
          disabled={endOfPlay.condition}
          className={classes.root}
          placeholder="enter your guesses here..."
          type="text"
          value={endOfPlay.condition ? endOfPlay.message : guesses}
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
  endOfPlay: appState.endOfPlay
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  resetCombination: () => dispatch(resetCombination()),
  getFeedback: (prams: GetFeedbackAction["payload"]) =>
    dispatch(getFeedback(prams))
});

export default connect(
  mapAppStateToProps,
  mapDispatchToProps
)(ChoiceWithStyle);

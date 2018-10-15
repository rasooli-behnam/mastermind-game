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
import { Dispatch } from "redux";
import { resetCombination, getFeedback, GetFeedbackAction } from "src/actions";

export interface ChoiceProps extends WithStyles<typeof styles> {
  combination: AppState["combination"];
  feedbacks: AppState["feedbacks"];
  resetCombination: () => void;
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
    console.log(this.props.combination);
    console.log(this.props.feedbacks);

    this.props.getFeedback({
      guesses: this.state.guesses.split(""),
      combination: this.props.combination
    });
  };

  private handleTextfieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    this.setState({ guesses: event.target.value });
  };

  public render() {
    const { classes, combination, feedbacks } = this.props;
    const { guesses } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <TextField
          className={classes.root}
          placeholder="enter your guesses here..."
          type="text"
          value={guesses}
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
  combination: appState.combination,
  feedbacks: appState.feedbacks
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

import * as React from "react";
import { Props, State } from "./types";
import { TextField } from "@material-ui/core";

export default class Choice extends React.Component<Props, State> {
  constructor(props: Props) {
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
    let value = event.target.value.trim().toUpperCase();

    if (value.length > 9) value = value.slice(0, 9);

    if (/^[A-E]{0,9}$/.test(value)) this.setState({ guesses: value });
  };

  public render() {
    const { classes, endOfPlay } = this.props;
    const { guesses } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <TextField
          disabled={endOfPlay.condition}
          className={classes.root}
          placeholder="Choose a 9-letter code from A to E"
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

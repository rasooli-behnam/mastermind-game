import styles from "./styles";
import theComponent from "./ChoosingArea";
import withStyles from "@material-ui/core/styles/withStyles";
import { AppState } from "src/reducers";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getFeedback, GetFeedbackAction, resetCombination } from "src/actions";

const theComponentWithStyles = withStyles(styles)(theComponent);

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
)(theComponentWithStyles);

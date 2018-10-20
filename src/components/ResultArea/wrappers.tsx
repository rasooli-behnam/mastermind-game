import styles from "./styles";
import theComponent from "./ResultArea";
import withStyles from "@material-ui/core/styles/withStyles";
import { AppState } from "src/reducers";
import { connect } from "react-redux";

const theComponentWithStyles = withStyles(styles)(theComponent);

const mapAppStateToProps = (appState: AppState) => ({
  combination: appState.combination,
  feedbacks: appState.feedbacks
});

export default connect(mapAppStateToProps)(theComponentWithStyles);

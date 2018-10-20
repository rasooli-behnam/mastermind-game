import ChoosingArea from "./ChoosingArea";
import createStyles from "@material-ui/core/styles/createStyles";
import { GlobalSettings } from "src/GlobalSettings";
import { Theme } from "@material-ui/core";

const styles = ({ palette }: Theme) =>
  createStyles({
    root: {
      position: "relative",
      fontWeight: "bold",
      width: GlobalSettings.view.width - 10,
      height: "95%",
      margin: "0 5px",
      backgroundColor: "lightYellow"
    },
    snackbarContent: {
      backgroundColor: palette.error.dark
    }
  });

export default styles;

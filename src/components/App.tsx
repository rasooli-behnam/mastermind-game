import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Play from "./Play";

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Play />
      </React.Fragment>
    );
  }
}

export default App;

import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import reducers from "./reducers";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "typeface-roboto-mono";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();

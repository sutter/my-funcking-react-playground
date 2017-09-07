import React from "react";
import ReactDOM from "react-dom";
import App from "./components/pages/index.jsx";
import registerServiceWorker from "registerServiceWorker";
import "./styles/global";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

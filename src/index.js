import React from "react";
import { render } from "react-snapshot";
import App from "./components/pages/index.jsx";
import registerServiceWorker from "./registerServiceWorker";
import "./styles/global";

render(<App />, document.getElementById("root"));
registerServiceWorker();

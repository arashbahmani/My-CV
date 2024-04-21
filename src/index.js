import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import AppContainer from "./containers/AppContainer";

import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AppContainer />
  </StrictMode>
);

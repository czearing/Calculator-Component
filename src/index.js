import { StrictMode } from "react";
import ReactDOM from "react-dom";

import AdditionCalculator from "./AdditionCalculator";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AdditionCalculator />
  </StrictMode>,
  rootElement
);

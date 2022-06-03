import React from "react";
import ReactDOM from "react-dom";
import ContextHook from "./MainHooks/ContextProvider";
import BooleanHook from "./ReactTSHooks/BooleanHook";
import Counter from "./ReactTSHooks/CounterButtons";
import UseImageOnLoad from "./ReactTSHooks/UseImageOnLoad";

ReactDOM.render(
  <React.StrictMode>
    <ContextHook />
    <BooleanHook />
    <Counter />
    <UseImageOnLoad />
  </React.StrictMode>,
  document.getElementById("root")
);

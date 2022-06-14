import React from "react";
import ReactDOM from "react-dom";
import ContextHook from "./MainHooks/Context/ContextProvider";
import MemoHook from "./MainHooks/Memo/MemoHook";
import BooleanHook from "./ReactTSHooks/BooleanHook";
import Counter from "./ReactTSHooks/CounterButtons";
import UseImageOnLoad from "./ReactTSHooks/UseImageOnLoad";
import "./Style.scss";
import { Season } from "./TypeScript/Enum";
import { wrongString } from "./TypeScript/IgnoreFile";

ReactDOM.render(
  <React.StrictMode>
    <div className="wrapper">
      <div className="one">
        <ContextHook />
        <BooleanHook />
        <Counter />
      </div>
      <div className="two">
        <UseImageOnLoad />
      </div>
      <div className="three">
        <MemoHook />
      </div>
    </div>
    <div className="four">
      <div>{`${wrongString} Пример работы ts с ошибок`}</div>
      <div>
        Enum;
      </div>
      <div>{Season.Spring}</div>
      <div>{Season.Summer}</div>
      <div>{Season.Winter}</div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

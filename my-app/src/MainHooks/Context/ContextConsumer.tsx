import React from "react";
import { AppCtx } from "./ContextProvider";

const ContextConsumer = () => {
  const appContext = React.useContext(AppCtx);

  React.useEffect(() => {
    console.log("appContext", appContext?.name);
  }, [appContext]);

  return <div>{appContext?.name}</div>;
};

export default ContextConsumer;

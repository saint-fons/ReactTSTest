import React from "react";
import ContextConsumer from "./ContextConsumer";

interface AppContextInterface {
  name: string;
  author: string;
  url: string;
}

/* Для импорта в метсе создания контекст надо экспортровать */

export const AppCtx = React.createContext<AppContextInterface | null>(null);

const ContextHook = () => {
  const sampleAppContext: AppContextInterface = {
    name: "Using React Context in a Typescript App",
    author: "thehappybug",
    url: "http://www.example.com",
  };

  return (
    <div>
      <AppCtx.Provider value={sampleAppContext}>
        <ContextConsumer />
      </AppCtx.Provider>
    </div>
  );
};

export default ContextHook;

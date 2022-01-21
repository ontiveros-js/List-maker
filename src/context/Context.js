import React,{ createContext, useState } from "react";

export const Contexto = createContext();

const Context = ({ children }) => {
  const [dark, setDark] = useState(false);

  const theme = {
    dark,
    setDark,
  };

  return <Contexto.Provider value={theme}>{children}</Contexto.Provider>;
};

export default Context;

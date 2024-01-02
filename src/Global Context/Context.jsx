import { useContext, useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <GlobalContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;

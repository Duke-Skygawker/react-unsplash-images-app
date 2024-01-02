import { useContext, useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const bodyEl = document.getElementById("body");
    bodyEl.classList.toggle("dark-theme");
  };

  return (
    <GlobalContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;

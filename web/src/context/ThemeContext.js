import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const updateTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

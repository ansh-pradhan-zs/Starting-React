import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

let themes = ["#5D8736", "#EB5A3C", "#DA498D", "#F0BB78", "#66785F", "#7BD3EA"];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes[0]);

  function getRandomTheme() {
    const index = Math.floor(Math.random() * 6);
    console.log("RANDOM INDEX: ", index);
    setTheme(themes[index]);
  }

  return (
    <ThemeContext.Provider value={{ theme, getRandomTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

import { createContext, useContext, useReducer } from "react";

const themes = {
  DARK: "dark",
  LIGHT: "light",
};

const themesColors = {
  dark: {
    fg: "rgba(244,244,244,0.95)",
    bg: "rgba(10,10,10,0.95)",
  },
  light: {
    bg: "rgba(244,244,244,0.95)",
    fg: "rgba(10,10,10,0.95)",
  },
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case themes.DARK:
      return themesColors.dark;
    case themes.LIGHT:
      return themesColors.light;

    default:
      return themesColors.light;
  }
};

const ThemeContext = createContext(null);

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeContextProvider = ({ children }) => {
  const [theme, themeDispatch] = useReducer(themeReducer, themesColors.light);
  return (
    <ThemeContext.Provider value={{ theme, themeDispatch, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

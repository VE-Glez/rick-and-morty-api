import { createContext, useContext, useReducer } from 'react';

const themes = {
  DARK: 'dark',
  LIGHT: 'light',
  ONE: 'one',
  TWO: 'two',
  THREE: 'three',
};

const themesColors = {
  dark: {
    cardBackground: 'rgba(50,50,50,0.95)',
    header: '#B96D40',
    bg: '#444',
    fg: 'rgba(229,229,57,1)',
    CTA: '#F9564F',
  },
  light: {
    bg: 'rgba(250,250,250,0.95)',
    fg: 'rgba(10,10,10,0.75)',
    header: '#f2f2f2',
    cardBackground: 'rgba(253,229,183,1)',
    CTA: '#C00E32',
  },
  one: {
    header: '#9aa5c0',
    cardBackground: '#918e94',
    CTA: '#b47c4a',
    bg: '#4c515b',
    fg: '#cfc2bd ',
  },
  two: {
    fg: 'rgba(189, 198, 103, 1)',
    CTA: 'rgba(119, 150, 109, 1)',
    cardBackground: 'rgba(98, 109, 88, 1)',
    header: 'rgba(16, 29, 66, 1)',
    bg: 'rgba(13, 19, 23, 1)',
  },
  three: {
    bg: 'rgba(59, 13, 17, 1)',
    header: 'rgba(106, 57, 55, 1)',
    cardBackground: 'rgba(112, 101, 99, 1)',
    CTA: 'rgba(116, 131, 134, 1)',
    fg: 'rgba(157, 199, 200, 1)',
  },
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case themes.DARK:
      return themesColors.dark;
    case themes.LIGHT:
      return themesColors.light;
    case themes.ONE:
      return themesColors.one;
    case themes.TWO:
      return themesColors.two;
    case themes.THREE:
      return themesColors.three;

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

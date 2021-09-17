import React, { useEffect, useState, createContext } from 'react';
import { LightTheme, DarkTheme } from './Themes';
import { ThemeProvider } from '@mui/material/styles';

export const ThemeContext = createContext();

export const ThemeWrapper = ({ children }) => {
  const getInitialMode = () => {
    if (typeof localStorage === 'undefined') return true;
    const isReturningUser = 'dark' in localStorage;
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    const userPrefersDark = getPrefColorScheme();
    if (isReturningUser) {
      return savedMode;
    }
    return !!userPrefersDark;
  };

  const getPrefColorScheme = () => {
    if (!window.matchMedia) return;

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [theme, setTheme] = useState(getInitialMode() ? 'dark' : 'light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    typeof localStorage !== 'undefined' &&
      localStorage.setItem('dark', JSON.stringify(theme === 'dark'));
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

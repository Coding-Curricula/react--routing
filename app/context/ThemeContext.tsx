import { createContext, useContext, useState, useReducer, type ReactNode } from 'react'
import { initialThemeState, themeReducer, type Theme } from '../reducers/themeReducer';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useReducer(themeReducer, initialThemeState);

    const toggleTheme = () => {
        setTheme({ type: 'TOGGLE_THEME' });
    }

    return (
        <ThemeContext.Provider value={{ theme: theme.theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    const context = useContext(ThemeContext);

    if(!context){
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
}
// ThemeContext.js
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
    // Check both localStorage and system preference
    const getInitialTheme = () => {
        // Check localStorage first
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) return storedTheme;

        // Otherwise, check system preference
        const systemPreference = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        return systemPreference ? "dark" : "light";
    };

    const [theme, setTheme] = useState(getInitialTheme);

    // Update the document class and save theme in localStorage
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Toggle theme between light and dark
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

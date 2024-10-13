import { Context } from "./context";
import { LOCAL_STORAGE_THEME_KEY, ThemeEnum } from "./types";
import { useContext } from "react";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: ThemeEnum;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(Context);

    const toggleTheme = () => {
        const newTheme = theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
}

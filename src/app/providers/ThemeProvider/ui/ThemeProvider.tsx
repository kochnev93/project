import React, { FC, useMemo, useState, PropsWithChildren } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeEnum } from "../model/types";
import { Context } from "../model/context";

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeEnum) || ThemeEnum.LIGHT;

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeEnum>(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme: theme,
            setTheme: setTheme,
        }),
        [theme],
    );

    return <Context.Provider value={defaultProps}>{children}</Context.Provider>;
};

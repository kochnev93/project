import React from "react";
import { cn } from "shared/utils";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/AppRouter";
import { Header } from "widjets/Header";

import "./styles/index.scss";

export const App = (): React.ReactElement => {
    const { theme } = useTheme();

    return (
        <div className={cn("app", {}, [theme])}>
            <Header />
            <AppRouter />
        </div>
    );
};

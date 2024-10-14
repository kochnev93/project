import React from "react";
import { Link } from "react-router-dom";
import { cn } from "shared/utils";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/AppRouter";
import { Header } from "widjets/Header";

import "./styles/index.scss";

export const App = (): React.ReactElement => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={cn("app", {}, [theme])}>
            <Header />
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О нас</Link>
            <AppRouter />
        </div>
    );
};

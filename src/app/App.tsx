import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPage, MainPage } from "pages";
import { cn } from "shared/utils";
import { useTheme } from "app/providers/ThemeProvider";
import "./styles/index.scss";

export const App = (): React.ReactElement => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={cn("app", {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPage />} />
                    <Route path={"/"} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

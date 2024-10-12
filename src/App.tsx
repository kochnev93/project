import React, { Suspense } from "react";
import * as style from "./App.module.scss";
import "./index.scss";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AboutPage, MainPage } from "./pages";

export const App = (): React.ReactElement => {
    return (
        <BrowserRouter>
            <div className="app">
                <Link to={"/"}>Главная</Link>
                <Link to={"/about"}>О нас</Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path={"/about"} element={<AboutPage />} />
                        <Route path={"/"} element={<MainPage />} />
                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    );
};

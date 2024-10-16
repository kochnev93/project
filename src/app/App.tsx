import React, { Suspense } from "react";
import { cn } from "shared/utils";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/AppRouter";
import { Header } from "widjets/Header";
import { Sidebar } from "widjets/Sidebar";

import "./styles/index.scss";

export const App = (): React.ReactElement => {
    const { theme } = useTheme();

    return (
        <div className={cn("app", {}, [theme])}>
            <Suspense fallback="">
                <Header />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

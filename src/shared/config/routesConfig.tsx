import { RouteProps } from "react-router-dom";
import { MainPage, AboutPage } from "pages";

export enum AppRoutesEnum {
    MAIN = "main",
    ABOUT = "about",
}

export const AppRoutesPath: Record<AppRoutesEnum, string> = {
    [AppRoutesEnum.MAIN]: "/",
    [AppRoutesEnum.ABOUT]: "/about",
};

export const routerConfig: Record<AppRoutesEnum, RouteProps> = {
    [AppRoutesEnum.MAIN]: {
        path: AppRoutesPath.main,
        element: <MainPage />,
    },
    [AppRoutesEnum.ABOUT]: {
        path: AppRoutesPath.about,
        element: <AboutPage />,
    },
};

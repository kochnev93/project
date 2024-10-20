import { RouteProps } from 'react-router-dom';
import { MainPage, AboutPage, NotFound } from 'pages';

export enum AppRoutesEnum {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
}

export const AppRoutesPath: Record<AppRoutesEnum, string> = {
    [AppRoutesEnum.MAIN]: '/',
    [AppRoutesEnum.ABOUT]: '/about',
    [AppRoutesEnum.NOT_FOUND]: '*',
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
    [AppRoutesEnum.NOT_FOUND]: {
        path: AppRoutesPath.not_found,
        element: <NotFound />,
    },
};

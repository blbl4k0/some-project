import {AboutPage} from 'pages/AboutPage'
import {MainPage} from 'pages/MainPage'
import {NotFoundPage} from 'pages/NotFoundPage'
import {RouteProps} from 'react-router-dom'

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'notFound',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    // Должен быть в конце
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.notFound,
        element: <NotFoundPage />,
    },
}

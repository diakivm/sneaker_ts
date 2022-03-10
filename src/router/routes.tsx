import React from "react";
import Main from "../pages/main/Main";
import LoginPage from "../pages/login/LoginPage";
import Profile from "../pages/profile/Profile";
import Favorites from "../pages/favorites/Favorites";


interface IRoute {
    path: routeNames,
    element: React.ComponentType | React.ReactNode
}

export enum routeNames {
   MAIN = '/',
   LOGIN = '/profile',
   FAVORITES = '/favorites'
}

export const publicRoutes: IRoute[] = [
    {
        path: routeNames.MAIN,
        element: <Main/>
    },
    {
        path: routeNames.LOGIN,
        element: <Profile/>
    },
    {
        path: routeNames.FAVORITES,
        element: <Favorites/>
    },
]
import routesConfig from '~/configs/route';
import { LoginPage, NotFoundPage } from '~/pages';

export const publicRoutes = [
    {
        path: routesConfig.login,
        component: LoginPage,
    },
    {
        path: routesConfig.star,
        component: NotFoundPage,
    },
];

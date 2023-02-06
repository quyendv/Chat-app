import routesConfig from '~/configs/route';
import { AuthLayout } from '~/layouts';
import { AuthPage, HomePage, NotFoundPage } from '~/pages';

export const publicRoutes = [
    {
        path: routesConfig.auth,
        component: AuthPage,
        layout: AuthLayout,
    },
    {
        path: routesConfig.star,
        component: NotFoundPage,
    },
];

export const privateRoutes = [
    {
        path: routesConfig.home,
        component: HomePage,
    },
];

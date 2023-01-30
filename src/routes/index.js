import routesConfig from '~/configs/route';
import { HomePage, AuthPage, NotFoundPage } from '~/pages';

export const publicRoutes = [
    {
        path: routesConfig.home,
        component: HomePage,
    },
    {
        path: routesConfig.auth,
        component: AuthPage,
    },
    {
        path: routesConfig.star,
        component: NotFoundPage,
    },
];

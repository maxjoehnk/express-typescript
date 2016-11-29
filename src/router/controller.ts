import { Router, RouterOptions } from 'express';
import { IRoute, IRoutes } from './route';
import * as debug from 'debug';

const d = debug('express-typescript:router:controller');

export class Controller {
    public router: Router;
    public routes: IRoutes;

    constructor(options?: RouterOptions) {
        d('Constructing');
        this.router = Router(options);
        this.routes = this.routes || {};
        Object.keys(this.routes).forEach((path: string) => {
            let route: IRoute = this.routes[path];
            d('registering route', path, route);
            let handler: any = route;
            handler.middleware.splice(0, 0, path);
            this.router[handler.method].apply(this.router, handler.middleware);
        });
    }
}

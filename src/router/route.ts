import { Controller } from './controller';
import * as debug from 'debug';

const d = debug('express-typescript:router:route');

export function Route(suffix?: string) {
    suffix = suffix ? suffix : '/';
    return function(router: Controller, name: string) {
        let route = router[name];
        router[name].$handler = async function(req, res, next): Promise<any> {
            try {
                await route(req, res, next);
            }catch (err) {
                return next(err);
            }
        };
        router[name].$route = suffix;
        router[name].$middleware = [];
        d('Creating Route', suffix, router[name]);
    };
}

export interface IHandler {
    $handler: (req, res, next) => Promise<any>;
    $route: string;
    $middleware: ((req, res, next) => void)[];
}

export interface IRoutes {
    [route: string]: IRoute;
}

export interface IRoute {
    middleware: ((req, res, next) => void)[];
    method: string;
}

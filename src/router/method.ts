import { IHandler } from './route';
import { Controller } from './controller';
import * as debug from 'debug';

const d = debug('express-typescript:router:method');

function callback(method: string) {
    d('Registering type', method);
    return function(ctrl: Controller, property: string) {
        let route: IHandler = ctrl[property];
        d('Registering route with controller');
        let middleware: ((req, res, next) => void)[] = route.$middleware || [];
        d('Middleware', middleware);
        d('Route', route.$route);
        d('Route Handler', route);
        middleware.push(route.$handler);
        ctrl.routes = ctrl.routes || {};
        ctrl.routes[route.$route] = {
            middleware: middleware,
            method: method
        };
    };
}

export interface IMethod {
    (ctrl: Controller, property: string): void;
}

export const Checkout: IMethod    = callback('checkout');
export const Copy: IMethod        = callback('copy');
export const Delete: IMethod      = callback('delete');
export const Get: IMethod         = callback('get');
export const Head: IMethod        = callback('head');
export const Lock: IMethod        = callback('lock');
export const Merge: IMethod       = callback('merge');
export const Mkactivity: IMethod  = callback('mkactivity');
export const Mkcol: IMethod       = callback('mkcol');
export const Move: IMethod        = callback('move');
export const MSearch: IMethod     = callback('m-search');
export const Notify: IMethod      = callback('notify');
export const Options: IMethod     = callback('options');
export const Patch: IMethod       = callback('patch');
export const Post: IMethod        = callback('post');
export const Purge: IMethod       = callback('purge');
export const Put: IMethod         = callback('put');
export const Report: IMethod      = callback('report');
export const Search: IMethod      = callback('search');
export const Subscribe: IMethod   = callback('subscribe');
export const Trace: IMethod       = callback('trace');
export const Unlock: IMethod      = callback('unlock');
export const Unsubscribe: IMethod = callback('unsubscribe');

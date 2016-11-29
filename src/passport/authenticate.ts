import { UnauthorizedError } from '../error';
import { Controller } from '../router/controller';
import * as passport from 'passport';

export function Authenticate(strategy: string, options?: any) {
    return function(router: Controller, property: string) {
        router[property].$middleware.push(passport.authenticate(strategy, options));
    }
}

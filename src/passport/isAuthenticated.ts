import { UnauthorizedError } from '../error';
import { Controller } from '../router/controller';

export function IsAuthenticated(router: Controller, property: string) {
    router[property].$middleware.push((req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        return next(new UnauthorizedError());
    });
}

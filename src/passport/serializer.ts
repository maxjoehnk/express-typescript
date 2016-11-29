import { UnauthorizedError } from '../error';
import { Controller } from '../router/controller';
import * as passport from 'passport';

export function Serialize(target: any, property: string) {
    passport.serializeUser(async function(user, done) {
        try {
            done(null, await target[property](user));
        }catch (err) {
            done(err, undefined);
        }
    });
}

export function Deserialize(target: any, property: string) {
    passport.deserializeUser(async function(user, done) {
        try {
            done(null, await target[property](user));
        }catch (err) {
            done(err, undefined);
        }
    })
}

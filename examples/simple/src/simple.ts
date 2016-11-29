import { Controller, Route, Get } from 'express-typescript';

export class SimpleController extends Controller {
    @Get
    @Route('/')
    async index(req, res, next) {
        res.send('<html><body><h1>Hello World</h1></body></html>');
        res.status(200);
        res.end();
    }
}

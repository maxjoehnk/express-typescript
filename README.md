# express-typescript

Use Typescript Decorators to define express routes

## Usage
Create a new Controller like so
```typescript
import { Controller, Route, Get, Post } from 'express-typescript';
import { store } from './db';

class ExampleController extends Controller {

    @Get
    @Route() // defaults to '/'
    async index(req, res, next) {
        res.send('<h1>Hello World</h1>');
        res.status(200);
        res.end();
    }

    @Post
    @Route('/:id')
    async update(req, res, next) {
        await store(req.body); // Will emit an error via express routing to the error middleware
        res.json({
            code: 'OK',
            status: 200
        });
        res.status(200);
        res.end();
    }
}
```

And then just import it into your express app

```typescript
import { ExampleController } from './controllers/example';
import * as express from 'express';
import { createServer } from 'http';

const app = express();

app.use(new ExampleController().router);

const server = createServer(app);
server.listen(8080, () => {
    console.log('listening on port 8080');
});
```

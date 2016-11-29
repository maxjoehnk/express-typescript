import * as express from 'express';
import { SimpleController } from './simple';
import { createServer } from 'http';

const app = express();

app.use(new SimpleController().router);

const server = createServer(app);
server.listen(8080, () => console.log('listening on 8080'));

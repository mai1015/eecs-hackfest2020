import * as express from 'express';
import * as path from 'path';
import * as cookie from 'cookie-parser';
import * as logger from 'morgan';

import indexRouter from './routes/index';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", indexRouter);
export default app;

import * as express from 'express';
import * as path from 'path';
import * as cookie from 'cookie-parser';
import * as logger from 'morgan';
import { initDB } from "./data/db";

initDB().then(_r => {
    console.log('connect db successful')
});

import indexRouter from './routes/index';
import apiRouter from './routes/api';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next) =>{
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Authorization, X-Request-With, Set-Cookie, Cookie, Bearer, Cache-Control");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Max-Age", "86400");
    next();
});

app.use('/api', apiRouter);
app.use("/", indexRouter);

export default app;


import cookieParser from 'cookie-parser';
import express from 'express';
import log4js from 'log4js';
import path from 'path';

import dataProviderRouter from './routes/dataProvider';
import indexRouter from './routes/index';
import mapperRouter from './routes/mapper';

const log = log4js.getLogger('app');

const app = express();

app.use(log4js.connectLogger(log4js.getLogger('http'), { level: 'auto' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/', indexRouter);
app.use('/mapper', mapperRouter);
app.use('/dp', dataProviderRouter);

export default app;

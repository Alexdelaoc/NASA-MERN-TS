require('dotenv').config();
import { mongoDBConnection } from './config/mongodb';
import { elephantDBConnection } from './config/elephantsql';

import express from 'express'
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

const port = process.env.PORT;

import apiRouter from './routes/apiRoutes';
import userRouter from './routes/userRoutes';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cors
app.use(cors());

// Helmet
app.use(helmet());

// Morgan
app.use(morgan('dev'));

// Web router.
app.use('/api', apiRouter);
app.use('/user', userRouter);

(async () => {
    try {
        await mongoDBConnection();
        await elephantDBConnection();
        app.listen(port, () => {
            console.log('\x1b[32m%s\x1b[0m', `App listening on port ${port}`);
        })
    } catch (error) {
        console.log('\x1b[31m%s\x1b[0m', `There was an error... ${error}`);
    }
})(); // '(function here)()' automatically executes the function. No need to invoke it right after defining it.
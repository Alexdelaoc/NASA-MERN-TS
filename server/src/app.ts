require('dotenv').config();
import { mongoDBConnection } from './config/mongodb';

import express from 'express'
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

const port = process.env.PORT;

import apiRouter from './routes/apiRoutes';

app.use(express.json());

// Cors
app.use(cors());

// Helmet
app.use(helmet());

// Morgan
app.use(morgan('dev'));

// Web router.
app.use('/api', apiRouter);

(async () => {
    try {
        await mongoDBConnection();
        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        })
    } catch (error) {
        console.log(`There was an error... ${error}`);
    }
})(); // '(function here)()' automatically executes the function. No need to invoke it right after defining it.
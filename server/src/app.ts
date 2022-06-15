require('dotenv').config();

import express from 'express'
import cors from 'cors';

const mongoDBConnection = require('./config/mongodb.ts');

const app = express();

const port = process.env.PORT;

const init = async () => {
    try {
        await mongoDBConnection();
        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        })
    } catch (error) {
        console.log(`There was an error... ${error}`);
    }
};

init();
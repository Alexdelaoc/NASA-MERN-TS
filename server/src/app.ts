require('dotenv').config();

import express from 'express'
import cors from 'cors';
import helmet from 'helmet';


const mongoDBConnection = require('./config/mongodb.ts');

const app = express();

const port = process.env.PORT;

app.use(express.json);
app.use(express.urlencoded);


(async () => {
    try {
        await mongoDBConnection();
        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        })
    } catch (error) {
        console.log(`There was an error... ${error}`);
    }
})() // '(function here)()' executes the function automatically. No need to invoke it roght after defining it.
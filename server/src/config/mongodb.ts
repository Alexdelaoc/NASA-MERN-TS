require('dotenv').config();
import mongoose from 'mongoose';

const username: string | undefined = process.env.MONGODB_USERNAME;
const password: string | undefined = process.env.MONGODB_PASSWORD;
const cluster: string | undefined = process.env.MONGODB_CLUSTER;
const dbname: string | undefined = process.env.MONGODB_DBNAME;

const uri: string = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;
const configParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl:true,
    sslValidate:false,
};

export const mongoDBConnection = async () => {
    try {
        await mongoose.connect(uri, configParams);
        console.log('\x1b[32m%s\x1b[0m', 'Now connected to MongoDB Atlas...');
    } catch (error) {
        console.log('\x1b[31m%s\x1b[0m', `Unable to connect to the Database: ${error}`);
    }
};
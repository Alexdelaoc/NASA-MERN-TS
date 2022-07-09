require('dotenv').config();
import mongoose from 'mongoose';

const username: string | undefined = process.env.MONGODB_USERNAME;
const password: string | undefined = process.env.MONGODB_PASSWORD;
const cluster: string | undefined = process.env.MONGODB_CLUSTER;
const dbname: string | undefined = process.env.MONGODB_DBNAME;

const uri: string = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const mongoDBConnection = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Now connected to MongoDB Atlas...');
    } catch (error) {
        console.log(`Unable to connect to the Database: ${error}`);
    }
};

module.exports = mongoDBConnection;
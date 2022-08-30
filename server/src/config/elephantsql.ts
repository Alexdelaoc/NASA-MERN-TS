require('dotenv').config();
const { Sequelize } = require('sequelize');

const username: string | undefined = process.env.ELEPHANT_USER;
const password: string | undefined = process.env.ELEPHANT_PASSWORD;
const hostname: string | undefined = process.env.ELEPHANT_HOSTNAME;
const databaseName: string | undefined = process.env.ELEPHANT_DATABASE;

const conString: string = `postgres://${username}:${password}@${hostname}/${databaseName}`;

export const db = new Sequelize(conString);

export const elephantDBConnection = async () => {
    try {
        await db.authenticate()
            .then(console.log('\x1b[34m%s\x1b[0m', 'Now connected to ElephantSQL...'));
    } catch (error) {
        console.error('\x1b[31m%s\x1b[0m', 'Unable to connect to ElephantSQL:', error)
    }
}
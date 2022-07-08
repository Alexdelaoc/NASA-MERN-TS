export { };

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number;
            MONGODB_USERNAME: string;
            MONGODB_PASSWORD: string;
            MONGODB_CLUSTER: string;
            MONGODB_DBNAME: string;
        }
    }
}
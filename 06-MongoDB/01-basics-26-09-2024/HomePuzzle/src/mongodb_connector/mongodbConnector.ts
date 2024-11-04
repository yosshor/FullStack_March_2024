import { MongoClient } from 'mongodb';


export class MongoDBConnector {
    private client: MongoClient | undefined;
    private uri: string;
 
    constructor(uri: string) {
        this.uri = uri;
    }
 
    async connect():Promise<MongoClient> {
        try {
            this.client = new MongoClient(this.uri);
            console.log('Connecting to MongoDB Atlas cluster...');
            await this.client.connect();
            console.log('Successfully connected to MongoDB Atlas!');
            return this.client;

        } catch (error) {
            console.error('Connection to MongoDB Atlas failed!', error);
            process.exit();
        }
    }
 
    async close() {
        try {
            await this.client?.close();
            console.log('Connection to MongoDB Atlas closed successfully!');
        } catch (error) {
            console.error('Failed to close connection to MongoDB Atlas!', error);
            process.exit();
        }
    }
}



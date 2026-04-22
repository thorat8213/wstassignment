const { MongoClient } = require('mongodb');

// Connection URL (Localhost default)
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'imed_pune_db';

async function connectToDatabase() {
    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log('--- Database Status ---');
        console.log('Successfully connected to MongoDB server');

        const db = client.db(dbName);
        console.log(`Using Database: ${dbName}`);

        // Perform a simple check: List collections
        const collections = await db.listCollections().toArray();
        console.log('Available Collections:', collections.map(c => c.name));

    } catch (err) {
        console.error('Connection failed:', err);
    } finally {
        // Close the connection
        await client.close();
        console.log('Connection closed.');
    }
}

connectToDatabase();
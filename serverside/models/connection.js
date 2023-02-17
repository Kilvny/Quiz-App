import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()
mongoose.set('strictQuery', false);
import { MongoClient, ServerApiVersion } from 'mongodb';
export default async function connect() {
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(err => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        client.close();
    });
    // await mongoose.connect(uri, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useCreateIndex: true })
    // console.log('Database connected successfully...')
}




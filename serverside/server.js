import express, { json } from 'express'
import morgan from 'morgan';
import cors from 'cors'
import { config } from 'dotenv';
import router from './router/routes.js';
import { connect } from 'mongoose';

const app = express()

// middleware 
app.use(morgan('dev')) // logging 

app.use(cors())

app.use(json()) // returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.

config({ path: '.env' }) // Loads .env file contents into process.env.


/**
 * @description : creating the first route for testing and config for PORT listen
*/

app.get('/', (req, res) => {
    try {
        res.json('200 GET Success')
    } catch (error) {
        res.json(error)
    }
})


const PORT = process.env.PORT || 8080

// api routes 

app.use('/api/v1', router)


// database connection 
import mongoose from "mongoose";

mongoose.set('strictQuery', false);

import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
}).then(() => {
    console.log('Database Connected success!')
}).catch(error => {
    console.error(error);
});
mongoose.connect(uri)
// connect().then(()=>{

//     try {

//     } catch (error) {
//         console.log('Error while connecting to server')
//     }

// }).catch(error => {
//     console.error('Error while connecting to Database');

// })    

app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`)
})
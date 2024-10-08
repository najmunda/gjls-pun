import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.URI || "";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: false,
        deprecationErrors: true,
    }
});

try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment, You successfully connected to MongoDB!");
} catch (err) {
    console.error(err);
}

let db = client.db("gjlspun");

export default db;
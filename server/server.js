import express from "express";
import cors from "cors";
import episodes from "./routes/episodes.js"
import dotenv from "dotenv";

const whitelist = [process.env.DEV]
const corsOption = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS.'));
        }
    }
}

dotenv.config();
const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors(corsOption));
app.use(express.json());
app.use("/episodes", episodes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
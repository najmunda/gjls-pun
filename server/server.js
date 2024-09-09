import express from "express";
import cors from "cors";
import episodes from "./routes/episodes.js"
import tags from "./routes/tags.js"
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/episodes", episodes);
app.use("/tags", tags);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
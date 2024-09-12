import express from "express";
import db from "../db/connection.js";

const router = express.Router();

router.get("/", async (req, res) => {
    let find = {};
    const q = JSON.parse(req.headers.q);
    if (q) {
        find = { $text: { $search: q }};
    }
    const sort = q ? {} : JSON.parse(req.headers.sort);
    const tags = JSON.parse(req.headers.tags);
    if (tags.length) {
        find['tags'] = { $all: tags };
    }
    const collection = await db.collection("episodes");
    const results = await collection.find(find).sort(sort).toArray();
    res.send(results).status(200);
});

export default router;
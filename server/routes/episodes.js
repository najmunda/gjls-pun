import express from "express";
import db from "../db/connection.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        // Pagination
        const pageItem = 10;
        const pageIndex = req.headers.pageindex ? JSON.parse(req.headers.pageindex) : 1;
        // Search, sort, and label
        const q = JSON.parse(req.headers.q);
        const sort = JSON.parse(req.headers.sort);
        const tags = JSON.parse(req.headers.tags).length ? { 'tags': { $all: JSON.parse(req.headers.tags) } } : {};
        // Get data
        const collection = db.collection("episodes");
        const results = await collection.aggregate([
            {$match: q ? { $text:{ $search: q } } : {} },
            {$match: tags},
            {$sort: q ? { score: { $meta: "textScore" } } : sort},
            {
                $facet: {
                    metadata: [{ $count: 'totalEpisodes' }],
                    data: [{ $skip: (pageIndex - 1) * pageItem }, { $limit: pageItem }],
                    tags: [{ $group: { _id: null, alltags: { $push: "$tags" } } }, { $project: { tags: { $reduce: { input: "$alltags", initialValue: [], in: { $setUnion: [ "$$value", "$$this" ] } } } } }],
                },
            },
        ]).toArray();
        res.send({
            metadata: {
                totalEpisodes: results[0].metadata.length ? results[0].metadata[0].totalEpisodes : 0,
                totalPages: results[0].metadata.length ? Math.ceil(results[0].metadata[0].totalEpisodes / 10) : 0,
            },
            data : results[0].data,
            tags: results[0].tags[0] ? results[0].tags[0].tags : [],
        }).status(200);
    } catch (error) {
       console.log(error);
       res.status(500).send('Internal Server Error');
    }
});

export default router;
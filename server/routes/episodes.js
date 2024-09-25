import express from "express";
import db from "../db/connection.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        // Header : q, sortBy, isDesc, tags
        // Search, sort, and label
        const q = req.headers.q ? JSON.parse(req.headers.q) : '';
        const sortBy = req.headers.sortby ? JSON.parse(req.headers.sortby) : 'num';
        const isDesc = req.headers.isdesc ? JSON.parse(req.headers.isdesc) : false;
        const tags = req.headers.tags ? JSON.parse(req.headers.tags) : [];
        // Pagination
        const pageIndex = req.headers.pageindex ? JSON.parse(req.headers.pageindex) : 1;
        const pageItem = 10;
        // Get data
        const collection = db.collection("episodes");
        const results = await collection.aggregate([
            {$match: q ? { $text:{ $search: q } } : {} },
            {$match: tags.length ? { 'tags': { $all: tags } } : {} },
            {$sort: q ? { score: { $meta: "textScore" } } : {[sortBy]: isDesc ? -1 : 1}},
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
                pageIndex: pageIndex,
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
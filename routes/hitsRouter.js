const express = require('express');
const hitsRouter = express.Router();
const apiHits = require('../data/api');

hitsRouter.get('/', async(req, res) => {
    const data = await apiHits.gethitsFirst();
    res.json(data);
});

hitsRouter.get('/getHitsByPage', async(req, res) => {
    const page = req.query.page;
    const hits = await apiHits.gethitsByPage(page);
    res.json(hits);
});

hitsRouter.get('/getHitsByCategory', async(req, res) => {
    const page = req.query.page;
    const category = req.query.category;
    const hits = await apiHits.gethitsByCategory(page, category);
    res.json(hits);
});

module.exports = hitsRouter;
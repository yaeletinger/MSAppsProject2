// express.js to build rest api
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
const hitsRouter = require('./routes/hitsRouter');

app.use('/hits', hitsRouter);

app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});
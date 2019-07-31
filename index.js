const express = require('express');
const app = express();
const port = 3000;

const pipeline = require('./pipeline');

app.use(express.json());

app.post('/', pipeline);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

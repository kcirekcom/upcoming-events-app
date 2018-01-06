'use strict';

import express from 'express';

const PORT = 'localhost:3000';
const app = express();

app.use(express.static(`${__dirname}/build`));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

app.listen(PORT, () => {
  console.log(`server up: ${PORT}`);
});
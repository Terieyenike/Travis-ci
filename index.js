const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('ci with travis');
})

const server = app.listen(3000, () => {
  console.log('app running on port 3000, can we build');
})

module.exports = server;
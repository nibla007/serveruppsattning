const express = require('express');
const server = express();
const port = 3000;

server.get('*', (req, res) => {
  res.send('<h1>Hello World! 🐱‍🚀🤠</h1>');
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
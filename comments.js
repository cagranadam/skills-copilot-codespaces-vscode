// create web server to serve comments
const express = require('express');
const { readFileSync } = require('fs');
const app = express();
const comments = JSON.parse(readFileSync('/comments.json'));

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

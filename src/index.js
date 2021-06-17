require('dotenv').config();
const express = require('express');
const { PORT } = process.env;
const app = express();
const fs = require('fs');

app.get('/style.css', async (req, res) => {
  const data = fs.readFileSync('./src/style.css');
  res.send(data);
});

app.get('/page', (req, res) => {
  res.set('link', '<style.css>; rel=stylesheet');
  res.send('');
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

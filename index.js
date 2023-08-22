const express = require('express');
require('dotenv').config();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`Hello from Node.js app!`)
});


app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

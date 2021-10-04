const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Testing Prototye");
})

app.listen(80, () => {
  console.log(`App is up and running`);
})
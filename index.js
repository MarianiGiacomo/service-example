const express = require('express');
const cors = require('cors');

require('dotenv').config()
const app = express();

const port = process.env.PORT;

app.use(cors())
app.get('/', (req,res) => {
  res.end('Hello from service')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

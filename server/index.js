const express = require('express');
const app = express();
require('dotenv').config()

app.get("/", (req, res) => res.sendFile("/home/ubuntu/page-1/public/index.html"));


app.listen(process.env.port, () => {
  console.log('Servidor Ligado na porta' + process.env.port);
});

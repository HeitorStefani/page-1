const express = require('express');
const app = express();
require('dotenv').config()

//app.get("/", (req, res) => res.sendFile("C:/Users/heito/OneDrive/Ambiente de Trabalho/Programação/Node/page-1/public/index.html"));

app.get("/", (req, res) => {
  res.send({server: 1})
})

app.listen(process.env.port, () => {
  console.log('Servidor Ligado');
});

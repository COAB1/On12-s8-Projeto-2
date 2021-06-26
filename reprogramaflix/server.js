const { response } = require("express");
const express = require("express"); //importando express

const app = express();

app.get("/", (request, response) => {
  response.status(200).send({
    "chave": "olá pessoas, sejam bem vindas"
  })
});

app.listen(3000, () => {
  console.log("estou rodando, babier")
});
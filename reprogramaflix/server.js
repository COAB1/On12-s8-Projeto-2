const app = require("./src/app.js");


app.get("/", (request, response) => {
  response.status(200).send({
    "chave": "olá pessoas, sejam bem vindas"
  })
});

app.listen(3000, () => {
  console.log("estou rodando, babier")
});